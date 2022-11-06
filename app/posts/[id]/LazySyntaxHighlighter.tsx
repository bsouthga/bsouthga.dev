"use client";

import usePrefersDarkMode from "lib/usePrefersDarkMode";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import light from "react-syntax-highlighter/dist/cjs/styles/prism/one-light";
import dark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark";
import { CodeProps } from "react-markdown/lib/ast-to-react";

export default function LazySyntaxHighlighter(
  props: Omit<CodeProps, "node" | "inline"> & { language: string }
) {
  const { language, children, ...rest } = props;
  const prefersDarkMode = usePrefersDarkMode();

  return (
    <SyntaxHighlighter
      language={language}
      style={prefersDarkMode ? dark : light}
      PreTag="div"
      {...rest}
    >
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
}
