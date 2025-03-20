import Link from "next/link";
import { PokemonClient } from "pokenode-ts";
import Image from "next/image";

export default async function End({ searchParams }: { searchParams: Promise<{ won: string, id: number }> }) {

    async function fetchPokemon(id: number) {
        const api = new PokemonClient();
        return await api.getPokemonById(id);
    }

    const params = await searchParams;
    const won = params.won === 'true';
    const id = Number(params.id);
    const pokemon = await fetchPokemon(id);
    const artLocation = pokemon?.sprites?.other?.["official-artwork"].front_default ?? '';

    return (
        <div>
            <Image
                src={artLocation}
                alt="Pokemon sprite"
                className="sprite"
                width={256}
                height={256}
            />
            {won ? (
                <p> Congratulations, you won! </p>
            ) : (
                <p> Oh no, you lost! </p>
            )}
            {pokemon && (<p>Your pokemon was { pokemon.name }.</p>)}

            <p className="mt-3"> Would you like to <Link className="hover:underline font-medium text-blue-400" href="/game">try again?</Link></p>
        </div>
    );
}