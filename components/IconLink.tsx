import styles from "components/IconLink.module.css";
import Link from "next/link";

type Props = {
  href: string;
  icon: "markdown" | "github";
  alt?: string;
};

export default function IconLink({ href, icon, alt }: Props) {
  return (
    <Link href={href}>
      <a className={styles.link}>
        <img
          alt={alt}
          className={styles.icon}
          src={`/assets/ionicons/${icon}.svg`}
        />
      </a>
    </Link>
  );
}
