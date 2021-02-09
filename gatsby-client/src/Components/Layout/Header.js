import React from "react"
import tw from "twin.macro"

const Header = () => {
  
  return (
    <header className="bg-white">
      <div className="container mx-auto flex flex-wrap p-5 my-6 flex-col sm:flex-row items-center">
        <nav className="text-red-500">
          Pom Logo
        </nav>
      </div>
      <div>
        {/* Side drawer icon */}
      </div>
    </header>
  )
}

export default Header;