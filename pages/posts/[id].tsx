import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "components/Layout";
import { getPost, getPostFiles, PostMetadata } from "lib/posts";
import Head from "next/head";
import PostHeader from "components/PostHeader";
import dynamic from "next/dynamic";
import Loading from "components/Loading";
import PostOpenGraph from "components/PostOpenGraph";

const PostContent = dynamic(() => import("components/PostContent"), {
  loading: Loading,
});

type Query = {
  id: string;
};

type Props = {
  post: PostMetadata;
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
  const id = context.params.id;
  const post = await getPost(id);
  return {
    props: {
      post,
    },
  };
};

export default function Post(props: Props): JSX.Element {
  const { post } = props;
  return (
    <Layout>
      <Head>
        <title>{post.title} | Ben Southgate</title>
        <link rel="icon" href="/favicon.ico" />
        <PostOpenGraph post={post} />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossOrigin="anonymous"
        />
      </Head>
      <PostHeader post={post} />
      <PostContent post={post} />
    </Layout>
  );
}
