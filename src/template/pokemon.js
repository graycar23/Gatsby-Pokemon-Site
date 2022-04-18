import React from "react"
import * as d3 from "d3"
import Pie from '../components/pie'
export default function pokemon({ pageContext: { pokemon } }) {
  console.log(pokemon)

  const pieDataValues = (value, length = 6) =>
  d3.range(length).map((item, index) => ({
    label: 'Label'+ index,
    value: value === null || value === undefined ? Math.random() * 100 : value
  }))

  return (
    <div>
      <ul>
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
            <>
            <Pie
              data={pieDataValues}
              width={400}
              height={400}
              innerRadius={100}
              outerRadius={200}
              cornerRadius={15}
            />
            </>
          </li>
      </ul>
    </div>
  )
} 