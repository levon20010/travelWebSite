import React from 'react'
import "./BriefHistory.css"
import { Link } from 'react-router-dom'

const BriefHistory = () => {
    return (
        <div >
            <div className='briefHistory'>
                <div className='briefHistorTop'>
                    <h3>
                        Hey, We are the <span> Red Explorers</span>
                        <br />
                        Brief History <Link to={"/AboutUs"}>About Us</Link>.
                    </h3>
                </div>
                <p>
                    Lorem ipsum dolor sit a met, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.
                    <br />
                    <br />
                    Eleifend enim, praesent eu, leo semper quis et. Nisl neque malesuada arcu, felis, vitae rhoncus morbi volutpat ante. Adipiscing mauris
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quae magni animi beatae eos consectetur. Praesentium tempora eos quas, maiores doloremque non blanditiis necessitatibus dolorum vero voluptates eaque facere aperiam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, qui eveniet quisquam ex impedit ipsum ipsa aspernatur facere hic optio dolores, labore accusantium corporis, maxime at velit corrupti ratione. Atque.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus eos voluptate, hic amet magni sit, cupiditate accusantium blanditiis ratione labore, consectetur ex eveniet nobis nesciunt adipisci nemo laboriosam enim?
                </p>
            </div>
            <div className='briefHistorBootom'>
                <img width="100%" src="./Assest/Images/aboutUsImage.png" alt="aboutUsImage" />
                <p>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus. Nisl quam massa sapien tempor semper. Hac tempus pellentesque nibh duis ultrices. Senectus sagittis id ullamcorper mi eget pellentesque egestas. In ut sollicitudin ut orci volutpat egestas fermentum. Sit turpis diam risus leo bibendum neque, quis in vitae.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At laboriosam vero nulla, sint libero quae error nesciunt natus sed temporibus impedit iure mollitia eum? Minus amet aperiam aspernatur voluptatibus error?
                </p>
            </div>
        </div>
    )
}

export default BriefHistory