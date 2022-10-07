import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{ display: "flex", alignItems: 'center', justifyContent: "space-between" }}>
        <h1>React Router</h1>

        <ul style={{ listStyle: "none" }}>
            <Link to={'/about'}><li>About</li></Link>
        </ul>
    </div>
  )
}

export default Home