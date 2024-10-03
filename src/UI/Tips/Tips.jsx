import React from 'react'
import Navigation from '../../Components/Navigation/NAvigation'
import Header from '../../Components/Header/Header'

const Tips = () => {
    return (
        <div>
            <Navigation checked = "Tips" />
            <Header imgHeight = "427px" pageName ="Travel Tips" src = "./Assest/Images/TravelTipsBacground.png" alt ="TravelTipsBacground"/>
        </div>
    )
}

export default Tips