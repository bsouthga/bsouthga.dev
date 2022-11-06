import Link from "next/link";
import IconLink from "components/IconLink";
import { IconType } from "components/Icon";

import styles from "./Header.module.css";

type IconProps = {
  icon: IconType;
  href: string;
};

function HeaderIcon({ href, icon }: IconProps) {
  return <IconLink size={20} className={icon} icon={icon} href={href} />;
}

export default function Header(): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <h1 className={styles.name}>
          <Link href="/" className={styles.headerLink}>
            Ben Southgate
          </Link>
        </h1>
        <div className={styles.social}>
          <div>@bsouthga -</div>
          <HeaderIcon icon="github" href="https://github.com/bsouthga" />
          <HeaderIcon icon="twitter" href="https://twitter.com/bsouthga" />
          <HeaderIcon
            icon="linkedin"
            href="https://www.linkedin.com/in/bensouthgate/"
          />
          <HeaderIcon
            icon="stackoverflow"
            href="https://stackoverflow.com/users/1718488/ben-southgate"
          />
          <HeaderIcon icon="posts" href="/posts" />
        </div>
      </div>
    </div>
  );
}
