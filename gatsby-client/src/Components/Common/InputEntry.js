import React from "react"
import tw from "twin.macro"

const InputEntry = (props) => (
  <label className="block my-4 px-1 md:px-2" 
    css={[ 
      tw`w-full`,
      props.width==="1/2" && tw`w-1/2`,
      props.width==="1/3" && tw`w-1/3`,
      props.width==="1/4" && tw`w-1/4`,
      props.width==="1/5" && tw`w-1/5`,
    ]}
  >
    <p className="pl-2">
      {props.label}
    </p>
    <input
      className="border-2 bg-transparent font-regular text-sm h-10 px-3 py-2 mt-2 w-full block rounded-full"
      css={props.style}
      disabled={props.disabled}
      name={props.name}
      type={props.type}
      required={props.required}
      autoComplete={props.autoComplete}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    >
  </input>
  </label>
)
export default InputEntry;