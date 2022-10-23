import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "components/Layout";
import { getPost, getPostFiles, PostMetadata } from "lib/posts";
import Head from "next/head";
import PostHeader from "components/PostHeader";
import dynamic from "next/dynamic";
import Loading from "components/Loading";
import PostOpenGraph from "components/PostOpenGraph";
import { Maybe } from "lib/types";
import NotFound from "components/NotFound";

const PostContent = dynamic(() => import("components/PostContent"), {
  loading: Loading,
});

type Query = {
  id: string;
};

type Props = {
  post: Maybe<PostMetadata>;
};

export const getStaticPaths: GetStaticPaths<Query> = async (context) => {
  const posts = await getPostFiles();
  return {
    paths: posts.map((id) => ({
      params: {
        id,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Query> = async (context) => {
  const id = context?.params?.id;
  return {
    props: {
      post: id != null ? await getPost(id) : null,
    },
  };
};

export default function Post(props: Props): JSX.Element {
  const { post } = props;
  if (post == null) {
    return <NotFound />;
  }

  return (
    <Layout>
      <Head>
        <title>{post.title + " | Ben Southgate"}</title>
        <link rel="icon" href="/favicon.ico" />
        <PostOpenGraph post={post} />
      </Head>
      <PostHeader post={post} />
      <PostContent post={post} />
    </Layout>
  );
}
