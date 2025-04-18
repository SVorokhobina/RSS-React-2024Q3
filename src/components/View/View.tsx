import { ReactNode, useEffect, useState } from "react";
import { CardProps, ViewProps } from "../../types";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
import styles from "./View.module.scss";
import fetchData from "../../api/apiResponses";

export default function View({ searchQuery }: ViewProps): ReactNode {
  const [isLoadingCards, setLoadingCards] = useState<boolean>(false);
  const [cardsList, setCardsList] = useState<CardProps[] | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      setLoadingCards(true);
      const cards = await fetchData(searchQuery);
      setCardsList(cards);
      setLoadingCards(false);
    };
    fetchCards();
  }, [searchQuery]);

  if (isLoadingCards === true || cardsList === null) {
    return (
      <div className={styles.main}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.main}>
      {cardsList.length > 0 ? (
        cardsList.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            photoUrl={card.photoUrl}
          />
        ))
      ) : (
        <NotFoundMessage />
      )}
    </div>
  );
}

function NotFoundMessage() {
  return (
    <div className={styles.notFound}>
      Unfortunately, nothing is found.
      <br />
      Please, try another request.
    </div>
  );
}
