import { Link } from "react-router";
import styles from "./ErrorPages.module.scss";
import Dots from "../DecorationElements/Dots";

export default function PageNotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        Sorry, the requested URL was not found.
      </div>
      <Link to="/" className={styles.returnLink}>
        <Dots />
        To the main page
        <Dots classes={"reverse"} />
      </Link>
    </div>
  );
}
