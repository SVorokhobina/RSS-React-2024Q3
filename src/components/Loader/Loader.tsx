import styles from "./Loader.module.scss";
import Dots from "../DecorationElements/Dots";

export default function Loader() {
  return (
    <div className={styles.container}>
      <Dots />
      <div>Loading</div>
      <Dots classes={"reverse"} />
    </div>
  );
}
