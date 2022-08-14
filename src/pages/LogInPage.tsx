import React from 'react'
import NavBar from '../components/NavBar'
import UserForm from '../components/UserForm'
import Header from '../components/Header'
function LogInPage() {
  return (
    <>
    <Header emoji='🦸🏿‍♂️' />
    <UserForm formType='login' />
    <NavBar/>
    </>
  )
}

export default LogInPage