"use client";

import { CodeProps } from "react-markdown/lib/ast-to-react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import classNames from "lib/classNames";
import styles from "./PostSyntaxHighlighter.module.css";

const LazySyntaxHighlighter = dynamic(() => import("./LazySyntaxHighlighter"), {
  suspense: true,
});

export default function PostSyntaxHighlighter(
  props: Omit<CodeProps, "node" | "inline">
) {
  const { className, children, ...rest } = props;
  const match = /language-(\w+)/.exec(className || "");

  const basic = (
    <code className={className} {...rest}>
      {children}
    </code>
  );

  if (match == null) {
    return basic;
  }

  return (
    <Suspense fallback={basic}>
      <LazySyntaxHighlighter
        language={match[1]}
        className={classNames(className, styles.container)}
        {...rest}
      >
        {children}
      </LazySyntaxHighlighter>
    </Suspense>
  );
}
