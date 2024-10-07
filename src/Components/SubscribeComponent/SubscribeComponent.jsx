import React from 'react'
import "./SubscribeComponent.css"
import { Link } from 'react-router-dom'
import Button from '../Button/Button'


const SubscribeComponent = () => {
    return (
        <div className='subscribeDiv'>
            <div className='subscribeTop'>
                <Link target="_blank" to={"https://www.instagram.com/lyovmay"}>
                    <Button buttonText={"Follow @lyovmay instagram"} />
                </Link>
            </div>
            <div className='subscribeBottom'>
                <h3>
                Join <span>98,641</span> Monthly Readers. Subscribe Today!
                </h3>
                <div>
                    <input type="email" placeholder='Email Adress' />
                    <Button buttonText = "Subscribe" />
                </div>
            </div>
        </div>
    )
}

export default SubscribeComponent