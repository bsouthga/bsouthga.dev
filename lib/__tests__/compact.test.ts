import compact from "lib/compact";

describe("compact", () => {
  test("basic", () => {
    const compacted = compact([1, null, null, 2]);
    expect(compacted).not.toContain(null);
    expect(JSON.stringify(compacted)).toEqual(JSON.stringify([1, 2]));
  });
  test("with undefined", () => {
    const compacted = compact([1, null, undefined, 2]);
    expect(compacted).not.toContain(undefined);
    expect(JSON.stringify(compacted)).toEqual(JSON.stringify([1, 2]));
  });
  test("with falsey", () => {
    const compacted = compact([1, null, undefined, 0, false]);
    expect(JSON.stringify(compacted)).toEqual(JSON.stringify([1, 0, false]));
  });
});
