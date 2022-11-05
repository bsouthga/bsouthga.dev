import { getAllPosts } from "lib/posts";
import Layout from "components/Layout";
import formatDate from "lib/formatDate";
import Link from "next/link";

export default async function Posts() {
  const posts = await getAllPosts();

  return (
    <Layout>
      <h1>Posts</h1>
      {posts.map((post) => {
        const href = `/posts/${post.filename}`;
        return (
          <div key={href}>
            <h3>
              <Link href={href}>
                {formatDate(post.date)} - {post.title}
              </Link>
            </h3>
            <p>{post.subtitle}</p>
          </div>
        );
      })}
    </Layout>
  );
}
