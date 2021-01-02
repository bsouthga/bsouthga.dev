import useMediaQuery from "./useMediaQuery";

export default function usePrefersDarkMode() {
  return useMediaQuery("(prefers-color-scheme: dark)");
}
