import styles from "components/Loading.module.css";

export type Props = {
  pastDelay: boolean;
};

export default function Loading({ pastDelay }: Props) {
  if (!pastDelay) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.loading} />
    </div>
  );
}
