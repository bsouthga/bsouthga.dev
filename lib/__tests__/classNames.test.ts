import classNames from "lib/classNames";

describe("classNames", () => {
  test("basic", () => {
    expect(classNames("a", "b", "c")).toEqual("a b c");
  });

  test("with nulls", () => {
    expect(classNames("a", null, "c")).toEqual("a c");
  });

  test("empty", () => {
    expect(classNames()).toEqual("");
  });
});
