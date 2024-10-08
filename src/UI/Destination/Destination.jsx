import React, { useEffect, useState } from 'react'
import "./Destinaton.css"
import Navigation from '../../Components/Navigation/NAvigation'
import Header from '../../Components/Header/Header'
import SubscribeComponent from '../../Components/SubscribeComponent/SubscribeComponent'
import Footer from '../../Components/Footer/Footer'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { checkedContinent } from '../../Atom'


const Destination = () => {

  const [allContinet, setAllContinent] = useState([])
  const [checkedContinentState, setCheckedContinentState] = useRecoilState(checkedContinent)
  const [allPosts, setAllPost] = useState([])
  const [allCountry, setAllCountry] = useState([])


  const allContinentFetch = async () => {
    const response = await fetch("http://localhost:3000/continent")
    const result = await response.json()
    setAllContinent(result)
  }

  const allPostsFetch = async () => {
    const response = await fetch("http://localhost:3000/posts")
    const result = await response.json()
    setAllPost(result)
  }

  const allCountryFetch = async () => {
    const response = await fetch("http://localhost:3000/country")
    const result = await response.json()
    setAllCountry(result)
  }

  useEffect(() => {
    allContinentFetch()
    allPostsFetch()
    allCountryFetch()
  }, [])

  return (
    <div>
      <Navigation checked="Destination" />
      <Header imgHeight="522px" pageName="Destination" src="./Assest/Images/destinationBacground.png" alt="destinationBacground" />
      <div className='destinationTitleDiv'>
        <div className='destinationTitle'>
          <h3>
            <Link to={"/"}> Where do</Link> you want to
            go?
          </h3>
        </div>
        <div className='destinationTitleText'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque quo aut quos accusamus perferendis exercitationem dolorem repellat! Aliquid, natus possimus rem voluptate tempora nulla quod repellendus consequatur sequi, corrupti facere.
            <br />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero non dolor totam id repudiandae nesciunt, minus error soluta dicta consequuntur molestiae aut asperiores, facilis, veritatis odit iusto sed quos maiores.
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repudiandae, sapiente soluta ratione enim nemo explicabo nam, repellat non facilis laborum deleniti. Velit fugit laborum eius veniam harum quo vero?
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mor mattis nec etiam ac. Bibendum tellus mi imperdiet amet maecenas magna tortor nulla. Nec tortor ut cursus ornare nibh vivamus. Quam elementum at velit viverra mattis.
          </p>
        </div>
      </div>
      <div className='allContinent'>
        {
          allContinet.map(continent => {

            return (
              <div
                onClick={() => {

                  allContinet.map(checkedContinent => {
                    return (
                      checkedContinent.checked = false
                    )
                  })
                  if (continent.checked === false) {
                    continent.checked = true
                    setCheckedContinentState(continent.name)
                  }
                }}
                className={checkedContinentState === continent.name ? 'continentDiv checkedContinent' : "continentDiv"}
                key={continent.id}>
                <p>
                  {continent.name}
                </p>
              </div>
            )
          })
        }
      </div>
      <div className='continetPosts'>
        {
          allPosts.map(post => {

            return (
              allCountry.map(country => {

                return (
                  allContinet.map(continent => {

                    if (post.countryName === country.name && country.continentId === continent.id && checkedContinentState === continent.name) {
                      console.log(post);


                      return (
                        <div className='destinationPostDiv' key={post.id}>
                            <img width={380} height={360} src={post.image} alt="postImage" />
                            <div className='postDivDescription'>
                              <p>{post.data} - Tips & Tricks</p>
                              <h3>{post.title}</h3>
                              <div>
                                <img width={17} height={23} src="./Assest/Icons/Vector.png" alt="vector" />
                                <span>{post.countryName}</span>
                              </div>
                            </div>
                        </div>
                      )

                    }
                    return true
                  })
                )

              })
            )

          })
        }
      </div>
      <SubscribeComponent />
      <Footer />
    </div>
  )
}

export default Destination