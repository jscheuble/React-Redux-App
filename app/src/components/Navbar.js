import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  margin: 2% auto 0 auto;
  width: 70%;
`;

export default function Navbar() {
  return (
    <header>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/random">Random</Link>
        <Link to="/cocktails">List of Cocktails</Link>
      </Nav>
    </header>
  );
}
