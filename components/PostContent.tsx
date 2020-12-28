import ReactMarkdown from "react-markdown";
import { PostMetadata } from "lib/posts";
import Katex from "components/Katex";
import math from "remark-math";
import ImageWrapper from "components/ImageWrapper";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import styles from "components/PostContent.module.css";

const SYNTAX_CUSTOM_STYLE = {
  lineHeight: "1",
  fontSize: "1.2em",
};

const SYNTAX_CODE_TAG_PROPS = {
  style: {
    lineHeight: "inherit",
    fontSize: "inherit",
  },
};

const RENDERERS = {
  inlineMath: ({ value }: { value: string }) => <Katex code={value} />,
  math: ({ value }: { value: string }) => <Katex code={value} displayMode />,
  image: ({ src }: { src: string }) => {
    return (
      <ImageWrapper>
        <img width="100%" height="auto" src={src} />
      </ImageWrapper>
    );
  },
  // override paragraphs to allow div nesting
  paragraph: ({ children }) => {
    return <div className={styles.paragraph}>{children}</div>;
  },
  code: ({ language, value }) => {
    return (
      <SyntaxHighlighter
        className={styles.code}
        customStyle={SYNTAX_CUSTOM_STYLE}
        codeTagProps={SYNTAX_CODE_TAG_PROPS}
        language={language}
        children={value}
      />
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
