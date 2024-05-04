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
  console.log(pokemon);

  // clear items
  pokemonImageContainer.innerHTML = '';
  pokemonDetailsContainer.innerHTML = '';

  const imageElement = document.createElement('img');
  imageElement.src = pokemon.sprites.front_default;
  pokemonImageContainer.appendChild(imageElement);

  const name = document.createElement('p');
  name.textContent = 'Name: ' + pokemon.name;

  const weight = document.createElement('p');
  weight.textContent = 'Weight: ' + pokemon.weight;

  const height = document.createElement('p');
  height.textContent = 'Height: ' + pokemon.height;

  const species = document.createElement('p');
  species.textContent = 'Species Name: ' + pokemon.species.name;

  const order = document.createElement('p');
  order.textContent = 'Order: ' + pokemon.order;

  const id = document.createElement('p');
  id.textContent = 'Id: ' + pokemon.id;

  const baseExperience = document.createElement('p');
  baseExperience.textContent = 'Base_experience: ' + pokemon.base_experience;

  pokemonDetailsContainer.append(
    name,
    weight,
    height,
    species,
    order,
    id,
    baseExperience
  );
};

button.addEventListener('click', fetchPokemon);
