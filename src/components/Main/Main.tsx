import "./Main.css";
import { Component } from "react";
import Card from "../Card/Card";
import { MainProps } from "../../types";

export default class Header extends Component<MainProps> {
  render() {
    return (
      <main className="main">
        {this.props.requestArray.map((elem) => (
          <Card
            key={elem.photoUrl}
            name={elem.name}
            types={elem.types}
            photoUrl={elem.photoUrl}
          />
        ))}
      </main>
    );
  }
}
