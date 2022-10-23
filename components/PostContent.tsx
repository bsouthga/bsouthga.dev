import ReactMarkdown from "react-markdown";
import { PostMetadata } from "lib/posts";
import math from "remark-math";
import Image from "next/image";
import ImageWrapper from "components/ImageWrapper";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import footnotes from "remark-footnotes";
import { useEffect, useMemo, useRef } from "react";
import { style } from "typestyle";
import rehypeKatex from "rehype-katex";
import { PluggableList } from "react-markdown/lib/react-markdown";

import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you

type ReactMarkdownProps = React.ComponentProps<typeof ReactMarkdown>;
type ComponentProps = ReactMarkdownProps["components"];

const paragraphStyle = style({
  marginBottom: "1em",
});

const footnoteStyle = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
});

const PLUGINS = [math, footnotes];

const MACROS = {
  "\\tck": "^{\\prime}",
  "\\qaq": "\\quad\\Rightarrow\\quad",
  "\\crl": "\\left\\{ #1 \\right\\}",
};

const rehypeWithOptions: typeof rehypeKatex = (options) => {
  return rehypeKatex({ ...options, macros: MACROS });
};

const REHYPE: PluggableList = [rehypeWithOptions];

type PostProps = {
  post: PostMetadata;
};

function Markdown(props: { content: string }): JSX.Element {
  const { content } = props;
  const footnoteRef = useRef<string[]>([]);

  useEffect(() => {
    footnoteRef.current = [];
  }, [content]);

  const renderers = useMemo<ComponentProps>(
    () => ({
      img: ({ alt, src }: JSX.IntrinsicElements["img"]) => (
        <ImageWrapper height={400} caption={alt}>
          <Image
            priority
            alt={alt}
            layout="fill"
            src={src ?? ""}
            objectFit="contain"
          />
        </ImageWrapper>
      ),
      paragraph: ({ children }: { children: JSX.Element }) => (
        <div className={paragraphStyle}>{children}</div>
      ),
      code({ node, inline, className, children, style: _, ...props }) {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? (
          <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        );
      },
      footnoteDefinition: ({
        children,
        identifier,
      }: {
        children: JSX.Element;
        identifier: string;
      }) => {
        const footnotes = footnoteRef.current;
        const index = footnotes.indexOf(identifier) + 1;

        return (
          <div id={identifier} className={footnoteStyle}>
            <a href={`#${identifier}`}>[{index}]</a>
            :&nbsp;
            {children}
          </div>
        );
      },
      footnoteReference: ({
        label,
        identifier,
      }: {
        label: string;
        identifier: string;
      }) => {
        const footnotes = footnoteRef.current;
        const index = footnotes.indexOf(identifier);

        let footnoteNumber: number;
        if (index === -1) {
          footnotes.push(identifier);
          footnoteNumber = footnotes.length;
        } else {
          footnoteNumber = index + 1;
        }

        return (
          <sup>
            <a href={`#${identifier}`}>[{footnoteNumber}]</a>
          </sup>
        );
      },
    }),
    []
  );

  return (
    <ReactMarkdown
      remarkPlugins={PLUGINS}
      rehypePlugins={REHYPE}
      components={renderers}
    >
      {content}
    </ReactMarkdown>
  );
}

export default function Post(props: PostProps): JSX.Element {
  const { post } = props;
  const { content } = post;
  return <Markdown content={content} />;
}
