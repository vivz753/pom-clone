import React from "react";
import Button from "./Button"

const Modal = (props) => (
  <>
  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
    <div className="relative w-auto md:my-6 md:max-w-2xl mx-auto lg:w-1/2 md:w-3/4 w-full px-2">
      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
        <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 bg-purple-800 rounded-md">
          <Button onClick={props.closeModal}>
            <span className="bg-transparent text-white mt-1 h-6 w-6 text-2xl hover:text-black block outline-none focus:outline-none">
              ×
            </span>
          </Button>
        </div>
        <div className="relative md:p-10 p-4 flex-auto">
          {props.children}
        </div>
      </div>
    </div>
  </div>
  {/* Dim the background */}
  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
)

export default Modal;