import { ReactNode } from "react";
import { MainProps } from "../../types";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
import styles from "./Main.module.scss";

export default function Main({ cardsArray, isLoading }: MainProps): ReactNode {
  return (
    <div className={styles.main}>
      {isLoading === true ? (
        <Loader />
      ) : (
        cardsArray.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            name={card.name}
            photoUrl={card.photoUrl}
          />
        ))
      )}
    </div>
  );
}

/*
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
        <div className={styles.notFound}>
          Unfortunately, nothing is found.
          <br />
          Please, try another request.
        </div>
      )}
*/

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

/*
-------------------------------------------------
import { ReactNode } from "react";
import { MainProps } from "../../types";
import Loader from "../Loader/Loader";
import Card from "../Card/Card";
import styles from "./Main.module.scss";

export default function Main({ cardsArray, isLoading }: MainProps): ReactNode {
  return (
    <div className={styles.main}>
      {(isLoading === true) ? (
          <Loader/>
        ) : (
          cardsArray.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              name={card.name}
              photoUrl={card.photoUrl}
            />
          ))
        )
      }
    </div>
  );
}
*/
