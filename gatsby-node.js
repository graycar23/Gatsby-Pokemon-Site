const axios = require("axios")
const { default: pokemon } = require("./src/template/pokemon")
const get = endpoint => axios.get(`https://pokeapi.co/api/v2${endpoint}`)
const getPokemonData = names =>
  Promise.all(
    names.map(async name => {
      const { data: pokemon } = await get(`/pokemon/${name}`)
      return { ...pokemon }
    })
  )

exports.createPages = async ({ actions: { createPage } }) => {
  const allPokemon = await getPokemonData(["infernape", "ditto", "charmander", "pikachu", "cubchoo", "beedrill", "phanpy", "squirtle", "sawk", "throh"])
  
  createPage({
    path: `/pokemon`,
    component: require.resolve("/home/graycar23/my-first-gastby-site-main/src/template/all-pokemon.js"),
    context: { allPokemon },
  })
  
  for (let i = 0; i < allPokemon.length; i++){
    pokemon = [allPokemon[i]]

    if (i-1 >= 0){
      pokemon.push(allPokemon[i-1])
    }

    if (i+1 < allPokemon.length){
      pokemon.push(allPokemon[i+1])
    }

    createPage({
      path: `/pokemon/${pokemon[0].name}`,
      component: require.resolve("/home/graycar23/my-first-gastby-site-main/src/template/pokemon.js"),
      context: { pokemon },
    })
    
    pokemon.length = 0

  }
}