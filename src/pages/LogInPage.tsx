import React from 'react'
import NavBar from '../components/NavBar'
import UserForm from '../components/UserForm'
import Header from '../components/Header'
import { Box } from '@primer/react'

function LogInPage() {

  return (
    <Box min-height={'100vh'} height={'100vh'} margin={'1rem 0.6rem'}>
      <Header emoji='🦸🏿‍♂️' />
      <UserForm formType='login' />
      <NavBar/>
    </Box>
  )
}

export default LogInPage