import React from 'react'
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../Firebase/Firebase';
import { useNavigate } from 'react-router-dom'
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
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
        if(formData.email === "" || formData.password === "" ){
          alert("Please Enter valid inputs")
          return
        }
    
        if(!formData.email.includes("@")){
          alert("Please enter a valid Email Address")
          return // stops function here.
        }
    
        console.log(formData);
    
        // firebase
        try {
            await signInWithEmailAndPassword(auth, formData.email, formData.password) // if successful
            navigate('/about');
        } catch (error) {
            alert(error);
        }
      
      }
  return (
    <div className='login'>
        <h1>Login Page 🚀</h1>
      <form>
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

        <button onClick={handleClick}>Login</button>

      </form>
    </div>
  )
}

export default Login