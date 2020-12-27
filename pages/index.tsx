import Head from "next/head";
import ItemList from "components/ItemList";
import Footer from "components/Footer";
import Header from "components/Header";

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
  main: {
    padding: "5rem 0",
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Home() {
  return (
    <div className={styles("container")}>
      <Head>
        <title>Ben Southgate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles("main")}>
        <Header />
        <ItemList />
        <Footer />
      </main>
    </div>
  );
}
