import { CardParams } from "../types";

const apiKey = "f586c013-d405-4b3e-bc58-f8a2a0a0013a";
const apiUrl = "https://api.pokemontcg.io/v2/cards";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const PAGE = 1;
const PAGE_SIZE = 20;

export default async function fetchData(
  searchQuery?: string,
): Promise<{ arr: CardParams[]; isLoading: boolean } | undefined> {
  let response: Response;
  if (!searchQuery) {
    response = await fetch(
      `${apiUrl}?page=${PAGE}&pageSize=${PAGE_SIZE}`,
      options,
    );
  } else {
    response = await fetch(`${apiUrl}?q=name:${searchQuery}`, options);
  }

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
    return { arr: resultArray, isLoading: false };
  } else {
    console.log("Something went wrong (apiResponses.ts + searchQuery)");
    return undefined;
  }
}
