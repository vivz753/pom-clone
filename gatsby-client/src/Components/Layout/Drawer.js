import React from "react"
import Button from "../Common/Button"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"
import tw from "twin.macro"

const H1 = tw.p`text-red-400 md:text-3xl text-2xl font-regular font-bold hover:text-purple-800 py-1`
const PinkButtonStyle = tw`text-red-400 py-2 px-6 text-base mt-4 bg-transparent hover:text-white hover:bg-red-400 ring-4 ring-red-400 ring-inset rounded-full`
const PurpleButtonStyle = tw`text-purple-800 py-2 px-6 text-base mt-4 bg-transparent hover:text-white hover:bg-purple-800 ring-4 ring-purple-800 ring-inset rounded-full`

const Bar = (props) =>
(
  <div className={`rounded border border-${props.color}-400`} />
  )
  
  const IconStyle = tw`text-white h-4 w-4`
  const Icon = (props) =>
  (
    <div className="p-2 m-2 rounded-full bg-red-400 hover:bg-purple-800">
		{ props.icon==="facebook" && <FaFacebookF css={IconStyle}/> } 
		{ props.icon==="twitter" && <FaTwitter css={IconStyle}/> } 
		{ props.icon==="insta" && <FaInstagram css={IconStyle}/> } 
  </div>
)

const DrawerContainer = (props) => (
  <div
    ref={props.ref}
    className={`pt-20 flex fixed bg-white shadow-red-lg overflow-visible w-full h-auto z-30 transition-all duration-1000 ease-in-out opacity-0 transform ${props.toggle ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`} 
  >
    {props.children}
  </div>
)

const Drawer = (props) => {


  return (
    <DrawerContainer ref={props.ref} toggle={props.toggle} >
      <div className="lg:my-10 my-4 mx-auto w-full px-24 text-red-400 font-regular items-center text-center flex-col">
        <div className="pt-12 md:pb-6 pb-8 flex flex-row items-center justify-between lg:flex-row flex-col">
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
        <div className="pb-12 pt-4 flex md:flex-row flex-col justify-between items-center text-xs md:text-xl">
          <div className="text-center flex flex-col">
              <p className="py-4 lg:text-sm text-xs">Coming soon on</p>
            <div className="flex flex-row justify-between">
              <img className="w-24 md:w-28 mr-4" src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f763c892974051a94f1d887_Android%20Download.svg" />
              <img className="w-24 md:w-28" src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f763c893ac4118bf4da8006_iOs%20Download.svg" />
            </div>
          </div>
          <div className="lg:text-xl text-xs flex flex-row justify-evenly py-4">
            <p className="m-2 hover:text-purple-800">hello@thepom.com</p>
            <p className="m-2 hover:text-purple-800">T & C's</p>
            <p className="m-2 hover:text-purple-800">Privacy Policy</p>
          </div>
          <div className="flex flex-row justify-evenly">
            <Icon icon="insta" />
            <Icon icon="facebook" />
            <Icon icon="twitter" />
          </div>
        </div>
      </div>
    </DrawerContainer>
  )
}

export default Drawer;