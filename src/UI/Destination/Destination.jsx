import React from 'react'
import "./Destinaton.css"
import Navigation from '../../Components/Navigation/NAvigation'
import Header from '../../Components/Header/Header'

const Destination = () => {
  return (
    <div>
      <Navigation checked = "Destination"  />
      <Header imgHeight = "522px" pageName ="Destination" src = "./Assest/Images/destinationBacground.png" alt ="destinationBacground" />
    </div>
  )
}

export default Destination