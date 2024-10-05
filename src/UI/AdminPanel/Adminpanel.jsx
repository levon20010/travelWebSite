import React from 'react'
import "./AdminPAnel.css"
import Navigation from '../../Components/Navigation/NAvigation'
import AdminPanelPosts from '../../Components/AdminPanelPosts/AdminPanelPosts'
import Header from '../../Components/Header/Header'
import AdminPanelCategories from '../../Components/AdminPanelCategories/AdminPanelCategories'
import AdminPanelCountry from '../../Components/AdminPanelCountry/AdminPanelCountry'

const Adminpanel = () => {
  return (
    <div>
        <Navigation checked ="AdminPanel"/>
        <Header pageName="Admin Panel" imgHeight="520px" src="./Assest/Images/adminPanelBackgrund.jpg" alt="adminPanelBackgrund"/>
        <AdminPanelCategories/>
        <AdminPanelCountry/>
        <AdminPanelPosts/>
    </div>
  )
}

export default Adminpanel