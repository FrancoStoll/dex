import { BiSearch } from "react-icons/bi";
import { pokemonNames } from "../data/pokemonNames";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const InputSearch = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [haveResults, setHaveResults] = useState(false);
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value === "" || e.target.value.length < 2) {
      setResults([]);
      setHaveResults(false);
      return;
    }
    const pokemonsFilter = pokemonNames.filter((poke) =>
      poke.toLowerCase().startsWith(input.toLowerCase().trim())
    );
    if (!pokemonsFilter) return [];

    setResults(pokemonsFilter);
    setHaveResults(pokemonsFilter.length > 0);
  }

  function handleResultClick(result: string) {
    navigate(`/${result.toLowerCase()}`);
  }

  function handleClickOutside(e: MouseEvent) {
    if (resultsRef.current?.contains(e.target as Node)) return;
    setHaveResults(false);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center items-center px-4 mb-20 w-full relative">
      <input
        onSelect={() => setHaveResults(true)}
        onChange={(e) => {
          setInput(e.target.value);
          handleSearch(e);
        }}
        type="search"
        value={input}
        className="p-4 rounded-l-md text-black flex-1 shadow-md focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      />
      <BiSearch
        className="p-4 h-auto w-auto rounded-r-md cursor-pointer bg-blue-950 shadow-md"
        size={25}
        onClick={() => navigate(`/${input.toLowerCase()}`)}
      />
      {haveResults && (
        <div
          ref={resultsRef}
          className="flex flex-col justify-start h-auto absolute text-black  bg-white w-[95%] top-16 left-0 rounded-xl z-20"
        >
          {results.map((result, index) => (
            <span
              key={index}
              className="text-xl font-sans tracking-tight leading-relaxed cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-xl"
              onClick={() => handleResultClick(result)}
            >
              {result}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
