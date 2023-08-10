import React, { useState } from "react";
import "./index.css";

export default function App() {

  let initialState = {firstname:"",
  lastname:'',
  email:''}
  const [values,setValues] = useState(initialState)

  function handleFirstNameInput(e){
    setValues({...values,firstname:e.target.value})
  }
  function handleLastNameInput(e){
    setValues({...values,lastname:e.target.value})
  }
  function handleEmailInput(e){
    setValues({...values,email:e.target.value})
  }

  const [submitted,setSubmitted] = useState(false)

  const [valid,setValid] = useState(false)

  function handleSubmit(event){
    event.preventDefault()
    if(values.firstname && values.lastname && values.email){
      setValid(true)
    }
    setSubmitted(true)
  }


  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {submitted&&valid?<div class="success-message">Success! Thank you for registering</div>:null}
        <input
        onChange={handleFirstNameInput}
          value={values.firstname}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted&&!values.firstname ? <span id="first-name-error">Please enter a first name</span>:null}
        <input
        onChange={handleLastNameInput}
          value={values.lastname}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        {submitted&&!values.lastname ? <span id="last-name-error">Please enter a last name</span>:null}
        <input
        onChange={handleEmailInput}
          value={values.email}
          id="email"
          class="form-field"
          type="email"
          placeholder="Email"
          name="email"
        />
        {submitted&&!values.email ? <span id="email-error">Please enter an email address</span>:null}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

