import React, { useContext } from "react"
import { Link } from "gatsby"
import tw from "twin.macro"
import { Fade as Hamburger } from 'hamburger-react'
import { LoggedInContext } from "../Store"
import Drawer from "./Drawer"
import useComponentVisible from "./useComponentVisible"

const NavContainer = tw.div`container mx-auto flex flex-wrap md:px-14 px-8 py-5 flex-row items-center justify-around`

const Header = () => {
  const [loggedIn] = useContext(LoggedInContext);
  const [ref, openDrawer, setOpenDrawer] = useComponentVisible(false);
  
  return (
    <div ref={ref}>
    <header className="fixed flex w-full shadow-red-lg bg-white z-50">
      <NavContainer>
        <div className="flex order-first mr-auto block">
          <Link to="/app">
            <img src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f847e77ef0f35843704c5b8_pom%20logo.svg" />
          </Link>
        </div>
        <div className="flex flex-row items-center ml-auto block">
          { loggedIn && (
            <div className="font-regular text-red-400 mr-4">
              <Link to="/app/welcome">{ loggedIn.email }</Link>
            </div>
          )}
          <Hamburger size={20} color={openDrawer ? "#ff779d" : "#6B7280"} toggled={openDrawer} toggle={setOpenDrawer} />
        </div>
      </NavContainer>
    </header>
    <Drawer toggle={openDrawer} />
    </div>
  )
}

export default Header;