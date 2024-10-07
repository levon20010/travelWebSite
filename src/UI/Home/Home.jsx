import React from 'react'
import "./Home.css"
import Navigation from '../../Components/Navigation/NAvigation'
import Button from '../../Components/Button/Button'
import HomeMain from '../../Components/HomeMain/HomeMain'
import SubscribeComponent from '../../Components/SubscribeComponent/SubscribeComponent'
import Footer from '../../Components/Footer/Footer'




const Home = () => {
    return (
       
        <div className='homPage'>
            <Navigation checked = "Home" />
            <div className='homeHeader'>
                <img className='homeHeaderBAcgroundImg' width="100%" height="627px" src="./Assest/Images/HomeBackground.png" alt="HomeBackground" />
                <div className='homeHeaderTextDiv'>
                    <h3>THE COUNTER: <span>70</span> Countries <span>1036</span> Cities </h3>
                    <h2>Leave your mark on all 
                    over the world  </h2>
                    <Button buttonText = "Reade More" />
                    <p>Scroll Down to Continue</p>
                    <img width={32} height={32} src="./Assest/Images/arrowDown.png" alt="arrowDown" />
                </div>
            </div>
            <HomeMain/>
            <SubscribeComponent/>
            <Footer/>
        </div>
    )
}

export default Home