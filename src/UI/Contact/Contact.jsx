import React from 'react'
import "./Contact.css"
import Navigation from '../../Components/Navigation/NAvigation'
import Header from '../../Components/Header/Header'

const Contact = () => {
  return (
    <div>
        <Navigation checked = "Contact" />
        <Header imgHeight = "352px" pageName ="Contact" src = "./Assest/Images/ContactBackground.png" alt ="ContactBackground"/>
        </div>
  )
}

export default Contact