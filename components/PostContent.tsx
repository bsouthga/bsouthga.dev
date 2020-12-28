import ReactMarkdown from "react-markdown";
import { PostMetadata } from "lib/posts";
import Katex from "components/Katex";
import math from "remark-math";
import Image from "next/image";
import ImageWrapper from "components/ImageWrapper";
import style9 from "style9";

const styles = style9.create({
  paragraph: {
    marginBottom: "1em",
  },
});

const RENDERERS = {
  inlineMath: ({ value }: { value: string }) => <Katex code={value} />,
  math: ({ value }: { value: string }) => <Katex code={value} displayMode />,
  image: ({ src }: { src: string }) => {
    return (
      <ImageWrapper>
        <Image width="100%" height="auto" layout="responsive" src={src} />
      </ImageWrapper>
    );
  },
  // override paragraphs to allow div nesting
  paragraph: ({ children }) => {
    return <div className={styles("paragraph")}>{children}</div>;
  },
};

const PLUGINS = [math];

type PostProps = {
  post: PostMetadata;
};

export default function Post(props: PostProps): JSX.Element {
  const { post } = props;
  return (
    <ReactMarkdown plugins={PLUGINS} renderers={RENDERERS}>
      {post.content}
    </ReactMarkdown>
  );
}
