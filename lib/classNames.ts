import compact from "lib/compact";

export default function classNames(
  ...names: (string | null | undefined)[]
): string {
  return compact(names).join(" ");
}
