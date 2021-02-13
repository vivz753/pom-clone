import React from "react"
import Button from "../../Common/Button"
import tw from "twin.macro"

const Container = tw.container`w-full flex flex-col`;

const PinkContainer = tw(Container)`bg-red-400 flex flex-row`;

const Content2 = tw.container`mx-auto py-32 w-1/2 items-center text-center`
const Content1 = tw.div`w-full py-24 items-center text-center flex flex-row`


const ButtonStyle = tw`text-red-400 text-base py-1 px-8 mx-auto mt-4 bg-purple-800 hover:text-purple-800 hover:bg-transparent border-4 border-purple-800 rounded-full`

const LearnMore = () => {
  return (
    <PinkContainer>
    <Content1>
      <div className="flex flex-col px-32 w-1/2 mx-auto text-center items-center">

      <p className="py-8 text-5xl text-regular text-white">
        WANT TO KNOW HOW IT WORKS?
      </p>
      <Button style={ButtonStyle}>
        Learn More
      </Button>
      </div>
      <div className="w-1/2">

      <video className="object-contain mx-auto h-96 border-4 border-purple-800 rounded-2xl" id="video" autoPlay loop muted>
        <source src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f81c759e8bfd0547a8f72e3_Ui animation for we-transcode.mp4" type="video/mp4" />  
      </video>
      </div>
    </Content1>
  </PinkContainer>
  )
}

export default LearnMore;