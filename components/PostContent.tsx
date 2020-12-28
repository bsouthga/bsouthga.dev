import ReactMarkdown from "react-markdown";
import { PostMetadata } from "lib/posts";
import Katex from "components/Katex";
import math from "remark-math";
import Image from "next/image";
import ImageWrapper from "components/ImageWrapper";

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
