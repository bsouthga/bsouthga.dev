import { Maybe } from "lib/types";

export default function isNotNull<T>(value: Maybe<T>): value is T {
  return value != null;
}
