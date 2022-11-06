import IconLink from "components/IconLink";
import styles from "./Footer.module.css";

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
