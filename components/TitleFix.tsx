"use client";

import { useEffect } from "react";

export type Props = Readonly<{}>;

export default function TitleFix(props: Props) {
  useEffect(() => {
    // hack until https://github.com/vercel/next.js/issues/42342 is fixed
    const path = window.location.pathname;
    document.title =
      "Ben Southgate: " +
      (() => {
        if (path === "/") {
          return "Home";
        }
        return path;
      })();
  }, []);
  return null;
}
