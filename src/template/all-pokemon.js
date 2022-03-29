import React from "react"
export default function AllPokemon({ pageContext: { allPokemon } }) {
  return (
    <div>
      <ul>
        {allPokemon.map(pokemon => (
          <li key={pokemon.id}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <h2>Name: {pokemon.name}</h2>
            <h3>Main Type: {pokemon.types[0].type.name}</h3>
            <h3>Stats: </h3>
            <h4>{pokemon.stats[0].stat.name} - {pokemon.stats[0].base_stat}</h4>
            <h4>{pokemon.stats[1].stat.name} - {pokemon.stats[1].base_stat}</h4>
            <h4>{pokemon.stats[2].stat.name} - {pokemon.stats[2].base_stat}</h4>
            <h4>{pokemon.stats[3].stat.name} - {pokemon.stats[3].base_stat}</h4>
            <h4>{pokemon.stats[4].stat.name} - {pokemon.stats[4].base_stat}</h4>
            <h4>{pokemon.stats[5].stat.name} - {pokemon.stats[5].base_stat}</h4>
            <p></p>
          </li>
        ))}
      </ul>
    </div>
  )
}