import React, { useEffect,useState } from 'react'

import "./ContactForm.css"
import Button from '../Button/Button'





const ContactForm = () => {
  const [firstName, setFirstName] = useState(null)
  const [lastName, setLastName] = useState(null)
  const [message, setMessage] = useState(null)
  const [subject, setSubject] = useState(null)
  const [email, setEmail] = useState(null)
  const [firstNameError, setFirstNameError] = useState(true)
  const [lastNameError, setLastNAmeError] = useState(true)
  const [emailError, setEmailError] = useState(true)
  const [subjectError, setSubjectError] = useState(true)
  const [messageError, setMessageError] = useState(true)

  const emailRegex = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)




  const formData = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    subject: subject,
    message: message
  }


  
  


  const submitFormContact = (event) => {
    event.preventDefault()

    if (firstName && lastName && emailRegex.test(email) && subject && message) {
      fetch('http://localhost:3000/contactFormData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          alert('Успешно отправлено:')
          setFirstName(null)
          setLastName(null)
          setEmail(null)
          setSubject(null)
          setMessage(null)
        })
    }

  }

 

  useEffect(() => {
    if (firstName && firstName !== "") {
      setFirstNameError(false)
    } else if (firstName === "") {
      setFirstNameError(true)
    }
    if (lastName && lastName !== "") {
      setLastNAmeError(false)
    } else if (lastName === "") {
      setLastNAmeError(true)
    }
    if (emailRegex.test(email)) {
      setEmailError(false)
    } else if (!emailRegex.test(email)) {
      setEmailError(true)
    }
    if (subject && email !== "") {
      setSubjectError(false)
    } else if (subject === "") {
      setSubjectError(true)
    }
    if (message && message !== "") {
      setMessageError(false)
    } else if (message === "") {
      setMessageError(true)
    }
  }, [firstName, lastName, email, subject, message])

  return (
    <form onSubmit={submitFormContact} className='formContact' >

  
    
        <div className='formInputDiv'>
          <div>
            <p className={firstNameError ? "" : "firstNameErrorNone"}> * fill in the fields First Name</p>
            <input
              onChange={(event) => {
                setFirstName(event.target.value)

              }}
              placeholder='Firs Name' type="text" />
          </div>
          <div>
            <p className={lastNameError ? "" : "lastNameErrorNone"}> * fill in the fields Last Name</p>
            <input
              onChange={(event) => {
                setLastName(event.target.value)

              }}
              placeholder='Last Name' type="text" />
          </div>
          <div>
            <p className={emailError ? "" : "emailErrorNone"}> * fill in the fields Email</p>
            <input onChange={(event) => {
              setEmail(event.target.value)

            }} placeholder='Email' type="email" />
          </div>
          <div>
            <p className={subjectError ? "" : "subjectErrorNone"}> * fill in the fields Subject</p>
            <input
              onChange={(event) => {
                setSubject(event.target.value)

              }}
              placeholder='Subject' type="text" />
          </div>
        </div>
        <div className='textareaDiv'>
          <p className={messageError ? "" : "messageErrorNone"} > * fill in the fields Message</p>
          <textarea
            onChange={(event) => {
              setMessage(event.target.value)

            }}
            placeholder='Message' name="" id="" />
        </div>
        <Button buttonText="Submit" />
    </form>
  )
}

export default ContactForm