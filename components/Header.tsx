import Link from "next/link";
import IconLink from "components/IconLink";
import { IconType } from "components/Icon";
import { style } from "typestyle";

const root = style({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  borderBottomColor: "currentColor",
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
  marginBottom: "20px",
  paddingBottom: "10px",
  alignItems: "flex-end",
});

const name = style({
  fontWeight: "normal",
});

const headerLink = style({
  textDecoration: "none",
  $nest: {
    ":hover": {
      textDecoration: "underline",
    },
  },
});

const social = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

const main = style({
  flexGrow: 1,
});

type IconProps = {
  icon: IconType;
  href: string;
};

function HeaderIcon({ href, icon }: IconProps) {
  return <IconLink size={20} className={icon} icon={icon} href={href} />;
}

export default function Header(): JSX.Element {
  return (
    <div className={root}>
      <div className={main}>
        <h1 className={name}>
          <Link href="/" className={headerLink}>
            Ben Southgate
          </Link>
        </h1>
        <div className={social}>
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
