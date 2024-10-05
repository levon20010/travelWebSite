import React from 'react'
import "./InputText.css"

const InputText = (props) => {
  return (
   <input className='input' ref={props.Ref} type="text" placeholder={props.placeholder} />
  )
}

export default InputText