import React from 'react'
import { auth } from '../Firebase/Firebase'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate('/')
    });
    console.log("Logged Out")
  }

  return (
    <div>
      <h2>User Registered</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default About