import React, { useEffect, useRef, useState } from 'react'
import "./AdminPanelCategories.css"
import Button from '../Button/Button'
import InputText from '../InputText/InputText'
const AdminPanelCategories = () => {
    const [allCategoriesState, setAllCategoriesState] = useState(true)
    const [addCategoriesState, setAddCategoriesState] = useState(false)
    const [viewAllCategoriesState, setViewAllCategoriesState] = useState(false)
    const addCategoriesInputRef = useRef()
    const [data, setData] = useState([]);
    const [reload, setReload] = useState(false);
    let count = 0
    const reloadData = () => {
        setReload(!reload);  // Меняем reload, что вызывает повторный запрос
    };

    const fetchData = async () => {

        const response = await fetch('http://localhost:3000/categories');
        const result = await response.json();
        setData(result);  // Записываем данные в массив

    };


    useEffect(() => {




        fetchData();



    }, [reload])


    return (
        <div className='categoriesSection'>
            <div className={allCategoriesState === true ? "" : "allCategoriesNone"}>
                <div className='allCategoriesHeader'>
                    <h3>All Categories</h3>
                    <Button
                        onClick={() => {
                            setViewAllCategoriesState(!viewAllCategoriesState)
                        }}
                        buttonText={viewAllCategoriesState === false ? "View All Categories" : "Close All Categories"}
                    />
                    <Button
                        onClick={() => {
                            setAllCategoriesState(false)
                            setAddCategoriesState(true)
                            setViewAllCategoriesState(false)
                        }}
                        buttonText="Add Categories" />
                </div>
                <div className={viewAllCategoriesState === true ? "categoriesDiv" : "categoriesDivNone"}>
                    {

                        data.map(categorie => {
                            count++
                            return (
                                <div className='categorie' key={categorie.id}>
                                    <div className='categorieNameDiv'>
                                        <p className='count'>{count}.</p>
                                        <h3>{categorie.name}</h3>
                                    </div>
                                    <div
                                        className='trushDiv'
                                        onClick={() => {
                                            fetch(`http://localhost:3000/categories/${categorie.id}`, {
                                                method: 'DELETE',
                                            })
                                                .then(response => {
                                                    if (response.ok) {
                                                        console.log('Post deleted successfully');
                                                      

                                                    } else {
                                                        console.error('Error deleting post');
                                                    }
                                                })
                                                .catch(error => console.error('Error:', error));

                                            window.location.reload()
                                        }}
                                    >
                                        <img width={24} height={24} src="./Assest/Icons/trush.png" alt="trushIcon" />
                                    </div>
                                </div>
                            )
                        })


                    }
                </div>
            </div>
            <div className={addCategoriesState === true ? "addCategoriesDiv" : "addCategoriesDivNone"}>
                <div className='addCategoriesHeader'>
                    <h3>Add Categories</h3>
                    <div
                        onClick={() => {
                            setAllCategoriesState(true)
                            setAddCategoriesState(false)
                        }}
                        className='addCategoriesClose'
                    >
                        <img width={24} height={24} src="./Assest/Icons/close.png" alt="closeIcon" />
                    </div>
                </div>
                <div className='addCategoriesFooter'>
                    <InputText Ref={addCategoriesInputRef} placeholder="Categories Name" />
                    <Button
                        onClick={() => {
                            fetch("http://localhost:3000/categories", {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                                body: JSON.stringify({
                                    name: addCategoriesInputRef.current.value
                                }),
                            })

                            addCategoriesInputRef.current.value = ""
                            setAllCategoriesState(true)
                            setAddCategoriesState(false)
                            window.location.reload()
                            reloadData()
                        }}
                        buttonText="Add"
                    />
                </div>
            </div>
        </div>

    )
}

export default AdminPanelCategories