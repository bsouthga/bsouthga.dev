import { ReactNode } from "react";
import Header from "components/Header";
import Footer from "components/Footer";
import style9 from "style9";

const styles = style9.create({
  container: {
    minHeight: "100vh",
    padding: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
  },
  content: {
    width: "100%",
    height: "100%",
    maxWidth: "600px",
  },
});

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  const { children } = props;
  return (
    <div className={styles("container")}>
      <div className={styles("content")}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
