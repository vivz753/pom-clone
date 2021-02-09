import React from "react";
import Header from "./Header"
import tw, { GlobalStyles } from "twin.macro"

const PageContainer = tw.div`bg-gray-200 text-xl w-1/2`;

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <GlobalStyles />
      <Header />
      <PageContainer>
        <main>
          { children }
        </main>
      </PageContainer>
    </div>
  )
}

export default Layout;