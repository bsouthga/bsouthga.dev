export default function formatDate(datestr: string) {
  const date = new Date(datestr);
  return date.toLocaleDateString();
}
