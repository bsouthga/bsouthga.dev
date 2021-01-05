import style9 from "style9";

const styles = style9.create({
  root: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "200px",
  },
});

export default function NotFound() {
  return <div className={styles("root")}>whoops, this doesn't exist...</div>;
}
