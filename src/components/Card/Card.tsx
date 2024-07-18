import "./Card.css";
import { Component } from "react";
import { CardParams } from "../../types";

export default class Card extends Component<CardParams> {
  capitalizeFirstLetter = (word: string) => {
    const firstLetter = word[0];
    return `${firstLetter.toUpperCase()}${word.slice(1)}`;
  };

  render() {
    const name = this.capitalizeFirstLetter(this.props.name);
    return (
      <div className="card">
        <div className="card__description">
          <div className="card__title">{name}</div>
        </div>
        <div className="card__photo">
          <img src={this.props.photoUrl} alt={name} />
        </div>
      </div>
    );
  }
}
