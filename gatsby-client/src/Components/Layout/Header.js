import React, { useState } from "react"
import tw from "twin.macro"
import { Fade as Hamburger } from 'hamburger-react'
import Button from "../Common/Button"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"

const NavContainer = tw.nav`container mx-auto flex flex-wrap px-14 py-5 flex-col md:flex-row items-center`
const H1 = tw.p`text-red-400 text-3xl font-regular font-bold`
const PinkButtonStyle = tw`text-red-400 py-2 px-6 text-base mt-4 bg-transparent hover:text-white hover:bg-red-400 ring-4 ring-red-400 ring-inset rounded-full`
const PurpleButtonStyle = tw`text-purple-800 py-2 px-6 text-base mt-4 bg-transparent hover:text-white hover:bg-purple-800 ring-4 ring-purple-800 ring-inset rounded-full`

const Drawer = (props) => (
  <div className={`mt-20 flex fixed bg-white shadow-red-lg overflow-visible w-full h-auto z-30 transition-all duration-1000 ease-in-out opacity-0 transform ${props.toggle ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`} >
    {props.children}
  </div>
)
const Bar = (props) =>
(
  <div className={`rounded border border-${props.color}-400`} />
  )
  
  const IconStyle = tw`hover:bg-purple-800 bg-red-400 text-white h-4 w-4`
  const Icon = (props) =>
  (
    <div className="p-2 m-2 rounded-full bg-red-400">
		{ props.icon==="facebook" && <FaFacebookF css={IconStyle}/> } 
		{ props.icon==="twitter" && <FaTwitter css={IconStyle}/> } 
		{ props.icon==="insta" && <FaInstagram css={IconStyle}/> } 
  </div>
)

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  
  return (
    <>
    <header className="fixed flex w-full shadow-red-lg bg-white z-50">
      <NavContainer>
        {/* <NavBar> */}
          <img src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f847e77ef0f35843704c5b8_pom%20logo.svg" />
        {/* </NavBar> */}
        <div className="ml-auto">
          <Hamburger size={20} color={openDrawer ? "#ff779d" : "#6B7280"} toggled={openDrawer} toggle={setOpenDrawer} />
        </div>
      </NavContainer>
    </header>
    {/* Sliding Drawer */}
    <Drawer toggle={openDrawer}>
      <div className="my-10 mx-auto w-full px-32 text-red-400 font-regular items-center text-center flex-col">
        <div className="pt-12 pb-6 flex flex-row items-center justify-between">
          <H1>HOME</H1>
          <H1>HOW IT WORKS</H1>
          <H1>DATING TIPS</H1>
          <H1>CONTACT</H1>
          <div className="flex flex-col ml-4">
            <Button style={PinkButtonStyle}>Join The Queue</Button>
            <Button style={PurpleButtonStyle}>Playlist Generator</Button>
          </div>
        </div>
        <Bar color="red" />
        <div className="pb-12 flex flex-row justify-between items-center">
          <div className="text-center flex flex-col">
              <p className="py-8">Coming soon on</p>
            <div className="flex flex-row justify-between">
              <img className="px-2" src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f763c892974051a94f1d887_Android%20Download.svg" />
              <img className="px-2" src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f763c893ac4118bf4da8006_iOs%20Download.svg" />
            </div>
          </div>
          <div className="text-xl flex flex-row justify-evenly py-8">
            <p className="m-2">hello@thepom.com</p>
            <p className="m-2">T & C's</p>
            <p className="m-2">Privacy Policy</p>
          </div>
          <div className="flex flex-row justify-evenly">
            <Icon icon="insta" />
            <Icon icon="facebook" />
            <Icon icon="twitter" />
          </div>
        </div>
      </div>
    </Drawer>
    </>
  )
}

export default Header;