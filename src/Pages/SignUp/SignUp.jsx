import React, { useState } from 'react'
import './SignUp.css'
import Logo from '../../assets/background.png';
import { Link } from 'react-router-dom';
import Button from '../../Components/Button/Button';
import FormSocials from '../../Components/FormSocials/FormSocials';
import { useNavigate } from 'react-router-dom'

const SignUp = ({ todo }) => {
  const [userName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const navigate = useNavigate()

  // console.log(todo);

  function goToDashboard(e){
    e.preventDefault();

    // AUTHENTICATION
    if(userName === "" || email === "" || password === "" || confirmPassword === ""){
      alert("Please fill in the empty fields")
      return;
    }else if(password !== confirmPassword){
      alert("Password and Confirm Password do not match")
      return;
    }else if(!email.includes("@")){
      alert("Please enter a valid email address")
      return;
    }


    // alert("Submitted")
    navigate('/dashboard');
    const formData = {
      userName,
      email, 
      password,
      confirmPassword,
    }
    console.log(formData)
    const storedData = localStorage.setItem("entries", JSON.stringify(formData))
  }

  return (
    <section id="signUp">
        <div className="signUp__left">
          <img src={Logo} alt="logo" />

          <div className="signUp__leftHeader">
            <h3>Register New User</h3>
            <p>Lifetime Free Account.</p>
          </div>

          <form className="signUp__form">
            <input 
              type="text" 
              placeholder='Username'
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />

            <input 
              type="text" 
              placeholder='Email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}

            />

            <input 
              type="password" 
              placeholder='Password'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <input 
              type="password" 
              placeholder='Confirm Password'
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          
            <div className="signUp__formQuestion">
              <p>Already Registered?  <Link to={'/login'}>Login</Link></p>
            </div>

            <div className="signUp__button">
              {/* <Button /> */}
              <button className="register__button" type='submit' onClick={goToDashboard}>
                Register
              </button>
            </div>

          </form>


          <div className="signUp__socials">
            <p>or sign up using the following</p>
          </div>

          <FormSocials />
        </div>

        
        <div className="signUp__right"></div>
    </section>
  )
}

export default SignUp