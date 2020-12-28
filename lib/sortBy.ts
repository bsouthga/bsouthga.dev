export default function sortBy<T>(arr: T[], valueFn: (v: T) => number): T[] {
  const values = arr.slice();

  values.sort((a, b) => {
    const aV = valueFn(a);
    const bV = valueFn(b);
    return bV - aV;
  });

  return values;
}
