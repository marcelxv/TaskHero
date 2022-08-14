import React from 'react'
import NavBar from '../components/NavBar'
import appshot from '../images/appshot.png'

function HomePage() {


  return (
    <div>
        <h1>HomePage</h1>
        <img src={appshot} alt="taskHero" />
        <NavBar/>
    </div>
    
  )
}

export default HomePage