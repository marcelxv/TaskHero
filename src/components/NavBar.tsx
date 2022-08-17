import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()
    const location = useLocation()
    const pathMatchRoute = (path: string) => {
        if (path === location.pathname) {
            return true
        }
    }

  return (
    <>
    <button className={pathMatchRoute('/app') ? 'selected' : ''} onClick={() => navigate('/app')}>Go to App</button>
    <button className={pathMatchRoute('/about') ? 'selected' : ''} onClick={() => navigate('/about')}>Go to AboutPage</button>
    <button className={pathMatchRoute('/login') ? 'selected' : ''} onClick={() => navigate('/login')}>Go to Login Page</button>  
    </>
    )
}

export default NavBar