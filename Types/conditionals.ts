// will return void if no data or the actual Pokemon
// yarn add @types/node-fetch this is written by the
// community and it gives us back the types for this library
interface PokemonResults {
  count: number;
  next?: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

type FetchPokemonResult<T> = T extends undefined
  ? Promise<PokemonResults>
  : void;

function fetchPokemon<T extends undefined | ((data: PokemonResults) => void)>(
  url: string,
  callBack?: T
): FetchPokemonResult<T> {
  if (callBack) {
    fetch(url)
      .then((response) => response.json())
      .then(callBack);
    return undefined as FetchPokemonResult<T>;
  } else {
    return fetch(url).then((response) =>
      response.json()
    ) as FetchPokemonResult<T>;
  }
}

fetchPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (data) => {
  data.results.forEach((pokemon) => console.log(pokemon.name));
});

(async function () {
  const data = (await fetchPokemon(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  )) as unknown as PokemonResults;
  data.results.forEach(({ name }) => console.log(name));
})();
