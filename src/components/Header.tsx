import React from "react";
import "../App.css";
import styled from 'styled-components';

const Nav = styled.section`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
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