'use client'

import {Pokemon, PokemonSpecies} from "pokenode-ts";
import {MouseEvent, KeyboardEvent, useState} from "react";
import Indicator from "@/app/game/guesser/indicator";
import Hints from "@/app/game/guesser/hints";
import {useRouter} from "next/navigation";

export default function Guesser(props: GuesserProps) {
    const router = useRouter();

    function handleGuess(event?: MouseEvent<HTMLButtonElement>) {
        event?.preventDefault();

        const name = pokemon.name.toLowerCase();
        const won = name === state.guess.toLowerCase();
        const lost = state.guesses + 1 >= state.maxGuesses;
        const ended = won || lost;

        if (ended) {
            const route = `/game/end?won=${won}&id=${pokemon.id}`;
            router.push(route);
        } else {
            setState({
                ...state,
                guess: '',
                guesses: state.guesses + 1,
            })
        }
    }

    function handleKeydown(event: KeyboardEvent<HTMLInputElement>) {
        if (event.key === 'Enter') {
            handleGuess();
        }
    }

    function setGuess(value: string) {
        setState({
            ...state,
            guess: value
        });
    }

    function getHints(pokemon: Pokemon) {
        const types = pokemon.types.map(type => type.type.name);
        const moves = pokemon.moves.map(move => move.move.name);
        const appearsIn = pokemon.game_indices.map(game => game.version.name);
        const generation = species.generation.name;
        return [
            `Types: ${types.join(', ')}`,
            `Moves: ${moves.slice(0, 3).join(', ')}`,
            appearsIn.length > 0 ? (`Appears in: ${appearsIn.slice(0, 3)}`) : [].join(', '),
            `Generation: ${generation}`
        ];
    }

    const [state, setState] = useState<GuesserState>({
        guess: '',
        guesses: 0,
        maxGuesses: 4
    });

    const { pokemon, species } = props;

    return (
        <div>
            <input className="border rounded shadow-md px-2"
                   onChange={(event) => setGuess(event.target.value)}
                   onKeyDown={event => handleKeydown(event)}/>
            <div className="flex items-center mt-2">
                <button className="cursor-pointer transition-colors border rounded shadow-md mr-2 px-2 hover:bg-[#f2f2f2] dark:hover:bg-gray-600"
                        onClick={handleGuess}>
                    Guess
                </button>
                <Indicator maxGuesses={state.maxGuesses} guesses={state.guesses} />
            </div>
            <Hints hints={getHints(pokemon)} guessCount={state.guesses} maxGuesses={state.maxGuesses}/>
        </div>
    );
}

export interface GuesserProps {
    pokemon: Pokemon;
    species: PokemonSpecies;
}

export interface GuesserState {
    guess: string;
    guesses: number;
    maxGuesses: number;
}