import React, { useState, useEffect } from "react";

import axios from "axios";

import CocktailList from "./CocktailList";

const Cocktails = () => {
  const [query, setQuery] = useState("tequila");
  const [drinks, setDrinks] = useState([]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${query}`)
      .then(res => {
        setDrinks(res.data.drinks);
        console.log("drinks", drinks);
      })
      .catch(err => {
        console.log(err);
      });
  }, [query]);

  return (
    <div>
      <h3>{query.toUpperCase()}</h3>
      <form>
        <select className="dropdown" onChange={handleChange}>
          <option value="tequila">Tequila</option>
          <option value="rum">Rum</option>
          <option value="gin">Gin</option>
          <option value="vodka">Vodka</option>
          <option value="whiskey">Whiskey</option>
          <option value="scotch">Scotch</option>
          <option value="brandy">Brandy</option>
        </select>
      </form>

      {drinks.length > 1 && <CocktailList drinks={drinks} />}
    </div>
  );
};

export default Cocktails;
