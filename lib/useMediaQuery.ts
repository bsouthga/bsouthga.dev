import { useEffect, useState } from "react";

function getMediaQueryList(query: string): MediaQueryList | null {
  if (typeof window === "undefined" || window.matchMedia == null) {
    return null;
  }

  return window.matchMedia(query);
}

function matchesMedia(query: string): boolean {
  return getMediaQueryList(query)?.matches ?? false;
}

export default function useMediaQuery(query: string): boolean {
  const [value, setValue] = useState(matchesMedia(query));

  useEffect(() => {
    const list = getMediaQueryList(query);
    const handler = () => setValue(matchesMedia(query));
    list.addEventListener("change", handler);
    return () => list.removeEventListener("change", handler);
  }, [query]);

  return value;
}
