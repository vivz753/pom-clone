import React from "react"
import { Router } from "@reach/router"
import Store from "../Components/Store"
import Splash from "../Components/Splash"

export default function Home() {
  return (
    <Store>
      <Router basepath="/app">
        <Splash path="/" />
      </Router>
    </Store>
  )
}
