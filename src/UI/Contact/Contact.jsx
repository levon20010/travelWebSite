import React from 'react'
import "./Contact.css"
import Navigation from '../../Components/Navigation/NAvigation'
import Header from '../../Components/Header/Header'
import SubscribeComponent from '../../Components/SubscribeComponent/SubscribeComponent'
import Footer from '../../Components/Footer/Footer'

const Contact = () => {
  return (
    <div>
      <Navigation checked="Contact" />
      <Header imgHeight="352px" pageName="Contact" src="./Assest/Images/ContactBackground.png" alt="ContactBackground" />

      <SubscribeComponent/>
      <Footer/>
    </div>
  )
}

export default Contact