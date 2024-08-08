import { ChangeEvent, useEffect, useState } from "react";
import { fetchAllPokemons } from "../utils/fetchFromApi";
import { BiSearch } from "react-icons/bi";
import { TransformPokemons } from "../types/pokemons";
import { PokemonGrid } from "../components/PokemonGrid";

export const PokemonsPage = () => {
  const [pokemons, setPokemons] = useState<TransformPokemons>();
  const [filteredPokemons, setFilteredPokemons] = useState<TransformPokemons>();
  useEffect(() => {
    fetchAllPokemons().then((data) => {
      setPokemons(data);
      setFilteredPokemons(data);
    });
  }, []);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "") {
      return setFilteredPokemons(pokemons);
    }

    const pokemonFilter = pokemons?.results.filter(
      (pokemon) => pokemon.name.includes(e.target.value) && pokemon
    );

    setFilteredPokemons((prevState) => {
      if (!prevState) return prevState;
      return {
        ...prevState,
        results: pokemonFilter || [],
      };
    });
  }

  return (
    <section className="max-w-7xl mx-auto pt-20 antialiased">
      <div className="flex justify-center items-center px-4 mb-20 w-full">
        <input
          onChange={(e) => handleSearch(e)}
          type="search"
          className="p-4 rounded-l-md text-black flex-1 shadow-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <BiSearch
          className="p-4 h-auto w-auto rounded-r-md cursor-pointer bg-blue-950 shadow-md"
          size={25}
        />
      </div>

      <PokemonGrid {...filteredPokemons!} />
    </section>
  );
};
