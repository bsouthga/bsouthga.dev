import Link from "next/link";
import styles from "components/Header.module.css";

type IconProps = {
  kind: string;
  href: string;
};

function Icon({ kind, href }: IconProps) {
  return (
    <Link href={href}>
      <a>
        <img
          alt={kind}
          title={kind}
          className={styles.icon}
          src={`/assets/ionicons/${kind}.svg`}
        />
      </a>
    </Link>
  );
}

export default function Header(): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <h1 className={styles.name}>
          <Link href="/">Ben Southgate</Link>
        </h1>
        <div className={styles.social}>
          <div>@bsouthga -</div>
          <Icon kind="github" href="https://github.com/bsouthga" />
          <Icon kind="twitter" href="https://twitter.com/bsouthga" />
          <Icon
            kind="linkedin"
            href="https://www.linkedin.com/in/bensouthgate/"
          />
          <Icon
            kind="stackoverflow"
            href="https://stackoverflow.com/users/1718488/ben-southgate"
          />
          <Icon kind="posts" href="/posts" />
        </div>
      </div>
    </div>
  );
}
