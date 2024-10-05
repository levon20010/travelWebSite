import React from 'react'
import Button from '../../Components/Button/Button'
import "./Asaid.css"

const Asaid = () => {


    return (
        <aside className='asaid'>
            <div className='asaidAboutMe'>
                <h3>About Me</h3>
                <img width="100%" height={295} src="./Assest/Images/aramchok.jpg" alt="Aramchok" />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum in vel massa donec sit. Mi ut risus sem malesuada ornare. Ac eu erat eget et lorem est arcu. Gravida hendrerit sit blandit semper lacus. Nulla amet suscipit sit lectus tortor. Dolor non eget suspendisse leo scelerisque sed d.</p>
                <Button buttonText="Reade More" />
            </div>
            <div className='asidAllCategoriesDiv'>
                <h3>Categories</h3>
                <div className='asidCategoriesDiv'>
                    <div>
                        <p>Europe</p>
                        <span>(11)</span>
                    </div>
                    <div>
                        <p>Mountains</p>
                        <span>(11)</span>
                    </div>
                    <div>
                        <p>Traveling Video</p>
                        <span>(11)</span>
                    </div>
                    <div>
                        <p>Beauty of Seas</p>
                        <span>(11)</span>
                    </div>
                    <div>
                        <p>Cuisine</p>
                        <span>(11)</span>
                    </div>
                    <div>
                        <p>Guides for traveler</p>
                        <span>(11)</span>
                    </div>
                    <div>
                        <p>Other</p>
                        <span>(11)</span>
                    </div>
                </div>
            </div>

            <div className='popularPostAsaid'>
                <h3 className='textPopularPost'>Popular Post</h3>
                <div>
                    <img src="" alt="" />
                    <div>
                        <p></p>
                        <h3></h3>
                        <div>
                            <button>-</button>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>

        </aside>
    )
}

export default Asaid