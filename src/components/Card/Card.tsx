import { CardProps } from "../../types";
import "./Card.scss";

export default function Card({ name, photoUrl }: CardProps) {
  const cardName = capitalizeFirstLetter(name);
  return (
    <div className="card">
      <h3 className="card__title">{cardName}</h3>
      <div className="card__photo">
        <img src={photoUrl} alt={name} />
      </div>
    </div>
  );
}

function capitalizeFirstLetter(word: string): string {
  const firstLetter = word[0];
  return `${firstLetter.toUpperCase()}${word.slice(1)}`;
}
