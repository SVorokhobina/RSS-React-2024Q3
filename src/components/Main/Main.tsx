import { ReactNode } from "react";
import { MainProps } from "../../types";
import Card from "../Card/Card";
import "./Main.scss";

export default function Main({ cardsArray }: MainProps): ReactNode {
  return (
    <div className="main">
      {cardsArray.length > 0 ? (
        cardsArray.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            photoUrl={card.photoUrl}
          />
        ))
      ) : (
        <div className="main__not-found">
          Unfortunately, nothing is found.
          <br />
          Please, try another request.
        </div>
      )}
    </div>
  );
}

/*
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
}*/
