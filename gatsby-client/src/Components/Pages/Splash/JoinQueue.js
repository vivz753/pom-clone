import React from "react"
import Button from "../../Common/Button"
import InputEntry from "../../Common/InputEntry"
import tw from "twin.macro"
import Fade from "react-reveal/Fade"


const Container = tw.div`w-full flex flex-col`;
const PurpleContainer = tw(Container)`bg-purple-800`;
const Content1 = tw.div`md:mx-auto mx-2 py-64 items-center text-center`

const ButtonStyle = tw`text-purple-800 text-base py-1 px-8 mt-4 bg-red-400 hover:text-red-400 hover:bg-transparent border-4 border-red-400 rounded-full`
const ButtonStyleDisabled = tw`text-purple-800 text-base py-1 px-8 mt-4 bg-red-400 border-4 border-red-400 rounded-full`
const InputStyle = tw`border-2 border-white focus:border-blue-500 focus:ring-red-900 focus:ring-2 ring-2 ring-red-800 focus:outline-none bg-transparent text-white placeholder-white font-regular text-sm h-10 px-3 py-2 mt-2 w-full block rounded-full`

const JoinQueue = ({email, handleInput, handleSubmit}) => {

  return (
    <PurpleContainer>
      <Content1>
        <Fade bottom duration={1000}>
          <div className="">
            <title>
              POM - The dating app for music lovers
            </title>
            <div className="py-8 md:px-32 px-16 md:text-6xl text-5xl text-regular text-white">
              THE DATING APP FOR
              <br></br>
              <p className="underline text-red-400">
                MUSIC LOVERS
              </p>
            </div>
            <div className="md:px-16 px-4 items-center flex flex-col">
              <p className="py-4 md:w-4/6 text-lg text-white text-bold font-regular">
                POM harnesses the Power of Music, channelling it into an exciting, new inclusive dating app.
              </p>
              <form className="md:w-1/2 w-3/4" onSubmit={handleSubmit}>
              <InputEntry style={InputStyle} name="email" type="email" required autoComplete="on" value={email} onChange={handleInput} placeholder="enter your email here..." />
              <Button disabled={!email} type="submit" style={email ? ButtonStyle : ButtonStyleDisabled}>
                Join The Queue
              </Button>
              </form>
            </div>
          </div>
        </Fade>
      </Content1>
    </PurpleContainer>
  )
}

export default JoinQueue