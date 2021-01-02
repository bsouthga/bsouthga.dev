export default function classNames(
  ...names: (string | null | undefined)[]
): string {
  return names.filter(Boolean).join(" ");
}
