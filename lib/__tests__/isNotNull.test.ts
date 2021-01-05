import isNotNull from "lib/isNotNull";

describe("isNotNull", () => {
  test("null", () => expect(isNotNull(null)).toEqual(false));
  test("undefined", () => expect(isNotNull(null)).toEqual(false));
  test("false", () => expect(isNotNull(false)).toEqual(true));
  test("0", () => expect(isNotNull(0)).toEqual(true));
});
