import { Maybe } from "lib/types";
import isNotNull from "lib/isNotNull";

export default function compact<T>(values: Maybe<T>[]): T[] {
  return values.filter(isNotNull);
}
