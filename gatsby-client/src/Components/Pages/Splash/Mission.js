import React from "react";
import tw from "twin.macro"
import Button from "../../Common/Button"

const Container = tw.div`w-full flex flex-col`;
const GrayContainer = tw(Container)`bg-gray-100 flex flex-row`;
const Content2 = tw.div`mx-auto w-1/2 items-center text-center`
const ButtonStyle = tw`text-red-400 text-base py-1 px-8 mt-4 bg-transparent hover:text-white hover:bg-red-400 border-4 border-red-400 rounded-full`

const Mission = () => {
  return (
    <GrayContainer>
      <Content2>
          <img className="object-cover h-full w-full" src="https://c.stocksy.com/a/OnX300/z9/844898.jpg" />
      </Content2>
      <Content2>
      <div className="mx-auto py-64 text-center justify-center items-center">
        <img className="mx-auto" src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f8321cad320e45d9bae1642_Group%20743.svg" />
        <p className="py-8 text-5xl text-regular text-red-400">
          OUR MISSION
        </p>
        <div className="items-center flex flex-col">
          <p className="py-4 w-4/6 text-lg text-gray-500 text-bold font-regular">
            In a dating scene dominated by swipe-lefts and swipe-rights, we like to do things differently. POM delivers genuine connections based on a shared love of the same music.
            <br></br>
            <br></br>
            Launching in London soon, there’s a limited number of spots available for our upcoming beta so sign up now for early-access benefits.            </p>
          <Button style={ButtonStyle}>
            Dating Tips
          </Button>
        </div>
      </div>
      </Content2>
    </GrayContainer>
  )
}

export default Mission;