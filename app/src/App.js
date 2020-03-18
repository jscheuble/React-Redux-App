import React from "react";
import "./App.css";

import { Route } from "react-router-dom";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Random from "./components/Random";
import Cocktails from "./components/Cocktails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/random">
        <Random />
      </Route>
      <Route path="/cocktails">
        <Cocktails />
      </Route>
    </div>
  );
}

export default App;
