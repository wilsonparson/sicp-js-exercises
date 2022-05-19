import { describe, expect, test } from "vitest";

// prettier-ignore
function A(x, y) {
  return y === 0
		? 0
		: x === 0
		? 2 * y
		: y === 1
		? 2
		: A(x - 1, A(x, y - 1));
}

// A(1, 10);
// Don't run code, but allow it to be uncommented to see syntax highlighting
if (false) {
  A(1, 10);
  A(0, A(1, 9));
  A(0, A(0, A(1, 8)));
  A(0, A(0, A(0, A(1, 7))));
  A(0, A(0, A(0, A(0, A(1, 6)))));
  A(0, A(0, A(0, A(0, A(0, A(1, 5))))));
  A(0, A(0, A(0, A(0, A(0, A(0, A(1, 4)))))));
  A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(1, 3))))))));
  A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(1, 2)))))))));
  A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(1, 1))))))))));
  A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(0, 2)))))))));
  A(0, A(0, A(0, A(0, A(0, A(0, A(0, A(0, 2 * 2))))))));
  A(0, A(0, A(0, A(0, A(0, A(0, A(0, 2 * 2 * 2)))))));
  A(0, A(0, A(0, A(0, A(0, A(0, 2 * 2 * 2 * 2))))));
  A(0, A(0, A(0, A(0, A(0, 2 * 2 * 2 * 2 * 2)))));
  A(0, A(0, A(0, A(0, 2 * 2 * 2 * 2 * 2 * 2))));
  A(0, A(0, A(0, 2 * 2 * 2 * 2 * 2 * 2 * 2)));
  A(0, A(0, 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2));
  A(0, 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2);
  2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2; // 2^10
  1024;
}

// From this result we know that when x is 1, the result is 2^y

// A(2, 4);
if (false) {
  A(2, 4);
  A(2 - 1, A(2, 4 - 1));
  A(1, A(2, 3));
  A(1, A(2 - 1, A(2, 3 - 1)));
  A(1, A(1, A(2, 2)));
  A(1, A(1, A(2 - 1, A(2, 2 - 1))));
  A(1, A(1, A(1, A(2, 1))));
  A(1, A(1, A(1, 2)));
  A(1, A(1, A(1 - 1, A(1, 2 - 1))));
  A(1, A(1, A(0, A(1, 1))));
  A(1, A(1, A(0, 2)));
  A(1, A(1, 2 * 2));
  A(1, A(1, 4));
  A(1, A(1 - 1, A(1, 4 - 1)));
  A(1, A(0, A(1, 3)));
  A(1, A(0, A(1 - 1, A(1, 3 - 1))));
  A(1, A(0, A(0, A(1, 2))));
  A(1, A(0, A(0, A(1 - 1, A(1, 2 - 1)))));
  A(1, A(0, A(0, A(0, A(1, 1)))));
  A(1, A(0, A(0, A(0, 2))));
  A(1, A(0, A(0, 2 * 2)));
  A(1, A(0, 2 * 2 * 2));
  A(1, 2 * 2 * 2 * 2);
  A(1, 16);
  // Based on the result of A(1, 10), we now know the result of A(1, 16) is 2^16.
  // Many evaluation steps later...
  // ...
  // ...
  65536;
}

// A(3, 3);

if (false) {
  A(3, 3);
  A(3 - 1, A(3, 3 - 1));
  A(2, A(3, 2));
  A(2, A(3 - 1, A(3, 2 - 1)));
  A(2, A(2, A(3, 1)));
  A(2, A(2, 2));
  A(2, A(2 - 1, A(2, 2 - 1)));
  A(2, A(1, A(2, 1)));
  A(2, A(1, 2));
  A(2, A(1 - 1, A(1, 2 - 1)));
  A(2, A(0, A(1, 1)));
  A(2, A(0, 2));
  A(2, 2 * 2);
  A(2, 4);
  // Based on the result of A(2, 4), we know the result here is 65536.
  // Many evaluation steps later...
  // ...
  // ...
  65536;
}

/**
 * As a mathematical definition of this function, we can say that:
 *
 * f(n) computes 2n
 */
function f(n) {
  return A(0, n);
}

/**
 * As a mathematical definition of this function, we can say that:
 *
 * g(n) computes 2^n
 */
function g(n) {
  return A(1, n);
}

/**
 * As a mathematical definition of this function, we can say that:
 *
 * {I don't know the answer here}
 *
 */
function h(n) {
  return A(2, n);
}

describe("1.10", () => {
  test("A(1, 10) === 1024", () => {
    expect(A(1, 10)).toBe(1024);
  });

  test("A(2, 4) === 65536", () => {
    expect(A(2, 4)).toBe(65536);
  });

  test("A(3, 3) === 65536", () => {
    expect(A(3, 3)).toBe(65536);
  });

  test("f(n) computes 2n", () => {
    expect(f(2)).toBe(4);
    expect(f(3)).toBe(6);
  });

  test("g(n) computes 2^n", () => {
    expect(g(2)).toBe(4);
    expect(g(3)).toBe(8);
    expect(g(4)).toBe(16);
  });

  test("h(n) computes {I'm not sure}", () => {
    expect(h(0)).toBe(0);
    expect(h(1)).toBe(2);
    expect(h(2)).toBe(4);
    expect(h(3)).toBe(16);
    expect(h(4)).toBe(65536);
  });
});
