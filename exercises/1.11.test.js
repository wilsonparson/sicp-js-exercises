import { describe, expect, test } from "vitest";
/**
 * f(n) = n if n < 3
 * f(n) = f(n-1) + 2f(n - 2) + 3f(n - 3) if n >= 3
 */

function f_recursive_process() {
  // prettier-ignore
  function f(n) {
		return n < 3
			? n
			: f(n - 1) + (2 * f(n - 2)) + (3 * f(n - 3));
	}

  // Step-by-step example of evaluation
  if (false) {
    f(4);
    f(4 - 1) + 2 * f(4 - 2) + 3 * f(4 - 3);
    f(3) + 2 * f(2) + 3 * f(1);
    f(3 - 1) + 2 * f(3 - 2) + 3 * f(3 - 3) + 2 * 2 + 3 * 1;
    f(2) + 2 * f(1) + 3 * f(0) + 4 + 3;
    2 + 2 * 1 + 3 * 0 + 4 + 3;
    2 + 2 + 0 + 4 + 3;
    11;
  }

  return f;
}

function f_iterative_process() {
  // prettier-ignore
  function f() { }

  // prettier-ignore
  function f_iter() {
	}

  return f;
}

describe("1.11", () => {
  test("Recursive process", () => {
    const f = f_recursive_process();
    expect(f(4)).toBe(11);
  });

  test.skip("Iterative process", () => {
    const f = f_iterative_process();
    expect(f(4)).toBe(11);
  });
});
