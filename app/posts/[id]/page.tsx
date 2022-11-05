import Layout from "components/Layout";
import { getPost, getPostFiles } from "lib/posts";
import PostHeader from "components/PostHeader";
import NotFound from "components/NotFound";
import PostContent from "components/PostContent";

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const posts = await getPostFiles();
  return posts.map((id) => ({ id }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = await getPost(id);

  if (post == null) {
    return <NotFound />;
  }

  return (
    <Layout>
      <PostHeader post={post} />
      <PostContent post={post} />
    </Layout>
  );
}
