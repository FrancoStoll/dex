import { Pokemons, Poketype } from '../types/pokemons';

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export async function fetchAllPokemons(offset: number) {

    const req = await fetch(`${BASE_URL}/?limit=20&offset=${+offset}`)
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




