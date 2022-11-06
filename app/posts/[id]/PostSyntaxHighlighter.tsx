"use client";

import light from "react-syntax-highlighter/dist/cjs/styles/prism/one-light";
import dark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";

import usePrefersDarkMode from "lib/usePrefersDarkMode";
import SyntaxHighlighter from "react-syntax-highlighter";
import { CodeProps } from "react-markdown/lib/ast-to-react";

export default function PostSyntaxHighlighter(
  props: Omit<CodeProps, "node" | "inline">
) {
  const { className, children, ...rest } = props;
  const prefersDarkMode = usePrefersDarkMode();
  const match = /language-(\w+)/.exec(className || "");

  if (match == null) {
    return (
      <code className={className} {...rest}>
        {children}
      </code>
    );
  }

  return (
    <SyntaxHighlighter
      language={match[1]}
      style={prefersDarkMode ? dark : light}
      PreTag="div"
      {...rest}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
}
