import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "components/Layout";
import { getPost, getPostFiles, PostMetadata } from "lib/posts";
import PostContent from "components/PostContent";
import Head from "next/head";
import formatDate from "lib/formatDate";

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
          integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
          crossOrigin="anonymous"
        />
        <title>{post.title} | Ben Southgate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{post.title}</h1>
      <h3>{formatDate(post.date)}</h3>
      <PostContent post={post} />
    </Layout>
  );
}
