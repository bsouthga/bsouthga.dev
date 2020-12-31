import { getAllPosts, PostMetadata } from "lib/posts";
import Layout from "components/Layout";
import { GetStaticProps } from "next";
import formatDate from "lib/formatDate";
import Head from "next/head";

type Props = {
  posts: Omit<PostMetadata, "content">[];
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const posts = await getAllPosts();
  return {
    props: {
      posts: posts.map(({ content: _, ...rest }) => rest),
    },
  };
};

export default function Posts(props: Props) {
  const { posts } = props;

  return (
    <Layout>
      <Head>
        <title>Posts | Ben Southgate</title>
      </Head>
      <h1>Posts</h1>
      {posts.map((post) => {
        const href = `/posts/${post.filename}`;
        return (
          <div key={href}>
            <h3>
              <a href={href}>
                {formatDate(post.date)} - {post.title}
              </a>
            </h3>
            <p>{post.subtitle}</p>
          </div>
        );
      })}
    </Layout>
  );
}
