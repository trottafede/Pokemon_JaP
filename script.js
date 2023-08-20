const spinner = document.getElementById("spinner");

document.addEventListener("DOMContentLoaded", async () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0";
  const response = await fetch(url);
  const data = await response.json();
  array_pokemones = data.results;

  let result = "";
  for (const pokemon of array_pokemones) {
    result += await fetchPokemones(pokemon.url);
  }
  document.getElementById("pokeArray").innerHTML = result;
});

document.getElementById("searchButton").addEventListener("click", async () => {
  spinner.classList.remove("hideSpinner");
  const pokemonName = document
    .getElementById("pokemonName")
    .value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  result = await fetchPokemones(url);
  document.getElementById("pokemonInfo").innerHTML = result;
  spinner.classList.add("hideSpinner");
});

async function fetchPokemones(url) {
  const notFoundIMG =
    "https://ih1.redbubble.net/image.4246722393.2975/raf,750x1000,075,t,FFFFFF:97ab1c12de.jpg";

  spinner.classList.remove("hideSpinner");
  let html = "";
  try {
    const response = await fetch(url);
    const data = await response.json();

    const numeroPokemon = data.id;
    const imagenPokemon1 = data.sprites.other["official-artwork"].front_default;
    const imagenPokemon2 = data.sprites.other["home"].front_default;
    const nombrePokemon = data.name.toUpperCase();
    const tipos = data.types.map((type) => type.type.name).join(", ");

    if (!imagenPokemon1) {
      imagenPokemon1 = notFoundIMG;
      imagenPokemon2 = notFoundIMG;
    }
    let background = "";

    if (tipos.includes("normal")) {
      background = "normal";
    } else if (tipos.includes("fire")) {
      background = "fire";
    } else if (tipos.includes("water")) {
      background = "water";
    } else if (tipos.includes("grass")) {
      background = "grass";
    } else if (tipos.includes("electric")) {
      background = "electric";
    } else if (tipos.includes("ice")) {
      background = "ice";
    } else if (tipos.includes("fighting")) {
      background = "fighting";
    } else if (tipos.includes("poison")) {
      background = "poison";
    } else if (tipos.includes("ground")) {
      background = "ground";
    } else if (tipos.includes("flying")) {
      background = "flying";
    } else if (tipos.includes("psychic")) {
      background = "psychic";
    } else if (tipos.includes("bug")) {
      background = "bug";
    } else if (tipos.includes("rock")) {
      background = "rock";
    } else if (tipos.includes("ghost")) {
      background = "ghost";
    } else if (tipos.includes("dragon")) {
      background = "dragon";
    } else if (tipos.includes("dark")) {
      background = "dark";
    } else if (tipos.includes("steel")) {
      background = "steel";
    } else if (tipos.includes("fairy")) {
      background = "fairy";
    }

    html = `
    <div class="col">
      <div class="pokemon ${background}">
        <div class="imgContainer">
          <img src="${imagenPokemon1}" alt="${nombrePokemon}">
        </div>
        <div class="pokeDetails">
          <h5>${nombrePokemon}</h5>
          <p>${numeroPokemon}</p>
          <p>${tipos}</p>
        </div>
      </div>
    </div>
    `;
  } catch (error) {
    html = `
    <div class="col">
      <div class="pokemon">
        <div class="imgContainer">
          <img 
          src=${notFoundIMG}
          alt="imagen no encontrada">
        </div>
        <div class="pokeDetails">
          <h5>Pokemon no encontrado</h5>
          <p>Pues error mi pana</p>
          <p>No encontrado, 404</p>
        </div>
      </div>
    </div>
    `;
  }
  spinner.classList.add("hideSpinner");
  return html;
}

const handleClick = async (pagina) => {
  let offset = 0;
  switch (pagina) {
    case 1:
      offset = 0;
      break;
    case 2:
      offset = 100;
      break;
    case 3:
      offset = 200;
      break;
    case 4:
      offset = 300;
      break;
    case 5:
      offset = 400;
      break;
    case 6:
      offset = 500;
      break;
    case 7:
      offset = 600;
      break;
    case 8:
      offset = 700;
      break;
    case 9:
      offset = 800;
      break;
    case 10:
      offset = 900;
      break;
    case 11:
      offset = 1000;
      break;
    case 12:
      offset = 1100;
      break;
    case 13:
      offset = 1200;
      break;
    default:
      break;
  }
  const url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`;
  const response = await fetch(url);
  const data = await response.json();
  array_pokemones = data.results;

  let result = "";
  for (const pokemon of array_pokemones) {
    result += await fetchPokemones(pokemon.url);
  }
  document.getElementById("pokeArray").innerHTML = result;
};
