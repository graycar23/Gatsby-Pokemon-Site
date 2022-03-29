const axios = require("axios")
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
}