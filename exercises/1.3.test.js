import { describe, it, expect } from "vitest";

function sum_of_squares(x, y, z) {
  return x < y && x < z
    ? y * y + z * z
    : y < x && y < z
    ? x * x + z * z
    : x * x + y * y;
}

describe("1.3", () => {
  it("works if smallest number is first arg", () => {
    expect(sum_of_squares(1, 2, 3)).toBe(13);
  });
  it("works if smallest number is second arg", () => {
    expect(sum_of_squares(3, 1, 2)).toBe(13);
  });
  it("works if smallest number is third arg", () => {
    expect(sum_of_squares(3, 2, 1)).toBe(13);
  });
});
