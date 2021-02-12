import React from 'react';

const Button = (props) => (
  <button
    onClick={props.onClick}
    style={{ transition: "all .15s ease" }}
    type={props.type || "button"}
    css={props.style}
    disabled={props.disabled}
  >
    {props.children}
  </button>
)

export default Button;