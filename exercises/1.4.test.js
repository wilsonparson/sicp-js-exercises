import { describe, it, expect } from "vitest";

function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}
export function a_plus_abs_b(a, b) {
  return (b >= 0 ? plus : minus)(a, b);
}

describe("1.4", () => {
  it("works", () => {
    expect(a_plus_abs_b(1, -3)).toBe(4);
  });
});

/**
 * Since expressions can evaluate to actual functions, we can return `plus` or
 * `minus` from the ternary.
 */
