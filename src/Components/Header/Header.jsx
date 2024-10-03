import React from 'react'
import "./Header.css"

const Header = (props) => {

    return (
        <div className='header'>
            <div className='img-div'>
                <img width="100%" height={props.imgHeight} src={props.src} alt={props.alt} />
            </div>
            <div className='headerText'>
                <h2>{props.pageName}</h2>
            </div>
        </div>
    )
}

export default Header