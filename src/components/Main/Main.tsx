import "./Main.css";
import { Component } from "react";
import Card from "../Card/Card";
import { MainProps } from "../../types";
import Loader from "../Loader/Loader.tsx";

export default class Header extends Component<MainProps> {
  render() {
    return (
      <main className="main">
        {this.props.isLoading === true ? (
          <Loader />
        ) : this.props.requestArray.length > 0 ? (
          this.props.requestArray.map((elem) => (
            <Card
              key={elem.photoUrl}
              name={elem.name}
              types={elem.types}
              photoUrl={elem.photoUrl}
            />
          ))
        ) : (
          <div className="not-found-message">
            Unfortunately, nothing is found.
            <br />
            Please, try another request.
          </div>
        )}
      </main>
    );
  }
}
