import {Pokemon, PokemonClient, PokemonSpecies} from "pokenode-ts";
import Guesser from "@/app/game/guesser/guesser";
import Image from 'next/image';

export default async function Game() {
    async function fetchPokemon() {
        const api = new PokemonClient();
        const speciesList = await api.listPokemonSpecies();
        const speciesCount = speciesList.count;

        const min = 1;
        const max = Math.floor(speciesCount);
        const randomSpeciesIndex = Math.floor(Math.random() * (max - min + 1)) + min;
        const speciesResource = (await api.listPokemonSpecies(randomSpeciesIndex, 1)).results[0];
        species = await api.getPokemonSpeciesByName(speciesResource.name);
        const defaultPokemon = species.varieties.find(v => v.is_default);
        if (defaultPokemon?.pokemon.name) {
            pokemon = await api.getPokemonByName(defaultPokemon.pokemon.name);
            artLocation = pokemon?.sprites?.other?.["official-artwork"].front_default ?? '';
        }
    }

    let pokemon: Pokemon | null = null;
    let species: PokemonSpecies | null = null;
    let artLocation: string = '';
    await fetchPokemon();

    while (artLocation === '') await fetchPokemon();

    if (pokemon === null || species === null) {
        return <p>We had trouble fetching a pokemon... Try again soon!</p>;
    }

    return (
        <section>
            <style>
                {`
                .sprite {
                    filter: grayscale(100%) contrast(0);
                }
            `}
            </style>
            <Image
                src={artLocation}
                alt="Pokemon sprite"
                className="sprite"
                width={256}
                height={256}
            />
            <Guesser pokemon={pokemon} species={species}/>
        </section>
    );
}