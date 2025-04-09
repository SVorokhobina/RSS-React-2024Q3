import styles from "./Loader.module.scss";

export default function Loader() {
  return (
    <div className={styles.container}>
      <span className={`${styles.loaderElem} ${styles.loaderElem_1}`}></span>
      <span className={`${styles.loaderElem} ${styles.loaderElem_2}`}></span>
      <span className={`${styles.loaderElem} ${styles.loaderElem_3}`}></span>
    </div>
  );
}
