const button = document.getElementById('generate');
const pokemonImageContainer = document.querySelector('aside');
const pokemonDetailsContainer = document.getElementById('pokemon-details');

const fetchPokemon = () => {
  fetch(
    `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 99) + 1}`
  )
    .then((res) => res.json())
    .then((data) => {
      displayPokemon(data);
    });
};

const displayPokemon = (pokemon) => {
  // clear items
  pokemonImageContainer.innerHTML = '';
  pokemonDetailsContainer.innerHTML = '';

  if (pokemon) {
    pokemonImageContainer.innerHTML = `<img src=${pokemon.sprites.front_default} title=${pokemon.name} />`;
    pokemonDetailsContainer.innerHTML = `
    <p><span class="labels">Name:</span>${pokemon.name}</p>
    <p><span class="labels">Weight:</span>${pokemon.weight}</p>
    <p><span class="labels">Height:</span>${pokemon.height}</p>
    <p><span class="labels">Species:</span>${pokemon.species.name}</p>
    <p><span class="labels">Order:</span>${pokemon.order}</p>
    <p><span class="labels">Id:</span>${pokemon.id}</p>
    <p><span class="labels">Base Experience:</span>${pokemon.base_experience}</p>`;
  }
};

button.addEventListener('click', fetchPokemon);
