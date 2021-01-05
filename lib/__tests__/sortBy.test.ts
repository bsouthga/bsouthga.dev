import sortBy from "lib/sortBy";

describe("sortBy", () => {
  test("basic", () => {
    const list = [{ a: 1 }, { a: 0 }];
    const sorted = sortBy(list, (v) => v.a);
    expect(sorted[0].a).toEqual(1);
  });
});
