This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Summary
[PokeGuesser](https://pokeguesser-eight.vercel.app/) is a guessing game that requests a random Pokemon species from [PokeAPI](https://pokeapi.co/) 
and then displays an obfuscated image of the default variant for that species. 

Users can input up to four guesses, receiving new hints after each.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Future improvements
* Account creation to track game history between sessions
* Real-time multiplayer sessions, cooperative or head to head
* Winning streaks with leaderboards
* Difficulty levels by changing the level of obfuscation applied to the art
* Implementing Pokemon sound as a hint
* Allowing users to filter the initial Pokemon selection to specific generations, types, etc.
* The game's main page is set to dynamic which could be avoided by changing the data retrieval and component flows

## Limitations
* The "appears in" hint on occasion does not have any data as there's nothing returned by the API