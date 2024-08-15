import { Type } from "../types/pokemon";
import { pokemonTypeColors, pokemonTypeEmojis } from "../utils/colors";

interface Props {
  id: number;
  types: Type[];
  weight: number;
  height: number;
}

export const PokemonProfileCard = ({ id, types, weight, height }: Props) => {
  return (
    <div className="flex flex-col gap-4 mt-28 shadow-xl p-4 rounded-xl bg-white">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        alt="pokemon"
        className="w-96 h-96 object-contain p-4"
      />
      <div className="rounded-lg p-4 flex flex-col gap-4">
        <p className="text-gray-800 bg-blue-50 border border-gray-300 p-4 rounded-lg">
          <span className="font-bold">Weight:</span> {weight} lb
        </p>
        <p className="text-gray-800 bg-green-50 border border-gray-300 p-4 rounded-lg">
          <span className="font-bold">Height:</span> {height} cm
        </p>
        <div className="text-gray-700 border flex p-4 gap-2">
          <span className="font-bold">Types:</span>
          <div className="flex gap-1 w-full">
            {types.map((type, i) => (
              <span
                key={i}
                className={`text-white text-sm font-semibold rounded-2xl px-2 py-1`}
                style={{
                  // @ts-ignore
                  backgroundColor: `${pokemonTypeColors[type.type.name]}`,
                }}
              >
                {
                  // @ts-ignore
                  pokemonTypeEmojis[type.type.name]
                }{" "}
                {type.type.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
