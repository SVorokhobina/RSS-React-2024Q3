import { CardProps } from "../../types";
import styles from "./Card.module.scss";

export default function Card({ name, photoUrl }: CardProps) {
  const cardName = capitalizeFirstLetter(name);
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{cardName}</h3>
      <div className={styles.photo}>
        <img src={photoUrl} alt={name} />
      </div>
    </div>
  );
}

function capitalizeFirstLetter(word: string): string {
  const firstLetter = word[0];
  return `${firstLetter.toUpperCase()}${word.slice(1)}`;
}
