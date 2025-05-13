import { ReactNode, useEffect, useState } from "react";
import { CardProps, ViewProps } from "../../types";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
import styles from "./View.module.scss";
import getInitData from "../../api/apiResponses";

export default function View({ searchQuery }: ViewProps): ReactNode {
  const [isLoadingData, setLoadingData] = useState<boolean>(false);
  const [cardsList, setCardsList] = useState<CardProps[] | null>(null);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingData(true);
      const response = await getInitData(searchQuery);
      setCardsList(response.resultArray);
      setNumberOfPages(response.pages);
      setLoadingData(false);
    };
    fetchData();
  }, [searchQuery]);

  if (isLoadingData === true || cardsList === null) {
    return (
      <div className={styles.main}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.main}>
      {cardsList.length > 0 ? (
        <>
          <Pagination numberOfPages={numberOfPages} />
          <div className={styles.cardsContainer}>
            {cardsList.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                name={card.name}
                photoUrl={card.photoUrl}
              />
            ))}
          </div>
        </>
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

function Pagination({ numberOfPages }: { numberOfPages: number }) {
  return (
    <div className={styles.paginationContainer}>
      {[...Array(numberOfPages)].map((_, index) => (
        <span key={String(index + 1)} className={styles.paginationItem}>
          {index + 1}
        </span>
      ))}
    </div>
  );
}

/*
function Pagination( {numberOfPages}: {numberOfPages: number}) {
  return (
    <div className={styles.paginationContainer}>
      {Array(numberOfPages).map((numberOfPages) => (
        <span key={numberOfPages}>{numberOfPages}</span>
      ))}
    </div>
  );
}
*/

/* import { ReactNode, useEffect, useState } from "react";
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
      //setCardsList(cards);
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
      <Loader />
      <Pagination />
    </div>
  );
}

function Pagination() {
  return (
    <div>Pagination will be here</div>
  );
} */

/* --------------------------------------------

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
        <>
          <Pagination />
          <div className={styles.cardsContainer}>
            {cardsList.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                name={card.name}
                photoUrl={card.photoUrl}
              />
            ))}
          </div>
        </>
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

function Pagination() {
  return (
    <div>Pagination will be here</div>
  );
} */
