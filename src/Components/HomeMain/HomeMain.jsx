import React, { useEffect, useState } from 'react'
import Asaid from '../AsaidHome/Asaid'
import "./HomeMain.css"
import OnePost from '../OnePost/OnePost'
import TwoPost from '../TwoPost/TwoPost'

const HomeMain = () => {
  const [allPosts,setAllPosts] = useState([])


  const allPostsFetch = async () => {
      const response = await fetch("http://localhost:3000/posts")
      const result = await response.json()
      setAllPosts(result)
  }

  

  useEffect(()=> {
      allPostsFetch()
  },[])
  return (
    <main className='main'>
        <Asaid/>
        <div className='mainDiv'>
          <OnePost postIndex={1} />
          <TwoPost FirsPostIndex={2} SeccondPostIndex = {3} />
          <OnePost postIndex={4} />
          <TwoPost FirsPostIndex={5} SeccondPostIndex = {6} />
          <TwoPost FirsPostIndex={7} SeccondPostIndex = {8} />
          <OnePost postIndex={9} />
          <TwoPost FirsPostIndex={10} SeccondPostIndex = {11} />
        </div>
    </main>
  )
}

export default HomeMain