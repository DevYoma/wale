import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase/Firebase';
import { Link, useNavigate } from 'react-router-dom'
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "", 
      })
    
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
    
        setFormData({
          ...formData,
          [name]:value
        })
      }
    
      // const handleSubmit = async (e: any) => {
    
       const handleClick = async (e) =>{
        e.preventDefault();
        if(formData.name === "" || formData.email === "" || formData.password === "" ){
          alert("Please Enter valid inputs")
          return
        }
    
        if(!formData.email.includes("@")){
          alert("Please enter a valid Email Address")
        }
    
        console.log(formData);
    
        // firebase
        try {
          // structure
          // createUserWithEmailAndPassword(authObject, email, password)
          await createUserWithEmailAndPassword(auth, formData.email, formData.password);
          console.log('Account Created')
          // redirect user to about page
            navigate('/about')
    
          // clearing the form
          setFormData({
            name: "",
            email: "", 
            password: ""
          })
    
    
        } catch (error) {
          alert(error)
        }
      }
  return (
    <div className='register'>
        <h1>Register Page 🚀</h1>
      <form>
        <input 
          type="text" 
          value={formData.name}
          name="name"
          onChange={handleChange}
          placeholder="Full Name"
          required
        />

        <input 
          type="email" 
          value={formData.email}
          name="email"
          onChange={handleChange}
          placeholder="Email Address"
          required
        />


        <input 
          type="password" 
          value={formData.password}
          name="password"
          onChange={handleChange}
          placeholder="Password"
          required
        />

        <button onClick={handleClick}>Register</button> <br />
        <Link to={'/login'}>Don't have an Account, Login</Link>

      </form>
    </div>
  )
}

export default Register