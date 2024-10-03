import React from 'react'
import "./Home.css"
import Navigation from '../../Components/Navigation/NAvigation'
import Header from '../../Components/Header/Header'

const Home = () => {
    return (
        <div className='homPage'>
            <Navigation checked = "Home" />
            <Header  imgHeight = "587px" pageName ="HOME" src = "./Assest/Images/HomeBackground.png"/>
            
        </div>
    )
}

export default Home