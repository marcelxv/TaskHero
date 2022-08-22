import React from 'react'
import NavBar from '../components/NavBar'
import TodoCalendar from '../components/TodoCalendar'

function HomePage() {


  return (
    <div>
        <h1>HomePage</h1>
        <TodoCalendar />
        <NavBar/>
    </div>
    
  )
}

export default HomePage