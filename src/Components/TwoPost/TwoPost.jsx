import React, { useEffect, useState } from 'react'
import "./TwoPost.css"

const TwoPost = (props) => {

    const [allPosts, setAllPosts] = useState([])


    const allPostsFetch = async () => {
        const response = await fetch("http://localhost:3000/posts")
        const result = await response.json()
        setAllPosts(result)
    }



    useEffect(() => {
        allPostsFetch()
    }, [])

    return (
        <div className='twoPost'>
            {
                allPosts.map(post => {
                    if (post.id === allPosts[allPosts.length - props.FirsPostIndex].id || post.id === allPosts[allPosts.length - props.SeccondPostIndex].id) {
                        return (
                            <div className='twoPostDiv' key={post.id}>
                                <img width="100%" height={256} src={post.image} alt="postImage" />
                                <p>{post.data} - Tips & Tricks</p>
                                <h3>{post.title}</h3>
                                <div>
                                    <img width={19} height={25} src="./Assest/Icons/Vector.png" alt="vector" />
                                    <span>{post.countryName}</span>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    )
}

export default TwoPost