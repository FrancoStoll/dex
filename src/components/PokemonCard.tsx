import { Link } from "react-router-dom";
import { TransformedPokemon } from "../types/pokemons";
import { pokemonTypeColors, pokemonTypeEmojis } from "../utils/colors";

export const PokemonCard = ({ id, name, type }: TransformedPokemon) => {
  return (
    <div className="relative z-0 flex w-80 flex-col items-center rounded-xl bg-white text-gray-700 shadow-xl mt-14">
      <img
        src="/bg-pokeball.png"
        alt="bgpokeball"
        className="absolute w-16 h-5w-16 p-4 -z-10 bottom-0 -right-0 rotate-3 overflow-hidden"
      />
      <div className="relative flex justify-center w-full">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt="pokemon"
          className="w-48 h-48 object-contain -mt-20 p-4"
        />
      </div>
      <div className="px-6 py-4 w-full">
        <h4 className="text-2xl tracking-wide font-semibold capitalize">
          {name}
        </h4>
        <p className="leading-relaxed tracking-normal font-light font-sans">
          Pokemon n° {id}
        </p>
      </div>
      <div className="px-6 flex gap-1 w-full">
        {type.map((typeName, i) => (
          <span
            key={i}
            className={`text-white text-sm font-semibold rounded-2xl px-2 py-1`}
            style={{
              // @ts-ignore
              backgroundColor: `${pokemonTypeColors[typeName]}`,
            }}
          >
            {
              // @ts-ignore
              pokemonTypeEmojis[typeName]
            }{" "}
            {typeName}
          </span>
        ))}
      </div>
      <div className="p-6 pt-0 mt-5 w-full leading-snug tracking-tight">
        <Link
          to={`/bulbasaur`}
          type="button"
          className="border-b border-gray-700"
        >
          View Pokemon
        </Link>
      </div>
    </div>
  );
};
