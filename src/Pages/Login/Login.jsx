import React from 'react'
import './Login.css'
import Logo from '../../assets/background.png';
import { Link } from 'react-router-dom';
import FormSocials from '../../Components/FormSocials/FormSocials';

const Login = () => {
  return (
    <section id="login">
    <div className="login__left">
      <img src={Logo} alt="logo" />

      <div className="login__leftHeader">
        <h3>Register New User</h3>
        <p>Lifetime Free Account.</p>
      </div>

      <form className="login__form">
        <input 
          type="text" 
          placeholder='Email'
          required
        />

        <input 
          type="password" 
          placeholder='Password'
          required
        />

        <div className="login__button">
          {/* <Button /> */}
          <button className="register__button" type='submit'>
            Login
          </button>
        </div>

      </form>


      <div className="login__socials">
        <p>Don't have an account? <Link to={'/'}>Register</Link></p>
      </div>

      <FormSocials />
    </div>

    
    <div className="login__right"></div>
</section>
  )
}

export default Login