import React from "react";
import Header from "./Header"
import tw, { GlobalStyles } from "twin.macro"

const PageContainer = tw.div`bg-purple-200 text-xl w-full mx-auto p-12`;

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <GlobalStyles />
      <Header />
      {/* <PageContainer> */}
        <main className="flex-1">
          { children }
        </main>
      {/* </PageContainer> */}
    </div>
  )
}

export default Layout;