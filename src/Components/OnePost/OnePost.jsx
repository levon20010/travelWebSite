import React, { useEffect, useState } from 'react'
import "./OnePost.css"
import { Rating } from 'react-simple-star-rating'

const OnePost = (props) => {

    const [allPosts, setAllPosts] = useState([])

    const [ratingValue, setRatingValue] = useState(0)
    const [checedRatPostId,setchecedRatPostId] = useState(null)


    const handleRating = (rate) => {
        setRatingValue((prevState) => prevState = rate)
        console.log(ratingValue);
    }


    const allPostsFetch = async () => {
        const response = await fetch("http://localhost:3000/posts")
        const result = await response.json()
        setAllPosts(result)
    }



    useEffect(() => {
        allPostsFetch()
        

        if (ratingValue > 0 && checedRatPostId) {
            console.log(checedRatPostId);
            console.log(ratingValue);
            
            setRatingValue(0)
            setchecedRatPostId(null)
        }
        
        
    }, [ratingValue])

    return (

        <div className='onePost'>
            {

                allPosts.map(post => {
                    if (post.id === allPosts[allPosts.length - props.postIndex].id) {
                        return (
                            <div className='onePostDiv' key={post.id}>
                                <img width="100%" height={500} src={post.image} alt="postImage" />
                                <p className='data'>{post.data} - Tips & Tricks</p>
                                <h3>{post.title}</h3>
                                <p>{post.description}</p>
                                <div>
                                    <img width={19} height={25} src="./Assest/Icons/Vector.png" alt="vector" />
                                    <span>{post.countryName}</span>
                                    <div onClick={()=>{
                                        setchecedRatPostId(post.id)
                                    }}>
                                        <Rating size={20} onClick={handleRating} />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    return true
                })


            }
        </div>
    )
}

export default OnePost