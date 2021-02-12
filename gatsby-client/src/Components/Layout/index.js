import React from "react";
import Header from "./Header"
import Footer from "./Footer"
import tw, { GlobalStyles } from "twin.macro"


function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <GlobalStyles />
      <Header />
        <main className="flex-1">
          { children }
        </main>
      <Footer className="z-40" />
    </div>
  )
}

export default Layout;