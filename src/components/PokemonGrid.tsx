import { TransformedPokemon } from "../types/pokemons";
import { PokemonCard } from "./PokemonCard";
import { Skeleton } from "./Skeleton";

export interface Props {
  pokemons: TransformedPokemon[];
  isLoading: boolean;
}

export const PokemonGrid = ({ pokemons, isLoading }: Props) => {
  if (!pokemons) return <Skeleton />;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 place-items-center min-h-screen">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} {...pokemon}/>
        ))}
      </div>

      {isLoading && <Skeleton />}
    </>
  );
};
