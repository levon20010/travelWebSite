import React from 'react'
import "./AboutUs.css"
import Navigation from '../../Components/Navigation/NAvigation'
import Header from '../../Components/Header/Header'
import SubscribeComponent from '../../Components/SubscribeComponent/SubscribeComponent'
import Footer from '../../Components/Footer/Footer'
import BriefHistory from '../../Components/BriefHistory/BriefHistory'

const AboutUs = () => {
    return (
        <div>
            <Navigation checked = "AboutUs" />
            <Header imgHeight = "547px" pageName ="About Us" src = "./Assest/Images/AboutUSBAckground.png" alt="AboutUSBAckground"/>
            <BriefHistory/>
            <aside>
                <div className='asaidDiv'>
                    <img width={205} height={142}  src="./Assest/Images/marshal.png" alt="marshal" />
                    <img width={205} height={142}  src="./Assest/Images/tesla.png" alt="tesla" />
                    <img  width={205} height={142} src="./Assest/Images/kitkat.png" alt="kitkat" />
                    <img  width={205} height={142} src="./Assest/Images/hugoBoss.png" alt="hugoBoss" />
                </div>
            </aside>
            <div className='aboutUs'>
                <div>
                    <h3>Our Story</h3>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. </p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero.</p>
                </div>
                <div>
                    <h3>Who Are Red Explorers</h3>
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus. </p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit.</p>
                </div>
                <div>
                    <h3>About Our Cameraman</h3>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, beatae possimus? Et, quisquam. Doloribus, labore magnam sunt illo voluptas, voluptate a est fugiat dolore corporis natus similique eos temporibus dignissimos.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum sit hic modi aperiam laudantium ipsam autem, tempore dicta recusandae reprehenderit. At eius asperiores, veritatis accusantium ut doloribus. Fugiat, error voluptas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quis doloribus possimus modi quam perferendis et commodi. Natus atque harum consequuntur alias cupiditate veritatis eum illo deserunt. Asperiores, delectus qui!
                    Quia, commodi unde fugiat incidunt reiciendis nesciunt a aspernatur, perspiciatis fuga sint, ipsam sit amet vero ratione at hic deleniti quasi nihil aut! Omnis quas quidem eligendi maxime necessitatibus excepturi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus.</p>
                    
                </div>
                <div>
                    <h3>What you’ll Learn Here</h3>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta rem sint id voluptatibus iste deleniti enim nihil reiciendis. Explicabo exercitationem id tenetur dolore blanditiis nobis distinctio nostrum eaque facere at.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis ut natoque imperdiet faucibus. Mi arcu, nunc imperdiet sit arcu id. In libero, nibh at malesuada nunc faucibus pulvinar dolor tellus. Rhoncus lectus hendrerit pharetra vitae magna. Pharetra, tortor pharetra vitae rhoncus.</p>
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur aliquid consectetur accusantium, totam mollitia iste quam nisi incidunt magnam aliquam hic facilis voluptate perspiciatis minus odit molestiae numquam excepturi illum?
                    In consequatur ipsum dolor vel ratione corporis tempora pariatur dolorum distinctio aliquam, non porro repellendus consequuntur nulla dolore sed harum iste totam id aspernatur velit deleniti. Necessitatibus placeat voluptas tenetur.
                    Beatae nam sunt harum iure a officia eaque soluta debitis consectetur sint qui quasi saepe vel dolorem, voluptates assumenda quos suscipit cum provident praesentium rem! Inventore ut maxime quisquam explicabo!
                    Ab, beatae consequatur explicabo veniam cupiditate deserunt provident obcaecati dolores laudantium amet repellat fuga eum ipsam, placeat optio esse facilis dolorum ea aspernatur quam nemo voluptates laborum totam earum! Suscipit.
                    Qui veritatis quasi, nemo vel et amet? Non nulla quo eaque. Tenetur sunt asperiores perferendis architecto sapiente natus odio accusamus ipsa minus. Voluptatibus ratione amet, quaerat incidunt numquam praesentium? Autem.</p>
                </div>
            </div>
            <SubscribeComponent/>
            <Footer/>
        </div>
    )
}

export default AboutUs