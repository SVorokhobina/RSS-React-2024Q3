import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import fetchData from "./api/apiResponses";
import { CardProps } from "./types";

export default function App() {
  const [searchQuery, setSearchQuery] = useState(
    localStorage.getItem("searchQuery") || "",
  );
  const [cardsList, setCardsList] = useState<CardProps[]>([]);
  const [isLoadingCards, setIsLoadingCards] = useState<boolean>(false);

  useEffect(() => {
    const fetchCards = async () => {
      setIsLoadingCards(true);
      const cards = await fetchData(searchQuery);
      setCardsList(cards);
      setIsLoadingCards(false);
    };
    fetchCards();
  }, [searchQuery]);

  const updateSearchQuery = (query: string): void => {
    setSearchQuery(query);
  };

  return (
    <>
      <Header updateSearchQuery={updateSearchQuery} />
      <Main cardsList={cardsList} isLoading={isLoadingCards} />
    </>
  );
}
