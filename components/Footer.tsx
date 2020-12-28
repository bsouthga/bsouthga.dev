import styles from "components/Footer.module.css";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      Ben Southgate, 2020 - &nbsp;
      <a
        href="https://github.com/bsouthga/bsouthga.dev"
        target="_blank"
        className={styles.link}
      >
        <img className={styles.github} src="assets/ionicons/github.svg" />
      </a>
    </footer>
  );
}
