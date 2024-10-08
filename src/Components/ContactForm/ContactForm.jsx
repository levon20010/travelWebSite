import React, { useState } from 'react'
import "./ContactForm.css"
import Button from '../Button/Button'

const ContactForm = () => {
  const [firstName,setFirstName] = useState(null)
  const [lastName,setLastName] = useState(null)
  const [message,setMessage] = useState(null)
  const [subject,setSubject] = useState(null)
  const [email,setEmail] = useState(null)
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(subject);
  console.log(message);

  const formData = {
    firstName: firstName,
    lastName:lastName,
    email:email,
    subject:subject,
    message:message
  }

  const submitFormContact = (event) => {
    event.preventDefault()

    if (firstName && lastName && email && subject && message) {
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Успешно отправлено:', data);
          setFirstName(null)
          setLastName(null)
          setEmail(null)
          setSubject(null)
          setMessage(null)
        })
    }
   
    
    
  }

  return (
   <form onSubmit={submitFormContact} className='formContact' >
        <div className='formInputDiv'>
          <input
           onChange={(event) => {
            setFirstName(event.target.value)
            
            }}
          placeholder='Firs Name' type="text" />
          <input
           onChange={(event) => {
            setLastName(event.target.value)
           
            }}
          placeholder='Last Name' type="text" />
          <input onChange={(event) => {
            setEmail(event.target.value)
        
            }} placeholder='Email' type="email" />
          <input
           onChange={(event) => {
            setSubject(event.target.value)
         
            }}
          placeholder='Subject' type="text" />
        </div>
        <textarea 
         onChange={(event) => {
          setMessage(event.target.value)
       
          }}
        placeholder='Message' name="" id="" />
        <Button buttonText="Submit" />
   </form>
  )
}

export default ContactForm