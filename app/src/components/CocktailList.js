import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 30%;
`;

const CocktailList = props => {
  return (
    <div className="cocktail-list">
      {props.drinks.map(drink => {
        return (
          <Div key={drink.idDrink}>
            <p className="name">{drink.strDrink}</p>
            <img
              className="drink-img"
              src={drink.strDrinkThumb}
              alt="fancy cocktail"
            />
          </Div>
        );
      })}
    </div>
  );
};

export default CocktailList;
