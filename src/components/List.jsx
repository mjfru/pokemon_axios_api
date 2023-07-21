import { useEffect, useState } from "react";
import axios from "axios";

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => setPokemon(response.data.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {pokemon.map((onePokemon, i) => (
        <p key={i}>{i+1}. {onePokemon.name}</p>
      ))}
    </div>
  );
};

export default PokemonList;
