const OPTIONS = { year: "numeric", month: "long", day: "numeric" };

export default function formatDate(datestr: string) {
  const date = new Date(datestr);
  return date.toLocaleDateString(undefined, OPTIONS);
}
