import styles from "components/Footer.module.css";
import IconLink from "components/IconLink";

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      Ben Southgate, 2020 - &nbsp;
      <IconLink
        alt="view the source of this website on github"
        icon="github"
        href="https://github.com/bsouthga/bsouthga.dev"
      />
    </footer>
  );
}
