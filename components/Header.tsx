import style9 from "style9";
import Image from "next/image";

const styles = style9.create({
  root: {
    width: "100%",
    maxWidth: 600,
    display: "flex",
    flexDirection: "row",
    borderBottomColor: "#000",
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingBottom: 10,
    alignItems: "flex-end",
  },
  name: {
    fontWeight: "normal",
  },
  social: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    height: 20,
    marginLeft: 5,
  },
  main: {
    flexGrow: 1,
  },
  image: {
    flexGrow: 0,
    flexShrink: 0,
    lineHeight: 0,
    borderColor: "#000",
    borderStyle: "solid",
    borderWidth: 1,
  },
});

export default function Header(): JSX.Element {
  return (
    <div className={styles("root")}>
      <div className={styles("main")}>
        <h1 className={styles("name")}>Ben Southgate</h1>
        <div className={styles("social")}>
          <div>@bsouthga -</div>
          <a href="https://github.com/bsouthga" target="_blank">
            <img className={styles("icon")} src="assets/icons/github.svg" />
          </a>
          <a href="https://twitter.com/bsouthga" target="_blank">
            <img className={styles("icon")} src="assets/icons/twitter.svg" />
          </a>
          <a href="https://www.linkedin.com/in/bensouthgate/" target="_blank">
            <img className={styles("icon")} src="assets/icons/linkedin.svg" />
          </a>
          <a
            href="https://stackoverflow.com/users/1718488/ben-southgate"
            target="_blank"
          >
            <img
              className={styles("icon")}
              src="assets/icons/stack-overflow.svg"
            />
          </a>
        </div>
      </div>
      <div className={styles("image")}>
        <Image width={80} height={80} src="/assets/images/face.jpg" />
      </div>
    </div>
  );
}
