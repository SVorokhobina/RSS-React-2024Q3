import styles from "./Dots.module.scss";

export default function Dots({ classes }: { classes?: string }) {
  const reverseStyle = classes !== "reverse" ? "" : styles.reverse;

  return (
    <div className={`${styles.decorationDots} ${reverseStyle}`}>
      <span className={`${styles.dot} ${styles.dot_1}`}></span>
      <span className={`${styles.dot} ${styles.dot_2}`}></span>
      <span className={`${styles.dot} ${styles.dot_3}`}></span>
    </div>
  );
}
