import "../styles/globals.css";
import type { AppProps } from "next/app";
import { TYPESTYLE_TARGET } from "../lib/constants";
import { setStylesTarget } from "typestyle";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setStylesTarget(document.getElementById(TYPESTYLE_TARGET)!);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
