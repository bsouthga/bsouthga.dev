import Head from "next/head";
import ItemList from "components/ItemList";
import Layout from "components/Layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Ben Southgate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ItemList />
    </Layout>
  );
}
