import axios from "axios";
import { useEffect, useState } from "react";
import "./chooseCocktail.css";

import { Link } from "react-router-dom";

const ChooseACocktail = () => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a`;
  const [cocktail, setCocktail] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setCocktail(response.data.drinks);
    });
  }, [url]);

  return (
    <>
      {cocktail.map((drink, index) => (
        <div className="greed-main" key={index}>
          <h1>{drink.strDrink}</h1>
          <h2>{drink.strGlass}</h2>
          <h3>{drink.strAlcoholic}</h3>
          <Link to={`/cocktail/${drink.idDrink}`}>
            <button>details</button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ChooseACocktail;
