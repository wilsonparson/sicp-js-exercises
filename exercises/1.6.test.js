import { describe, test, expect } from "vitest";

/** Helper functions (not important) -----------------------------------------*/

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

function is_good_enough(guess, x) {
  return Math.abs(guess * guess - x) < 0.001;
}

/** --------------------------------------------------------------------------*/

function sqrt(x) {
  /** Uses inline ternary. */
  function sqrt_iter(guess, x) {
    return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
  }

  return sqrt_iter(1, x);
}

function sqrt_2(x) {
  /** Calls `conditional` function instead of inline ternary. */
  function sqrt_iter(guess, x) {
    return conditional(
      is_good_enough(guess, x),
      guess,
      sqrt_iter(improve(guess, x), x)
    );
  }
  function conditional(predicate, then_clause, else_clause) {
    return predicate ? then_clause : else_clause;
  }

  return sqrt_iter(1, x);
}

describe("1.6", () => {
  test("Approach with inline ternary doesn't cause stack overflow", () => {
    expect(sqrt(9)).toBeCloseTo(3.0);
  });
});

/**
 * The testing software doesn't recognize this stack overflow as a test
 * failure, so I have to call it in isolation. Uncomment the code below to see
 * that the approach using the `conditional` function results in a stack
 * overflow:
 */

// sqrt_2(9);

/**
 * When Alyssa attempts to use her `conditional` function in this
 * scenario, it will cause a stack overflow. Since JavaScript uses applicative
 * order to evaluate function applications, the three arguments that Alyssa
 * passes to `conditional` will be evaluated before they are needed.
 * This means that the third argument, a call to a recursive function, will be
 * evaluated immediately upon each recursive step, which will prevent a
 * terminating condition from ever being considered.
 *
 * In the first example, which uses a ternary, the call to the recursive
 * function is only made if the guess isn't good enough.
 */
