import React from 'react'
import "./AdminPAnel.css"
import Navigation from '../../Components/Navigation/NAvigation'
import AdminPanelPosts from '../../Components/AdminPanelPosts/AdminPanelPosts'
import Header from '../../Components/Header/Header'
import AdminPanelCategories from '../../Components/AdminPanelCategories/AdminPanelCategories'
import AdminPanelCountry from '../../Components/AdminPanelCountry/AdminPanelCountry'
import SubscribeComponent from '../../Components/SubscribeComponent/SubscribeComponent'
import Footer from '../../Components/Footer/Footer'

const Adminpanel = () => {
  return (
    <div>
        <Navigation checked ="AdminPanel"/>
        <Header pageName="Admin Panel" imgHeight="520px" src="./Assest/Images/adminPanelBackgrund.jpg" alt="adminPanelBackgrund"/>
        <AdminPanelCategories/>
        <AdminPanelCountry/>
        <AdminPanelPosts/>
        <SubscribeComponent/>
        <Footer/>
    </div>
  )
}

export default Adminpanel