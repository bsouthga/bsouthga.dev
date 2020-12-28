import { ReactNode } from "react";
import styles from "components/Layout.module.css";
import Header from "components/Header";
import Footer from "components/Footer";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  const { children } = props;
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
