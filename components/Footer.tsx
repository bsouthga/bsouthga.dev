import styles from "components/Footer.module.css";
import GithubLink from "components/GithubLink";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      Ben Southgate, 2020 - &nbsp;
      <GithubLink href="https://github.com/bsouthga/bsouthga.dev" />
    </footer>
  );
}
