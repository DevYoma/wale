import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

const Dashboard = () => {
    const [userData, setUserData] = useState()
    const [items] = useState([
        {
            id: 1, 
            text: "Home", 
        },
        {
            id: 2, 
            text: "Calender", 
        },
        {
            id: 3, 
            text: "Tasks", 
        },
        {
            id: 4, 
            text: "Contacts", 
        },
        {
            id: 5, 
            text: "Email", 
        },
    ])

    const navigate = useNavigate();
    
    function logout(){
        // localStorage.removeItem('entries')
        navigate('/')
    }



    useEffect(() => {
        // retrieving data from localStorage
        const retrieveData = JSON.parse(localStorage.getItem('entries'))
        // console.log(retrieveData)
        setUserData(retrieveData)
    }, [])
  return (
    <section id="dashboard">
        <div className="dashboard__sidebar">
            <h1>Left</h1>
        </div>

        <div className="dashboard__main">
            <h1>Right</h1>
        </div>
    </section>
  )
}

export default Dashboard


// <h1>This is the Dashboard Section</h1>
// {userData?.email} <br />
// {userData?.userName} <br />

// <button onClick={logout}>Log out</button>