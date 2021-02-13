import React from "react"
import Button from "../Common/Button"
import tw, { css } from "twin.macro"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"


const Container = tw.container`w-full flex flex-col`;
const PurpleContainer = tw(Container)`bg-purple-800`;

const Bar = (props) =>
(
  <div className={`rounded border border-${props.color}`} />
)
  
const IconStyle = tw`text-purple-800 h-4 w-4`
const HoverStyle = css`&:hover { color: #fbb03b }`
const Icon = (props) =>
  (
    <div className="p-2 m-2 rounded-full bg-white">
		{ props.icon==="facebook" && <FaFacebookF css={[ IconStyle, HoverStyle]}/> } 
		{ props.icon==="twitter" && <FaTwitter css={[ IconStyle, HoverStyle]}/> } 
		{ props.icon==="insta" && <FaInstagram css={[ IconStyle, HoverStyle]}/> } 
  </div>
)

const H1 = (props) => (
  <div className="text-3xl font-regular font-bold pb-4" style={{ color: "#fbb03b" }} >
    {props.children}
  </div>
)
const YellowButtonStyle = tw`text-purple-800 px-4 text-sm m-2 mr-8 bg-white hover:text-yellow-400 hover:ring-yellow-400 ring-4 ring-white ring-inset rounded-md`

const P = (props) => (
  <div css={[HoverStyle]} >
    {props.children}
  </div>
)

const Footer = (props) => {
  return (
    <div className={props.className}>
      <PurpleContainer>
        <div className="my-10 mx-auto w-full px-32 text-white font-regular flex-col">
          <div className="pt-12 pb-6 flex flex-row items-start justify-between">
            <div className="flex flex-col">
              <H1>PAGES</H1>
              <P>Home</P>
              <P>How it works</P>
              <P>Dating tips</P>
              <P>Contact</P>
            </div>
            <div className="flex flex-col">
              <H1>CONTACT</H1>
              <P>hello@thepom.co</P>
              <P>partnerships@thepom.co</P>
            </div>
            <div className="flex flex-col">
              <H1>LEGAL</H1>
              <P>T & C's</P>
              <P>Privacy Policy</P>
              <P>Cookie Policy</P>
              <P>Disclaimer</P>
            </div>
            <div className="flex flex-col">
              <H1>DOWNLOAD</H1>
                <p className="pb-2">Coming soon on</p>
                <img className="w-28 py-2" src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f770de1931e3b3393750520_iOs%20WHite.svg" />
                <img className="w-28 py-2" src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f770dfe6fd5e57af5bd11c4_Download%20Android.svg" />
            </div>
          </div>
          <Bar color="white" />
          <div className=" flex flex-row justify-between items-end py-8">
            <div className="text-sm flex flex-row justify-evenly">
              <p className="m-2">© POM 2020</p>
            </div>
            <div className="flex flex-row justify-evenly">
              <Button style={YellowButtonStyle}>Manage Cookie Preferences</Button>
              <Icon icon="insta" />
              <Icon icon="facebook" />
              <Icon icon="twitter" />
            </div>
          </div>
        </div>
      </PurpleContainer>
    </div>
  )
}

export default Footer;