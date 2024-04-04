import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cocktail = () => {
  const { idDrink } = useParams(); 
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`;
  const [drinks, setDrinks] = useState({});

  useEffect(() => {
    axios.get(url).then((response) => {
      setDrinks(response.data.drinks[0]);
    });
  }, [url]);
  console.log("lalalalaa", drinks);
  return (
    <div className="drink-main">
      <h1>{drinks.strDrink}</h1>
    </div>
  );
};

export default Cocktail;
