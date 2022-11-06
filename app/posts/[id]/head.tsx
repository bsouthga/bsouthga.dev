import PostOpenGraph from "app/posts/[id]/PostOpenGraph";
import { getPost } from "lib/posts";

export default async function Head({
  params: { id },
}: {
  params: { id: string };
}) {
  const post = await getPost(id);

  if (post == null) {
    return <></>;
  }

  return (
    <>
      <title>{post.title + " | Ben Southgate"}</title>
      <link rel="icon" href="/favicon.ico" />
      <PostOpenGraph post={post} />
    </>
  );
}
