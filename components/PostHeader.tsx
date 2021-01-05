import { PostMetadata } from "lib/posts";
import IconLink from "components/IconLink";
import formatDate from "lib/formatDate";
import Link from "next/link";
import style9 from "style9";

const styles = style9.create({
  metadata: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "1em",
  },
});

function getMarkdownLink(id: string) {
  return `https://github.com/bsouthga/bsouthga.dev/tree/master/public/markdown/${id}.md`;
}

type Props = {
  post: PostMetadata;
};

export default function PostHeader(props: Props) {
  const { post } = props;

  return (
    <>
      <div className={styles("metadata")}>
        <Link href="/posts">Posts</Link>&nbsp;-&nbsp;
        {formatDate(post.date)} -&nbsp;
        <IconLink
          alt="view the markdown source for this post"
          icon="markdown"
          href={getMarkdownLink(post.filename)}
        />
        &nbsp;
        {post.github && (
          <IconLink
            alt="view source code for this project on github"
            icon="github"
            href={post.github}
          />
        )}
      </div>
      <h1>{post.title}</h1>
    </>
  );
}
