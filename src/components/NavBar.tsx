import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Box, Button } from "@primer/react";

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
    <Button variant={pathMatchRoute('/app') ? 'primary' : 'invisible'} size="small" onClick={() => navigate("/app")}>App</Button>
    <Button variant={pathMatchRoute('/login') ? 'primary' : 'invisible'} size="small" onClick={() => navigate("/login")}>Login</Button>
    <Button variant={pathMatchRoute('/about') ? 'primary' : 'invisible'}size="small" onClick={() => navigate("/about")}>About</Button>
    </>
    )
}

export default NavBar