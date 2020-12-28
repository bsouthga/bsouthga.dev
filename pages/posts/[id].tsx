import { GetStaticPaths, GetStaticProps } from "next";
import ReactMarkdown from "react-markdown";
import Layout from "components/Layout";
import { getPost, getPostFiles, PostMetadata } from "lib/posts";

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
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </Layout>
  );
}
