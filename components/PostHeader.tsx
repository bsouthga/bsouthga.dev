import { PostMetadata } from "lib/posts";
import IconLink from "components/IconLink";
import formatDate from "lib/formatDate";
import styles from "components/PostHeader.module.css";

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
      <h1>{post.title}</h1>
      <div className={styles.metadata}>
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
    </>
  );
}
