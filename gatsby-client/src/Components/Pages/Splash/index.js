import React, { useEffect, useState } from "react"
import JoinQueue from "./JoinQueue"
import Mission from "./Mission"
import LearnMore from "./LearnMore"

const Splash = () => {

  const [email, setEmail] = useState('')

  useEffect(()=> {
    console.log(email)
  }, [email])

  const handleInput = (e) => {
    e.preventDefault();
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit: " + email)
  }

  return (
    <>
      <JoinQueue email={email} handleInput={handleInput} handleSubmit={handleSubmit} />
      <Mission />
      <LearnMore />
    </>
  )
}

export default Splash;