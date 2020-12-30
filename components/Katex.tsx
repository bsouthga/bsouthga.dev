import { useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";

const MACROS = {
  "\\tck": "^{\\prime}",
  "\\qaq": "\\quad\\Rightarrow\\quad",
  "\\crl": "\\left\\{ #1 \\right\\}",
};

type Props = {
  code: string;
  displayMode?: boolean;
};

export default function Katex(props: Props): JSX.Element {
  const { code, displayMode = false } = props;

  const html = useMemo(() => {
    return {
      __html: katex.renderToString(code, {
        displayMode,
        macros: MACROS,
        output: "html",
      }),
    };
  }, [code, displayMode]);

  return <span dangerouslySetInnerHTML={html} />;
}
