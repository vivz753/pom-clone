import React, { useContext, useState } from "react"
import { MagicContext, LoggedInContext } from "../../Store";
import JoinQueue from "./JoinQueue"
import Mission from "./Mission"
import LearnMore from "./LearnMore"
import SignupModal from "./SignupModal"

const Splash = () => {
  const [magic] = useContext(MagicContext);
  const [loggedIn, setLoggedIn] = useContext(LoggedInContext);
  
  const [email, setEmail] = useState('')
  const [showSignupModal, setShowSignupModal] = useState(false); // signup modal
  
  const handleInput = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSignupModal(true)
  }

  return (
    <>
      { showSignupModal && (
        <SignupModal email={email} closeModal={()=>setShowSignupModal(false)} setLoggedIn={setLoggedIn} magic={magic} />
      )}
      <JoinQueue email={email} handleInput={handleInput} handleSubmit={handleSubmit} />
      <Mission />
      <LearnMore />
    </>
  )
}

export default Splash;