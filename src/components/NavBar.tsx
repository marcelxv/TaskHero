import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Tag = styled.button`
    cursor: pointer;
    border: 2px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary}
    color: ${(props) => props.theme.colors.primary};
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    margin-right: 0.5rem;
    font-size: ${(props) => props.theme.fontSizes.small};
    font-family: ${(props) => props.theme.fontFamily};
    }
    &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    }
    &.selected {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
    `;

const NavBarWrapper = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 1rem;
    margin: 0;
    box-shadow: 0px 0px 5px -1px darkslateblue;
    `;

function NavBar() {
    const navigate = useNavigate()
    const location = useLocation()
    const pathMatchRoute = (path: string) => {
        if (path === location.pathname) {
            return true
        }
    }

  return (
    <NavBarWrapper>
    <Tag className={pathMatchRoute('/app') ? 'selected' : ''} onClick={() => navigate('/app')}>Go to App</Tag>
    <Tag className={pathMatchRoute('/about') ? 'selected' : ''} onClick={() => navigate('/about')}>Go to AboutPage</Tag>
    <Tag className={pathMatchRoute('/login') ? 'selected' : ''} onClick={() => navigate('/login')}>Go to Login Page</Tag>  
    </NavBarWrapper>
    )
}

export default NavBar