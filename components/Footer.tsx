import IconLink from "components/IconLink";
import style9 from "style9";

const styles = style9.create({
  footer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    borderTopColor: "currentColor",
    borderTopStyle: "solid",
    borderTopWidth: 1,
    marginTop: "20px",
    paddingTop: "10px",
    marginBottom: "40px",
  },
  github: {
    height: 16,
  },
  link: {
    lineHeight: 0,
  },
});

export default function Footer(): JSX.Element {
  return (
    <footer className={styles("footer")}>
      Ben Southgate, 2020 - &nbsp;
      <IconLink
        alt="view the source of this website on github"
        icon="github"
        href="https://github.com/bsouthga/bsouthga.dev"
      />
    </footer>
  );
}
