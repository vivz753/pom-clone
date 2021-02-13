import React, { useState, useEffect } from "react";
import axios from "axios";
import { Magic } from "magic-sdk";
import Layout from "../Layout";
import { __serverUrl__, __magicKey__ } from "../../constants";

export const MagicContext = React.createContext();
export const LoggedInContext = React.createContext();
export const LoadingSessionContext = React.createContext();

export const Store = ({ children }) => {
  const [magic, setMagic] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loadingSession, setLoadingSession] = useState(true);
	
  const initMagic = async() => {
    /* preload iframe */
    let m = new Magic(__magicKey__);
    m.preload();
    setMagic(m);
  }

  const fetchUser = async () => {
      /* On page refresh, send a request to /api/user to see if there's a valid user session */
      try {
        const { user } = (await axios.get(`${__serverUrl__}/api/user`, { withCredentials: true })).data
        console.log("user from token")
        console.log(user)

        return user;

      } catch (err) {
        throw Error("Unable to fetch user session for Store")
      }
  }

  useEffect(() => {

    (async () => {
      try {
        console.log("GATSBY_ENV: " + process.env.GATSBY_ENV)

        !magic && await initMagic();
  
        let loggedIn = await fetchUser();
  
        !loggedIn && magic && magic.user.logout();
  
        if (loggedIn) {
          setLoggedIn(loggedIn);
        }
      } catch (err) {
        console.log(err)
      }

      setLoadingSession(false);
    })();
  }, []);


  return (
    <LoggedInContext.Provider value={[loggedIn, setLoggedIn]}>
      <MagicContext.Provider value={[magic]}>
        <LoadingSessionContext.Provider
          value={[loadingSession, setLoadingSession]}
        >
          <Layout>{children}</Layout>
        </LoadingSessionContext.Provider>
      </MagicContext.Provider>
    </LoggedInContext.Provider>
  )
}

export default Store;