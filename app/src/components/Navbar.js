import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/random">Random</Link>
        <Link to="/cocktails">List of Cocktails</Link>
      </nav>
    </header>
  );
}
