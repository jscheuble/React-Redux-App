import React from "react";

const CocktailList = props => {
  return (
    <div>
      {props.drinks.map(drink => {
        return (
          <div key={drink.idDrink}>
            <p>{drink.strDrink}</p>
            <img src={drink.strDrinkThumb} alt="fancy cocktail" />
          </div>
        );
      })}
    </div>
  );
};

export default CocktailList;
