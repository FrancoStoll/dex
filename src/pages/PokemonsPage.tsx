import { useEffect, useState } from "react";
import { fetchAllPokemons } from "../utils/fetchFromApi";
import { TransformedPokemon } from "../types/pokemons";
import { PokemonGrid } from "../components/PokemonGrid";
import debounce from "lodash/debounce";
import { InputSearch } from "../components/InputSearch";
import { Footer } from "../components/Footer";

export const PokemonsPage = () => {
  const [pokemons, setPokemons] = useState<TransformedPokemon[]>();
  const [offset, setOffset] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const totalPokemons = 640;
  const handleScroll = debounce(() => {
    const { scrollTop, clientHeight, offsetHeight } = document.documentElement;

    if (isLoading) return;
    if (offset >= totalPokemons) return;
    if (clientHeight + scrollTop >= offsetHeight - 5) setOffset(offset + 20);
  }, 600);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (offset >= totalPokemons) return;
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

      <Footer />
    </section>
  );
};
