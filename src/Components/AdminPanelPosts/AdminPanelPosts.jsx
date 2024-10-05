import React, { useEffect, useRef, useState } from 'react'
import "./AdminPanelPosts.css"
import Button from '../Button/Button'
const AdminPanelPosts = () => {

    const [addpostState, setAddPostState] = useState(false)
    const [postsDivState, setPostDivState] = useState(true)
    const addPostImageInput = useRef()
    const [postImageBase64, setPostImageBase64] = useState(null)
    const [allCategories, setAllCategories] = useState([])
    const [selectedCategoriesValues, setSelectedCategoriesValues] = useState([]);
    const textAreaRef = useRef()
    const [allCountry, setAllCountry] = useState([])
    const countrySelectRef = useRef()
    const [viewAllPostsState,setViewAllPostState] = useState(false)

    const monthNames = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const today = new Date()
    const day = today.getDate()
    const month = monthNames[today.getMonth()]
    const year = today.getFullYear()
    const dataForPost = `${month},${day},${year}`

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;

        // Если чекбокс отмечен, добавляем значение в массив
        if (checked) {
            setSelectedCategoriesValues([...selectedCategoriesValues, value]);
        } else {
            // Если чекбокс снят, удаляем значение из массива
            setSelectedCategoriesValues(selectedCategoriesValues.filter((item) => item !== value));
        }
    };

    console.log(selectedCategoriesValues);


    const imageInputHandleClick = () => {
        addPostImageInput.current.click()
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        // Проверка, что файл является изображением
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();


            reader.onloadend = () => {
                // Устанавливаем строку Base64 в состояние
                setPostImageBase64(reader.result);
            };

            // Чтение файла как Data URL (включает Base64)
            reader.readAsDataURL(file);
        } else {
            alert('Пожалуйста, выберите изображение');
        }
    };

    const categoriesFetch = async () => {
        const response = await fetch("http://localhost:3000/categories")
        const result = await response.json()
        setAllCategories(result)

    }

    const countryFetch = async () => {
        const response = await fetch("http://localhost:3000/country")
        const result = await response.json()
        setAllCountry(result)
    }


    useEffect(() => {
        countryFetch()
        categoriesFetch()

    }, [postImageBase64])

    return (
        <div className="allPostsSection">
            <div className={postsDivState === true ? "" : "allPostsDivNone"}>
                <div className='allPostsHeader'>
                    <h3>All Posts</h3>
                    <Button 
                    onClick={() => {
                        setViewAllPostState(!viewAllPostsState)
                    }}
                    buttonText="View All Posts"
                    />
                    <Button
                        onClick={() => {
                            setAddPostState(true)
                            setPostDivState(false)
                        }}
                        buttonText="Add Post" />
                </div>
                <div className={viewAllPostsState === true?"postsDiv":"postsDivNone"}>

                </div>
            </div>
            <div className={addpostState === true ? "addPost" : "addPostNone"}>
                <div className='addPostHeader'>
                    <h3>Add Post</h3>
                    <div
                        onClick={() => {
                            setAddPostState(false)
                            setPostDivState(true)
                        }}
                        className='addPostCloseDiv'
                    >
                        <img width={24} height={24} src="./Assest/Icons/close.png" alt="closeIcon" />
                    </div>
                </div>

                <div className='addPostFooter'>
                    <div className='addPostImageInput' onClick={imageInputHandleClick}>
                        <img width="30px" height="30px" src="./Assest/Icons/addImgIcon.png" alt="addImgIcon" />
                        <p>Загрузить</p>
                        <p>Фото</p>
                        <input
                            type="file"
                            ref={addPostImageInput}
                            accept='image/*'
                            onChange={handleFileChange}
                            style={{ display: "none" }}
                        />
                    </div>
                    <div className='textAreaDiv'>
                        <h3>
                            Post Description
                        </h3>
                        <textarea ref={textAreaRef} className='textAreaAddPost' placeholder='Post Description' minLength={100} maxLength={500}></textarea>
                    </div>
                    <div className='categoriesAddPostHeader'>
                        <h3>
                            Check Categories
                        </h3>
                    </div>
                    <div className='categoriesDivAddPost'>
                        {
                            allCategories.map(categorie => {
                                return (

                                    <div key={categorie.id}>
                                        <label htmlFor={categorie.name}>
                                            <input
                                                id={categorie.name}
                                                type="checkBox"
                                                value={categorie.name}
                                                onChange={handleCheckboxChange}
                                            />
                                            {" " + categorie.name}
                                        </label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='countryDivAddPost'>
                        <div>
                            <h3>
                                SelecCountry
                            </h3>
                        </div>
                        <select className='countrySelect' ref={countrySelectRef}>
                            {
                                allCountry.map(country => {
                                    return (
                                        <option key={country.id} value={country.name}>{country.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <Button
                        onClick={() => {
                            console.log(postImageBase64);
                            console.log(textAreaRef.current.value);
                            console.log(selectedCategoriesValues);
                            console.log(countrySelectRef.current.value);
                            console.log(dataForPost);

                            fetch("http://localhost:3000/posts",{
                                method:"POST",
                                headers:{
                                    "Content-Type":"aplication/json"
                                },
                                body: JSON.stringify({
                                    title: "",
                                    image:postImageBase64,
                                    description:textAreaRef.current.value,
                                    countryName:countrySelectRef.current.value,
                                    data:dataForPost
                                })
                            })
                            window.location.reload()
                        }}
                        buttonText="Add Post"
                    />
                </div>

            </div>
        </div>
    )
}

export default AdminPanelPosts