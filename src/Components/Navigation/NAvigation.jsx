import React from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'


function Navigation(props) {


    return (

        <div className='navigation'>
            <Link  to={"/"}><img src="./Assest/Images/Logo.png" alt="logo"  /></Link>
            <div className='navLinksDiv'>
                <Link className={props.checked === "Home" ? "Link checked" : "Link" } to={"/"}>Home</Link>
                <Link className={props.checked === "AboutUs" ? "Link checked" : "Link" } to={"/AboutUs"}>About Us</Link>
                <Link className={props.checked === "Destination" ? "Link checked" : "Link" } to={"/Destination"}>Destination</Link>
                <Link className={props.checked === "Tips" ? "Link checked" : "Link" } to={"/Tips"}>Tips</Link>
                <Link className={props.checked === "Contact" ? "Link checked" : "Link" } to={"/Contact"}>Contact</Link>
                <Link className={props.checked === "AdminPanel" ? "Link checked" : "Link" } to={"/AdminPanel"}>Admin Panel</Link>
            </div>
        </div>

    )
}

export default Navigation