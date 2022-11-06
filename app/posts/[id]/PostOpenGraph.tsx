import { PostMetadata } from "lib/posts";

type Props = {
  post: PostMetadata;
};

function getISODate(datestr: string) {
  const date = new Date(datestr);
  return date.toISOString();
}

export default function PostOpenGraph({ post }: Props) {
  return (
    <>
      <meta itemProp="name" content={post.title} />
      <meta itemProp="description" content={post.subtitle} />
      <meta property="og:title" content={post.title} />
      <meta property="og:type" content="article" />
      <meta property="article:author" content="Ben Southgate" />
      <meta name="article:published_time" content={getISODate(post.date)} />
      <meta name="og:site_name" content="Ben Southgate" />
      {post.metaImage && (
        <>
          <meta itemProp="image" content={post.metaImage} />
          <meta property="og:image" content={post.metaImage} />
        </>
      )}
    </>
  );
}
