import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../UI/Home/Home'
import AboutUs from '../../UI/AboutUs/AboutUs'
import Destination from '../../UI/Destination/Destination'
import Contact from '../../UI/Contact/Contact'
import Tips from '../../UI/Tips/Tips'

const NavigationRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element ={<Home/>} />
            <Route path='/AboutUs' element ={<AboutUs/>} />
            <Route path='/Destination' element ={<Destination/>} />
            <Route path='/Tips' element ={<Tips/>} />
            <Route path='/Contact' element ={<Contact/>} />
        </Routes>
    </div>
  )
}

export default NavigationRoutes