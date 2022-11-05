"use client";

import { TYPESTYLE_TARGET } from "lib/constants";
import React, { useEffect } from "react";
import { setStylesTarget } from "typestyle";

export type Props = Readonly<{ children: React.ReactNode }>;

export default function Providers({ children }: Props) {
  useEffect(() => {
    setStylesTarget(document.getElementById(TYPESTYLE_TARGET)!);
  }, []);
  return <>{children}</>;
}
