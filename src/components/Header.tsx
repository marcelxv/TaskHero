import React from "react";
import "../App.css";
import styled from 'styled-components';

const Nav = styled.section`
  font-family: ${props => props.theme.fontFamily};
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: ${props => props.theme.fontSizes.big};
  }

  a {
    color: #fff;
    text-decoration: none;
    letter-spacing: 1px;
    font-size: ${props => props.theme.fontSizes.small};
  }
  `;


function Header() {
  return (
    <Nav>
      <h1>TaskHero 🦸</h1>
      <a href="https://github.com/marcelxv">marcelxv</a>
    </Nav>
  );
}
export default Header;
