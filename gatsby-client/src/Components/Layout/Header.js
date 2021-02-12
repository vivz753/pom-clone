import React from "react"
import tw from "twin.macro"

const NavBar = tw.nav`flex flex-wrap md:flex-row flex-col items-center md:items-start`
const Container = tw.div`container mx-auto flex flex-wrap px-14 py-6 flex-col md:flex-row items-center`

const Header = () => {
  
  return (
    <header className="fixed flex w-full shadow-red-md bg-white">
      <Container>
        <NavBar className="text-regular text-xl text-gray-500">
          POM
        </NavBar>
        <p className="ml-auto">
          Side Drawer
        </p>
      </Container>
    </header>
  )
}

export default Header;