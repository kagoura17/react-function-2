import axios from "axios";
import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";

const PokemonPick = () => {
  const [pokemonData, setPokmonData] = useState([]);
  const url = `https://pokeapi.co/api/v2/pokemon/`;
  useEffect(() => {
    axios
    .get(url);
    .then((response) => {
        console.log(response);
      setPokmonData(response.data.results);
    });



    
    console.log(pokemonData);
  }, [url]);

  return (
    <>
      <Pokemon data={pokemonData}></Pokemon>
    </>
  );
};

export default PokemonPick;
