import { ReactNode } from "react";
import style9 from "style9";

const styles = style9.create({
  container: {
    minHeight: "100vh",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },
  content: {
    width: "100%",
    height: "100%",
    maxWidth: 600,
  },
});

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  const { children } = props;
  return (
    <div className={styles("container")}>
      <div className={styles("content")}>{children}</div>
    </div>
  );
}
