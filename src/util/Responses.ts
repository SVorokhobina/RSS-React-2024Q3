// import { CardParams } from "./types";

const apiURL = "https://pokeapi.co/api/v2/pokemon";

// export async function fetchData(/* searchValue?: string */) {
/*  const response = await fetch(apiURL);
  if (!response.ok) {
    console.log("Something went wrong");
  }

  const responseJSON = await response.json();
  const resultArr = responseJSON.results.map((pokemon: CardParams) => pokemon.photoUrl);
  return resultArr;
} */

export async function fetchData(searchValue: string) {
  const response = await fetch(`${apiURL}/${searchValue}`);
  if (!response.ok) {
    console.log("Something went wrong");
  }

  const responseJSON = await response.json();
  const name = responseJSON.name;
  const photoUrl = responseJSON.sprites.other["official-artwork"].front_default;
  return { name, photoUrl };
}
