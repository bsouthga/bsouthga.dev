import compact from "lib/compact";
import { Maybe } from "lib/types";

export default function classNames(...names: Maybe<string>[]): string {
  return compact(names).join(" ");
}
