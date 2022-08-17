import React from "react";
import "../App.css";



function Header({ emoji }: { emoji: string }) {
  return (
    <>
      <h1>TaskHero {emoji} </h1>
      <a href="https://github.com/marcelxv">marcelxv</a>
    </>
  );
}
export default Header;
