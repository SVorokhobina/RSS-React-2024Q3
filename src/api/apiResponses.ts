import { CardProps } from "../types";

const apiKey = "88ae09a1-e896-480f-8e0c-ef0e717b1c49";
const apiUrl = "https://api.pokemontcg.io/v2/cards";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

export async function getInitData(
  searchQuery: string,
  cardsPerPage: number,
): Promise<{ pages: number; resultArray: CardProps[] }> {
  let response: Response;
  if (searchQuery === "") {
    response = await fetch(`${apiUrl}`, options);
  } else {
    response = await fetch(`${apiUrl}?q=name:*${searchQuery}*`, options);
  }

  if (!response.ok) {
    throw new Error("Fetch error in apiResponses.ts (fetchData)");
  }

  const responseJson = await response.json();
  const pages = calcNumberOfPages(responseJson.data.length, cardsPerPage);
  const resultArray: CardProps[] = await fetchCards(searchQuery, cardsPerPage);
  return { pages, resultArray };
}

function calcNumberOfPages(arrayLength: number, cardsPerPage: number): number {
  return Math.floor(arrayLength / cardsPerPage);
}

export async function fetchCards(
  searchQuery: string,
  cardsPerPage: number,
  pageNumber: number = 1,
): Promise<CardProps[]> {
  let response: Response;
  if (searchQuery === "") {
    response = await fetch(
      `${apiUrl}?page=${pageNumber}&pageSize=${cardsPerPage}`,
      options,
    );
  } else {
    response = await fetch(
      `${apiUrl}?page=${pageNumber}&pageSize=${cardsPerPage}&q=name:*${searchQuery}*`,
      options,
    );
  }

  if (!response.ok) {
    throw new Error("Fetch error in apiResponses.ts (fetchCards)");
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

/*import { CardProps } from "../types";

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
} */
