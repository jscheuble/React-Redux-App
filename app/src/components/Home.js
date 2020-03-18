import React from "react";
import bartender from "../img/bartender.jpg";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome</h1>
      <img
        className="home-img"
        src={bartender}
        alt="bartender pouring cocktails"
      />
    </div>
  );
}
