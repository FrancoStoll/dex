import { useEffect, useState } from "react";
import { fetchAllPokemons } from "../utils/fetchFromApi";
import { TransformedPokemon } from "../types/pokemons";
import { PokemonGrid } from "../components/PokemonGrid";
import { BiSearch } from "react-icons/bi";

export const PokemonsPage = () => {
  const [pokemons, setPokemons] = useState<TransformedPokemon[]>();
  const [offset, setOffset] = useState<number>(20);
  const [isLoading, setIsLoading] = useState(false);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return;
    }
    setOffset(offset + 20); // Incrementar offset
  };

  useEffect(() => {
    fetchData()
  }, [offset])
  

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchData = () => {
    if (isLoading) return; // Evitar múltiples fetch simultáneos
    setIsLoading(true);
    fetchAllPokemons(offset).then((data) => {
      setPokemons((prevPokemon) => {
        if (!prevPokemon) return [];

        return [...prevPokemon, ...data.results];
      });
    });

    setIsLoading(false);
  };
  return (
    <section className="max-w-7xl mx-auto pt-20 antialiased">
      <div className="flex justify-center items-center px-4 mb-20 w-full">
        <input
          // onChange={(e) => handleSearch(e)}
          type="search"
          className="p-4 rounded-l-md text-black flex-1 shadow-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
        <BiSearch
          className="p-4 h-auto w-auto rounded-r-md cursor-pointer bg-blue-950 shadow-md"
          size={25}
        />
      </div>

      <PokemonGrid isLoading={isLoading} pokemons={pokemons!} />

      <footer className="bg-[#FFFAFA] text-gray-700 py-8 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h5 className="font-bold text-lg">My Website</h5>
              <p className="text-sm">© 2024 My Website. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700">
                About
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
