import Layout from "components/Layout";
import { getPost, getPostFiles } from "lib/posts";
import PostHeader from "app/posts/[id]/PostHeader";
import NotFound from "components/NotFound";
import PostContent from "app/posts/[id]/PostContent";

type Params = Readonly<{ id: string }>;

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getPostFiles();
  return posts.map((id) => ({ id }));
}

export default async function Post({ params }: { params: Params }) {
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
