async function getPokemon(pokemonId) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const response = await fetch(apiUrl);
    const pokemonData = await response.json();
    return pokemonData;
}

module.exports = getPokemon;
