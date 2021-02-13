import React from "react"
import { Router } from "@reach/router"
import Store from "../Components/Store"
import Splash from "../Components/Pages/Splash"
import Welcome from "../Components/Pages/Welcome"

function App() {
  return (
    <Store>
      <Router basepath="/app" >
        <Splash path="/" />
        <Welcome path="/welcome" />
      </Router>
    </Store>
  )
}
export default App;