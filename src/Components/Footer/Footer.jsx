import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerTop'>
                <Link to={"/"}>
                    <img width={149} height={63} src="./Assest/Images/Logo.png" alt="logo" />
                </Link>
                <h3>Body</h3>
                <h3>Travel</h3>
                <h3>Account</h3>
            </div>
            <div className='footerCentr'>
                <div className='footerCentrFirstDiv'>
                    <p>
                        We are location independent bloggers, digital influencers, small group tour organizers and world travelers with a serious passion for the sun, the sea and adventure.
                        <br />
                        <br />
                        Eight years and 60-something countries later and we are still on the road.
                    </p>
                </div>
                <div>
                    <p className='text'>
                        Add: 221B John hope
                        Street, Lekki, Lagos,
                        Nigeria.
                    </p>
                    <p>

                        <br />
                        T: +234 706 507 8544
                        <br />
                        <br />
                        E: info@redexplorers.com
                        <br />
                        <br />
                        W: www. redexplorers.com
                    </p>
                </div>
                <div>
                    <Link>My List</Link>
                    <br />
                    <br />
                    <Link>My Requests</Link>
                    <br />
                    <br />
                    <Link>My Credits</Link>
                    <br />
                    <br />
                    <Link>My Info</Link>
                    <br />
                    <br />
                    <Link>Contact</Link>
                </div>
                <div>
                    <Link>Travel</Link>
                    <br />
                    <br />
                    <Link>Why Travel</Link>
                    <br />
                    <br />
                    <Link>Become a Traveler</Link>
                    <br />
                    <br />
                    <Link>How Its Works</Link>
                    <br />
                    <br />
                    <Link>Traveling FAQs</Link>
                </div>
            </div>
            <div className='footerBootom'>
                <div className='sideHustel'>
                    <Link target={"_blank"} to={"https://sidehustleschool.com/ideas/"}>
                        <img width={189} height={41} src="./Assest/Icons/c.png" alt="sideHustel" />
                    </Link>
                </div>
                <div className='footerDiv'>
                    <div className='iconsDiv'>
                        <Link target={"_blank"} to={"https://www.facebook.com/"}>
                            <img width={13} height={18} src="./Assest/Icons/facebook.png" alt="faceebok" />
                        </Link>
                        <Link target={"_blank"} to={"https://x.com/?lang=ru"}>
                            <img width={21} height={16} src="./Assest/Icons/twiter.png" alt="twiter" />
                        </Link>
                        <Link target={"_blank"} to={"https://www.google.com/intl/ru/account/about/"}>
                            <img width={27} height={16} src="./Assest/Icons/google.png" alt="google" />
                        </Link>
                        <Link target={"_blank"} to={"https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"}>
                            <img width={18} height={17} src="./Assest/Icons/linkedin.png" alt="linkedin" />
                        </Link>
                    </div>
                    <div className='footerBottomRightSide'>
                        <p>© 2021 RedExplorers. All rights reserved</p>
                        <hr />
                        <Link>Terms</Link>
                        <hr />
                        <Link>Privacy</Link>
                        <hr />
                        <Link> Site Map</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer