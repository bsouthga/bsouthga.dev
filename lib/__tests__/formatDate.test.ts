import formatDate from "lib/formatDate";

describe("formatDate", () => {
  test("basic", () => {
    expect(formatDate("04/09/1990")).toEqual("April 9, 1990");
  });
});
