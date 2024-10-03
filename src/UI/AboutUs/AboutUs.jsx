import React from 'react'
import "./AboutUs.css"
import Navigation from '../../Components/Navigation/NAvigation'
import Header from '../../Components/Header/Header'

const AboutUs = () => {
    return (
        <div>
            <Navigation checked = "AboutUs" />
            <Header imgHeight = "547px" pageName ="About Us" src = "./Assest/Images/AboutUSBAckground.png" alt="AboutUSBAckground"/>
        </div>
    )
}

export default AboutUs