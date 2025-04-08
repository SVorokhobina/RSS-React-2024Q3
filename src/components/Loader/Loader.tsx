import styles from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.container}>
      <span className="loader"></span>
      <span className="loader"></span>
      <span className="loader"></span>
    </div>
  );
}

/* export default class Loader extends Component {
  render() {
    return (
      <div className="loader__container">
        <span className="loader"></span>
        <span className="loader"></span>
        <span className="loader"></span>
      </div>
    );
  }
} */
