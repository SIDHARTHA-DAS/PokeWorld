import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import "./PokemonCard.css";

const Pokemons = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=244";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const detailedPokemonData = data.results.map(async (currPokeMon) => {
        const res = await fetch(currPokeMon.url);
        const data = await res.json();
        return data;
      });
      const detailedResponses = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponses);
      setLoading(false);
      setError(error);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  });
  
  // search 
    
  const searchData = pokemon.filter((currPokeMon)=>currPokeMon.name.toLowerCase().includes(search.toLowerCase()));


  if (loading) {
    return (
      <div>
        <h1 className="pokemons">Loading....</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="pokemons">{error.message}</h1>
      </div>
    );
  }

  return (
    <div>
      <section className="container">
        <header>
          <h2>Find Your PokeMon Here</h2>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {searchData.map((currPokeMon) => {
              return (
                <PokemonCard key={currPokeMon.id} pokemonData={currPokeMon} />
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Pokemons;
