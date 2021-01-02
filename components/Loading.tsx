import styles from "components/Loading.module.css";

export type Props = {
  pastDelay: boolean;
};

export default function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.loading} />
    </div>
  );
}
