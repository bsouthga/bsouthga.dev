import Link from "next/link";
import IconLink from "components/IconLink";
import { IconType } from "components/Icon";
import style9 from "style9";

const styles = style9.create({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "currentColor",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    marginBottom: "20px",
    paddingBottom: "10px",
    alignItems: "flex-end",
  },
  name: {
    fontWeight: "normal",
  },
  headerLink: {
    // @ts-ignore
    textDecoration: "none",
    ":hover": {
      // @ts-ignore
      textDecoration: "underline",
    },
  },
  social: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginLeft: "5px",
  },
  main: {
    flexGrow: 1,
  },
});

type IconProps = {
  icon: IconType;
  href: string;
};

function HeaderIcon({ href, icon }: IconProps) {
  return (
    <IconLink size={20} className={styles("icon")} icon={icon} href={href} />
  );
}

export default function Header(): JSX.Element {
  return (
    <div className={styles("root")}>
      <div className={styles("main")}>
        <h1 className={styles("name")}>
          <Link href="/">
            <a className={styles("headerLink")}>Ben Southgate</a>
          </Link>
        </h1>
        <div className={styles("social")}>
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
