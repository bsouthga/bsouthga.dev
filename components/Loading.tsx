import styles from "components/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loading} />
    </div>
  );
}
