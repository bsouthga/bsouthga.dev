import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "components/Layout";
import Loading from "components/Loading";

const ItemList = dynamic(() => import("components/ItemList"), {
  loading: Loading,
});

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
