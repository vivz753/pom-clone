import React from "react"
import { Router } from "@reach/router"
import Store from "../Components/Store"
import Splash from "../Components/Pages/Splash"
import Welcome from "../Components/Pages/Welcome"

export default function Home() {
  return (
    <Store>
      <Splash />
    </Store>
  )
}
