import React, { useEffect, useRef, useState } from 'react'
import "./AdminPanelCountry.css"
import Button from '../Button/Button'
import InputText from '../InputText/InputText'

const AdminPanelCountry = () => {

    const [allCountryState, setAllCountryState] = useState(true)
    const [addCountryState, SetAddCountryState] = useState(false)
    const [viewAllState, setViewAllState] = useState(false)
    const inputTextRef = useRef()
    const continentSelectRef = useRef()
    const [country, setCountry] = useState([]);
    const [continent, setContinet] = useState([])
    let count = 0
    const contryFetch = async () => {
        const response = await fetch('http://localhost:3000/country');
        const result = await response.json();
        setCountry(result);
    }


    const continentFetch = async () => {
        const response = await fetch("http://localhost:3000/continent")
        const result = await response.json()
        setContinet(result)
    }

  
   


    useEffect(() => {

        contryFetch()
        continentFetch()


    }, [])

    return (
        <div className='countrySection'>
            <div className={allCountryState === true ? "allCountry" : "allCountryNone"}>
                <div className='allCountryHeader'>
                    <h3>All Country</h3>
                    <Button
                        onClick={() => {
                            setViewAllState(!viewAllState)
                        }}
                        buttonText={viewAllState === false ? "View All Countryes" : "Close All Countryes"}
                    />
                    <Button
                        onClick={() => {
                            setAllCountryState(false)
                            SetAddCountryState(true)
                            setViewAllState(false)
                        }}
                        buttonText="Add Country"
                    />
                </div>
                <div className={viewAllState === true ? "allCountryFooter" : "allCountryFooterNone"}>
                    {
                        country.map(countryName => {
                            count++
                            return (
                                <div className='countryDiv' key={countryName.id}>
                                    <div className='countryNameDiv'>
                                        <p>{count}.</p>
                                        <h3>{countryName.name}</h3>
                                    </div>

                                    {
                                        continent.map(continentName => {
                                            if (countryName.continentId === continentName.id) {
                                                return (
                                                    <p className='countryName' key={continentName.id}>{continentName.name}</p>
                                                )
                                            }
                                           return true
                                        })
                                    }

                                    <div
                                        onClick={() => {
                                            fetch(`http://localhost:3000/country/${countryName.id}`, {
                                                method: "DELETE"
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
                                        className='trushDiv'
                                    >
                                        <img width={24} height={24} src="./Assest/Icons/trush.png" alt="trushIcon" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={addCountryState === true ? "addCountry" : "addCountryNone"}>
                <div className='addCountrHeader'>
                    <h3>Add Country</h3>
                    <div
                        onClick={() => {
                            setAllCountryState(true)
                            SetAddCountryState(false)
                        }}
                        className='closeDiv'
                    >
                        <img width={24} height={24} src="./Assest/Icons/close.png" alt="closeIcon" />
                    </div>
                </div>
                <div className='addCountryFooter'>
                    <InputText Ref={inputTextRef} />
                    <select ref={continentSelectRef} className='continentSelect' name="Continent" id="Continent">
                        <option value="1">South America</option>
                        <option value="2">North America</option>
                        <option value="3">Europe</option>
                        <option value="4">Africa</option>
                        <option value="5">Asia</option>
                    </select>
                    <Button
                        onClick={() => {
                            fetch("http://localhost:3000/country", {
                                method: "POST",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    name: inputTextRef.current.value,
                                    continentId: continentSelectRef.current.value
                                })
                            })
                            setAllCountryState(true)
                            SetAddCountryState(false)
                            window.location.reload()
                        }}
                        buttonText="Add"
                    />
                </div>
            </div>
        </div>
    )
}

export default AdminPanelCountry