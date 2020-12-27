import style9 from "style9";

const styles = style9.create({
  footer: {
    width: "100%",
    maxWidth: 600,
    display: "flex",

    justifyContent: "center",
    borderTopColor: "#000",
    borderTopWidth: 1,
    borderTopStyle: "solid",
    marginTop: 20,
    paddingTop: 10,
    marginBottom: 40,
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
      <a
        href="https://github.com/bsouthga/bsouthga.github.io"
        target="_blank"
        className={styles("link")}
      >
        <img className={styles("github")} src="assets/icons/github.svg" />
      </a>
    </footer>
  );
}
