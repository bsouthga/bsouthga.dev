import { ReactNode } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

import styles from "./Layout.module.css";

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
