import React from 'react'
import "./Button.css"

const Button = (props) => {
  return (
    <button onClick={props.onClick} className='Button'>{props.buttonText}</button>
  )
}

export default Button