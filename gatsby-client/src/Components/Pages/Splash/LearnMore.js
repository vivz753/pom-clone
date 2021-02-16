import React from "react"
import Button from "../../Common/Button"
import tw from "twin.macro"
import Fade from "react-reveal/Fade"

const Container = tw.container`w-full flex flex-col`;

const PinkContainer = tw(Container)`bg-red-400 flex flex-row`;

const Content1 = tw.div`w-full lg:py-24 py-8 items-center text-center flex flex-col lg:flex-row`


const ButtonStyle = tw`text-red-400 text-base py-1 px-8 mx-auto mt-4 bg-purple-800 hover:text-purple-800 hover:bg-transparent border-4 border-purple-800 rounded-full`

const LearnMore = () => {
  return (
    <PinkContainer>
      <Content1>
        <Fade bottom duration={2500}>
          <div className="order-last flex flex-col lg:px-32 px-8 py-8 lg:w-1/2 mx-auto text-center items-center">
            <p className="lg:py-8 py-4 md:text-5xl text-4xl text-regular text-white">
              WANT TO KNOW HOW IT WORKS?
            </p>
            <Button style={ButtonStyle}>
              Learn More
            </Button>
          </div>
        </Fade>
        <div className="lg:w-1/2 py-12 mb-4">
          <video className="object-contain mx-auto h-96 border-4 border-purple-800 rounded-2xl" id="video" autoPlay loop muted>
            <source src="https://uploads-ssl.webflow.com/5f760442c871757baf72e5ee/5f81c759e8bfd0547a8f72e3_Ui animation for we-transcode.mp4" type="video/mp4" />  
          </video>
        </div>
      </Content1>
    </PinkContainer>
  )
}

export default LearnMore;