import React from "react"
export default function pokemon({ pageContext: { pokemon } }) {
  console.log(pokemon)
  return (
    <div>
      <ul>
          <li key={pokemon[0].id}>
            <img src={pokemon[0].sprites.front_default} alt={pokemon[0].name} />
            <h2>Name: {pokemon[0].name}</h2>
            <h3>Main Type: {pokemon[0].types[0].type.name}</h3>
            <h3>Stats: </h3>
            <h4>{pokemon[0].stats[0].stat.name} - {pokemon[0].stats[0].base_stat}</h4>
            <h4>{pokemon[0].stats[1].stat.name} - {pokemon[0].stats[1].base_stat}</h4>
            <h4>{pokemon[0].stats[2].stat.name} - {pokemon[0].stats[2].base_stat}</h4>
            <h4>{pokemon[0].stats[3].stat.name} - {pokemon[0].stats[3].base_stat}</h4>
            <h4>{pokemon[0].stats[4].stat.name} - {pokemon[0].stats[4].base_stat}</h4>
            <h4>{pokemon[0].stats[5].stat.name} - {pokemon[0].stats[5].base_stat}</h4>
            <p></p>
          </li>
      </ul>
    </div>
  )
}