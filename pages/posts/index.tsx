import { getAllPosts, PostMetadata } from "lib/posts";
import Layout from "components/Layout";
import Link from "next/link";
import { GetStaticProps } from "next";

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
      <ul>
        {posts.map((post) => (
          <li>
            <Link href={`/posts/${post.filename}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
}
