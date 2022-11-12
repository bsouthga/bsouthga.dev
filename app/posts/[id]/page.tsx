import Layout from "components/Layout";
import { getPost, getPostFiles, PostMetadata } from "lib/posts";
import PostHeader from "app/posts/[id]/PostHeader";
import NotFound from "components/NotFound";
import PostContent from "app/posts/[id]/PostContent";
import { remark } from "remark";
import { visit } from "unist-util-visit";
import { getPlaiceholder } from "plaiceholder";
import { Maybe } from "lib/types";

type Params = Readonly<{ id: string }>;

async function getPostBlurMap(
  post: Maybe<PostMetadata>
): Promise<Maybe<Map<string, string>>> {
  if (post == null) {
    return null;
  }

  const { content } = post;
  const ast = remark().parse(content);
  const images: Array<string> = [];
  visit(ast, (node) => {
    if (node.type !== "image") {
      return;
    }

    images.push(node.url);
  });

  const pairs: [string, string][] = await Promise.all(
    images.map(async (url) => {
      const result = await getPlaiceholder(url, { size: 24 });
      return [url, result.base64];
    })
  );

  return new Map(pairs);
}

export async function generateStaticParams(): Promise<Params[]> {
  const posts = await getPostFiles();
  return posts.map((id) => ({ id }));
}

export default async function Post({ params }: { params: Params }) {
  const { id } = params;
  const post = await getPost(id);
  const blurMap = await getPostBlurMap(post);

  if (post == null || blurMap == null) {
    return <NotFound />;
  }

  return (
    <Layout>
      <PostHeader post={post} />
      <PostContent post={post} blurDataURLMap={blurMap} />
    </Layout>
  );
}
