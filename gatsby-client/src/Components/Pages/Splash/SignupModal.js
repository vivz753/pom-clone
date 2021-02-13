import React, { useState } from "react";
import axios from "axios";
import { navigate } from "gatsby";
import { __serverUrl__ } from "../../../constants";
import Button from "../../Common/Button"
import Modal from "../../Common/Modal"
import InputEntry from "../../Common/InputEntry"
import tw from "twin.macro";

const ButtonStyle = tw`text-red-400 text-base py-1 px-8 mt-4 bg-transparent hover:text-white hover:bg-red-400 border-4 border-red-400 rounded-full`
const Row = tw.div`flex flex-row`

const SignupModal = ({closeModal, setLoggedIn, magic, email}) => {

  const [loadingSignup, setLoadingSignup] = useState(false); // this loading refers to the user attempting to login and verify the DIDT with the DB

  const [signupState, setSignupState] = useState({
    email: email,
    firstName: '',
    lastName: '',
  });

  const [modalMessage, setModalMessage] = useState("")

  const handleInput = (e) => {
    const key = e.target.name
    const value = e.target.value
    setSignupState({
      ...signupState,
      [key]: value,
    })
    console.log(signupState);
  }

  const authenticateSignup = async (DIDT) => {
    const body = { 
      email: signupState.email,
      firstName: signupState.firstName,
      lastName: signupState.lastName,
    }

    const config = { headers: { Authorization: "Bearer " + DIDT }, withCredentials: true }

    let data = (await axios.post(`${__serverUrl__}/api/user/login`, body, config)).data
    return data.authorized ? data.user : false;
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      setLoadingSignup(true);
        const DIDT = await magic.auth.loginWithMagicLink({ email: signupState.email.toLowerCase() });
        let authorizedUser = await authenticateSignup(DIDT);

        if (authorizedUser) {
          setLoadingSignup(false);
          setLoggedIn(authorizedUser);
          closeModal();
          navigate("/app/welcome");
        }

    } catch (err) {
      setLoadingSignup(false);
      console.log(`Error registering account and/or authenticating, ${err}`);
    }
  }

  return (
    <Modal closeModal={closeModal}>
      <form onSubmit={handleSignup}>
        <label className="block text-red-400 text-xl my-4 mb-6 mx-2">
          Make an account
        </label>
        <InputEntry label="Email" name="email" type="email" required autoComplete="on" value={signupState.email} onChange={handleInput} placeholder="glencoco@meangirls.com" />
        <Row>
          <InputEntry label="First Name" name="firstName" required autoComplete="on" type="text" value={signupState.firstName} onChange={handleInput} placeholder="Glen" />
          <InputEntry label="Last Name" name="lastName" required autoComplete="on" type="text" value={signupState.lastName} onChange={handleInput} placeholder="Coco" />
        </Row>
        <Button disabled={loadingSignup} type="submit" style={ButtonStyle}>
          { loadingSignup ? ( 
            "Loading..." 
            ) : ( "Sign Up" ) 
          }
        </Button>
      </form>
      <Row>
        <div tw="mt-4 py-2 text-red-500">
          {modalMessage}
        </div>
      </Row>
    </Modal>
  )
}

export default SignupModal