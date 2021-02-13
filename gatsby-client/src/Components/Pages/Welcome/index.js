import React, { useContext } from "react";
import tw from "twin.macro"
import { LoggedInContext, MagicContext } from "../../Store"
import Button from "../../Common/Button"
import { __serverUrl__ } from "../../../constants"
import axios from "axios";
import { navigate } from "gatsby";

const Container = tw.div`w-full flex flex-col`;
const PurpleContainer = tw(Container)`bg-purple-800`;
const Content1 = tw.div`mx-auto py-64 items-center text-center`
const ButtonStyle = tw`text-purple-800 text-base py-1 px-8 mt-4 bg-red-400 hover:text-red-400 hover:bg-transparent border-4 border-red-400 rounded-full`

const Welcome = () => {
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext)
  const [magic] = useContext(MagicContext)
  const handleLogout = async () => {
    await axios.get(`${__serverUrl__}/api/user/logout`, { withCredentials: true })

    setLoggedIn(false);
    await magic.user.logout();
    navigate("/app");

  };
  
  const { firstName, queue } = loggedIn
  return (
    <PurpleContainer>
    <Content1>
      <title>
        Welcome
      </title>
      <div className="py-8 text-6xl text-regular text-white">
        WELCOME TO
        <br>
        </br>
      <p className="underline text-red-400 py-4">
        POM
      </p>
      </div>
      <div className="px-16 items-center flex flex-col">
        <p className="py-4 w-4/6 text-lg text-white text-bold font-regular">
          Dear {firstName}, you are person #{queue} in the queue!
        </p>
      </div>
      <Button style={ButtonStyle} onClick={handleLogout}>Logout</Button>
    </Content1>
    </PurpleContainer>
  )
}

export default Welcome;