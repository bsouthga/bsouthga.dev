import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you

import ReactMarkdown from "react-markdown";
import { PostMetadata } from "lib/posts";
import math from "remark-math";
import Image from "next/image";
import ImageWrapper from "components/ImageWrapper";
import footnotes from "remark-footnotes";
import rehypeKatex from "rehype-katex";
import { PluggableList } from "react-markdown/lib/react-markdown";
import PostSyntaxHighlighter from "./PostSyntaxHighlighter";

import styles from "./PostContent.module.css";

import React from "react";

type ReactMarkdownProps = React.ComponentProps<typeof ReactMarkdown>;
type ComponentProps = ReactMarkdownProps["components"];

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
  blurDataURLMap?: Map<string, string>;
};

export default function Post(props: PostProps): JSX.Element {
  const { post, blurDataURLMap } = props;
  const { content } = post;

  const footnotes: string[] = [];
  function getFootnoteNumber(id: string): number {
    const index = footnotes.indexOf(id);
    if (index === -1) {
      footnotes.push(id);
      return footnotes.length;
    } else {
      return index + 1;
    }
  }

  const renderers: ComponentProps & {
    footnoteDefinition: React.ComponentType<{
      children: JSX.Element;
      identifier: string;
    }>;
    footnoteReference: React.ComponentType<{
      label: string;
      identifier: string;
    }>;
  } = {
    img: ({ alt, src }: JSX.IntrinsicElements["img"]) => (
      <ImageWrapper height={400} caption={alt}>
        <Image
          priority
          alt={alt ?? ""}
          src={src ?? ""}
          fill
          placeholder="blur"
          blurDataURL={blurDataURLMap?.get(src ?? "")}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "contain",
          }}
        />
      </ImageWrapper>
    ),
    p: ({ children }) => <div className={styles.paragraph}>{children}</div>,
    code: function Code({
      node,
      inline,
      className,
      children,
      style: _,
      ...props
    }) {
      if (inline) {
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }

      return (
        <PostSyntaxHighlighter className={className} {...props}>
          {children}
        </PostSyntaxHighlighter>
      );
    },
    footnoteDefinition: ({ children, identifier }) => {
      return (
        <div id={identifier} className={styles.footnote}>
          <a href={`#${identifier}`}>[{getFootnoteNumber(identifier)}]</a>
          :&nbsp;
          {children}
        </div>
      );
    },
    footnoteReference: ({ label, identifier }) => {
      return (
        <sup>
          <a href={`#${identifier}`}>[{getFootnoteNumber(identifier)}]</a>
        </sup>
      );
    },
  };

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
