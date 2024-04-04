import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Cocktail = () => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const [drinks, setDrinks] = useState({});
  const {id } = useParams();
  useEffect(() => {
    axios.get(url).then((response) => {
      setDrinks(response.data.drinks[0]);
    });
  }, [url]);
  return <>
<div className="drink-main">

  <h1>{drinks.strDrink}</h1>
</div>
  </>;
};

export default Cocktail;
