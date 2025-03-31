import { CardProps } from "../types";

const apiKey = "88ae09a1-e896-480f-8e0c-ef0e717b1c49";
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
  searchQuery: string,
): Promise<CardProps[]> {
  let response: Response;
  if (searchQuery === "") {
    response = await fetch(
      `${apiUrl}?page=${PAGE}&pageSize=${PAGE_SIZE}`,
      options,
    );
  } else {
    response = await fetch(
      `${apiUrl}?page=${PAGE}&pageSize=${PAGE_SIZE}&q=name:*${searchQuery}*`,
      options,
    );
  }

  if (!response.ok) {
    throw new Error("Fetch error in apiResponses.ts");
  }

  const responseJson = await response.json();
  const resultArray: CardProps[] = [];
  for (let i = 0; i < responseJson.data.length; i += 1) {
    resultArray.push({
      id: responseJson.data[i].id,
      name: responseJson.data[i].name,
      photoUrl: responseJson.data[i].images.small,
    });
  }
  return resultArray;
}

/*
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
    response = await fetch(`${apiUrl}?q=name:*${searchQuery}*`, options);
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
}*/
