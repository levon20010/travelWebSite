import React, { useEffect, useState } from 'react'
import Button from '../../Components/Button/Button'
import "./Asaid.css"

const Asaid = () => {

    const [allCategories, setAllCategories] = useState([])
    const [allPosts, setAllPosts] = useState([])
    const [popularPostIndex,setPopularPostIndex] = useState(0)

    const categoriesFetch = async () => {
        const response = await fetch("http://localhost:3000/categories")
        const result = await response.json()
        setAllCategories(result)
    }

    const allPostsFetch = async () => {
        const response = await fetch("http://localhost:3000/posts")
        const result = await response.json()
        setAllPosts(result)
    }

    useEffect(() => {
        categoriesFetch()
        allPostsFetch()
    }, [])



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
                    {
                        allCategories.map(categorie => {
                            let count = 0
                            allPosts.map(post => {
                                post.category.map(postCategorie => {
                                    if (categorie.name === postCategorie) {
                                        count++
                                    }
                                })
                            })
                            return (
                                <div key={categorie.id}>
                                    <p>{categorie.name}</p>
                                    <span>({count})</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='popularPostAsaid'>
                <h3 className='textPopularPost'>Popular Post</h3>
                    {
                        allPosts.map(post => {
                            if (post.id === allPosts[popularPostIndex].id) {
                                return (
                                    <div className='popularPostDiv' key={post.id}>
                                        <img width="100%" height={400} src={post.image} alt="postimage" />
                                        <div className='popularPostDivAbsalute'>
                                            <p>{post.data}</p>
                                            <h3>{post.title}</h3>
                                            <div >
                                                <button onClick={()=> {
                                                    if (popularPostIndex > 0) {
                                                        setPopularPostIndex(popularPostIndex - 1)
                                                    }else{
                                                        setPopularPostIndex(allPosts.length-1)
                                                    }
                                                }}>-</button>
                                                <button
                                                onClick={()=>{
                                                    if (popularPostIndex === allPosts.length - 1) {
                                                        setPopularPostIndex(0)
                                                    }else{
                                                        setPopularPostIndex(popularPostIndex + 1)
                                                    }
                                                }}
                                                >+</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
            </div>

            <div className='recentPostDiv'>
                <h3>Recent Post</h3>
                <div>
                    {
                       allPosts.map((post) => {
                            if (post.id === allPosts[allPosts.length-3].id || post.id === allPosts[allPosts.length-2].id || post.id === allPosts[allPosts.length-1].id)  {
                                return(
                                    <div className='recentpost' key={post.id}>
                                        <img width="40%" height={80} src={post.image} alt="postImage" />
                                        <div>
                                            <p>{post.data} - Tips & Tricks</p>
                                            <h4>{post.title}</h4>
                                        </div>
                                    </div>
                                    
                                )
                            }
                       })
                    }
                </div>
            </div>
            <div className='asaidFooter'>
                <h3>
                    <p>Gear I Use</p>
                    <p>What’s in My Bag??</p>
                </h3>
                <p>
                Unfortunately, there is no “one-size-fits-all” when it comes to travel packing lists.
                </p>
                <Button buttonText="View Detals" />
            </div>
        </aside>
    )
}

export default Asaid