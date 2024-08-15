import { useEffect, useState } from "react";
import { fetchAllPokemons } from "../utils/fetchFromApi";
import { TransformedPokemon } from "../types/pokemons";
import { PokemonGrid } from "../components/PokemonGrid";
import debounce from "lodash/debounce";
import { InputSearch } from "../components/InputSearch";


export const PokemonsPage = () => {
  const [pokemons, setPokemons] = useState<TransformedPokemon[]>();
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    setOffset(offset + 20); // Incrementar offset
  }, 400);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  const fetchData = () => {
    if (isLoading) return;
    setIsLoading(true);
    fetchAllPokemons(offset).then((data) => {
      setPokemons((prevPokemon) => {
        if (!prevPokemon) return [];

        return [...prevPokemon, ...data.results];
      });
      setIsLoading(false);
    });
  };
  return (
    <section className="max-w-7xl mx-auto pt-20 antialiased">
      <InputSearch />
      <PokemonGrid isLoading={isLoading} pokemons={pokemons!} />
    </section>
  );
};
