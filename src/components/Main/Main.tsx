import { ReactNode } from "react";
import { MainProps } from "../../types";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
import styles from "./Main.module.scss";

export default function Main({ cardsList, isLoading }: MainProps): ReactNode {
  return (
    <div className={styles.main}>
      {isLoading === true ? (
        <Loader />
      ) : cardsList.length > 0 ? (
        cardsList.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            photoUrl={card.photoUrl}
          />
        ))
      ) : (
        <div className={styles.notFound}>
          Unfortunately, nothing is found.
          <br />
          Please, try another request.
        </div>
      )}
    </div>
  );
}
