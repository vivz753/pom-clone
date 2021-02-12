import React from "react"
import Button from "../../Common/Button"
import tw from "twin.macro"

const Container = tw.container`w-full flex flex-col`;

const PinkContainer = tw(Container)`bg-red-400 flex flex-row`;

const Content2 = tw.container`mx-auto py-32 w-1/2 items-center text-center`

const ButtonStyle = tw`text-red-400 text-base py-1 px-8 mt-4 bg-purple-800 hover:text-purple-800 hover:bg-transparent border-4 border-purple-800 rounded-full`

const LearnMore = () => {
  return (
    <PinkContainer>
    <Content2>
      <p className="py-8 px-32 text-5xl text-regular text-white">
        WANT TO KNOW HOW IT WORKS?
      </p>
      <Button style={ButtonStyle}>
          Learn More
        </Button>
    </Content2>
    <Content2>
      Phone gif
    </Content2>
  </PinkContainer>
  )
}

export default LearnMore;