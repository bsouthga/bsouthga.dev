import { ReactNode } from "react";
import Header from "components/Header";
import Footer from "components/Footer";

import styles from "./Layout.module.css";
import TitleFix from "./TitleFix";

type Props = {
  children: ReactNode;
};

export default function Layout(props: Props): JSX.Element {
  const { children } = props;
  return (
    <div className={styles.container}>
      <TitleFix />
      <div className={styles.content}>
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
}
