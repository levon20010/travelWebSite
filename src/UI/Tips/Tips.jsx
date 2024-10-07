import React from 'react'
import Navigation from '../../Components/Navigation/NAvigation'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Tips = () => {
    return (
        <div>
            <Navigation checked = "Tips" />
            <Header imgHeight = "427px" pageName ="Travel Tips" src = "./Assest/Images/TravelTipsBacground.png" alt ="TravelTipsBacground"/>

            <Footer/>
        </div>
    )
}

export default Tips