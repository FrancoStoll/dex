import { PokemonSingle } from "../types/pokemon";
import { Pokemons, Poketype } from "../types/pokemons";





const BASE_URL = "https://pokeapi.co/api/v2/";



export async function fetchAllPokemons(offset: number) {

    const req = await fetch(`${BASE_URL}/pokemon?limit=20&offset=${+offset}`)
    const res: Pokemons = await req.json();
    const pokemons = await Promise.all(res.results.map(async (pokemon) => {
        const pokeType: Poketype = await getType(pokemon.url)
        return {
            id: pokeType.id,
            name: pokeType.name,
            type: pokeType.types.map(type => type.type.name),
        }
    })
    )
    return {
        results: pokemons,
    }
}


async function getType(url: string) {
    const req = await fetch(url)
    const resp = await req.json()
    return resp
}



export async function fetchByName(name: string) {

    const req = await fetch(`${BASE_URL}/pokemon/${name}`)
    const res: PokemonSingle = await req.json();


    return {
        id: res.id,
        ability: res.abilities,
        stats: res.stats,
        weight: res.weight,
        height: res.height,
        types: res.types,
    }

}



