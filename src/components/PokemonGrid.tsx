import { TransformPokemons } from "../types/pokemons";
import { PokemonCard } from "./PokemonCard";
import { Skeleton } from "./Skeleton";

export const PokemonGrid = ({
  count,
  next,
  previous,
  results,
}: TransformPokemons) => {
  console.log(count,next,previous);

  if (!results) return <Skeleton />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center">
      {results.map((pokemon) => (
        <PokemonCard key={pokemon.id} {...pokemon} />
      ))}
    </div>
  );
};
