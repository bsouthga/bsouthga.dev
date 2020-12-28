import styles from "components/GithubLink.module.css";

type Props = {
  href: string;
};

export default function GithubLink({ href }: Props) {
  return (
    <a href={href} target="_blank" className={styles.link}>
      <img className={styles.github} src="/assets/ionicons/github.svg" />
    </a>
  );
}
