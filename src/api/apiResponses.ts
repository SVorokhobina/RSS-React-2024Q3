import { CardParams } from "../types";

const apiKey = "f586c013-d405-4b3e-bc58-f8a2a0a0013a";
const apiUrl = "https://api.pokemontcg.io/v2/cards";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

/* export default function fetchData() {
  fetch(`${apiUrl}?page=1&pageSize=3`, options)
    .then((response) => response.json())
    .then((response) => {
      const length = response.data.length;
      const resultArray: CardParams[] = [];
      for (let i = 0; i < length; i++) {
        resultArray.push({
          name: response.data[i].name,
          types: response.data[i].types,
          photoUrl: response.data[i].images.small,
        });
      }
      console.log(resultArray);
    })
    .catch((err) => console.log("Something is wrong", err))
} */

export default async function fetchData(): Promise<CardParams[] | undefined> {
  const response = await fetch(`${apiUrl}?page=1&pageSize=6`, options);
  if (response.ok) {
    const respData = await response.json();
    const resultArray: CardParams[] = [];
    for (let i = 0; i < respData.data.length; i++) {
      resultArray.push({
        name: respData.data[i].name,
        types: respData.data[i].types,
        photoUrl: respData.data[i].images.small,
      });
    }
    return resultArray;
  } else {
    console.log("Something went wrong (apiResponses.ts)");
    return undefined;
  }
}
