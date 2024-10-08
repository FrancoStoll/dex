import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchByName } from "../utils/fetchFromApi";
import { PokemonSingleTransform } from "../types/pokemon";
import { AbilityElement } from "../types/pokemon";
import { ChartStats } from "../components/ChartStats";
import { Ability } from "../components/Ability";
import { PokemonProfileCard } from "../components/PokemonProfileCard";
import { ChartStatMobile } from "../components/ChartStatMobile";
import { BackButton } from "../components/BackButton";

export const PokemonPage = () => {
  const params = useParams();
  const pokemon = params.pokemon;
  const [singlePokemon, setSinglePokemon] =
    useState<PokemonSingleTransform | null>(null);

  useEffect(() => {
    fetchPokemon();
  }, []);

  async function fetchPokemon() {
    const data = await fetchByName(pokemon?.toLowerCase().trim()!);
    setSinglePokemon(data);
  }

  if (!singlePokemon) {
    return <div>Cargando...</div>;
  }

  const { weight, ability, height, id, stats, types } = singlePokemon;

  return (
    <div className="text-black flex flex-col md:flex-row max-w-7xl mx-auto px-4 gap-12 relative">
      <BackButton />
      <PokemonProfileCard
        id={id}
        types={types}
        weight={weight}
        height={height}
      />
      <div className="flex flex-col p-4 flex-1 shadow-xl mt-20 rounded-xl bg-white gap-12 animate__animated animate__backInRight">
        <div className="flex flex-wrap justify-center">
          <p className="text-gray-700 text-4xl font-black -mb-10">Stats Base</p>
          <div className="hidden md:block w-full">
            <ChartStats stats={stats} />
          </div>
          <div className="block md:hidden w-full mt-10">
            <ChartStatMobile stats={stats} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-700 text-4xl font-black">Abilities</p>
          <div className="flex flex-wrap justify-center">
            {ability &&
              ability.map((ab: AbilityElement) => (
                <Ability
                  key={ab.ability.name}
                  name={ab.ability.name}
                  slot={ab.slot}
                  is_hidden={ab.is_hidden}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
