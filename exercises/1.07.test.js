import { describe, expect, test } from "vitest";

/** Helper functions (not important) -----------------------------------------*/

function improve(guess, x) {
  return average(guess, x / guess);
}

function average(x, y) {
  return (x + y) / 2;
}

/** ------------------------------------------------------------------------- */

function sqrt(x) {
  function sqrt_iter(guess, x) {
    return is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x);
  }
  /** Compares square of guess to radicand. */
  function is_good_enough(guess, x) {
    return Math.abs(guess * guess - x) < 0.001;
  }
  return sqrt_iter(1, x);
}

function sqrt_2(x) {
  function sqrt_iter(guess, x, previous_guess = 0) {
    return is_good_enough(previous_guess, guess)
      ? guess
      : sqrt_iter(improve(guess, x), x, guess);
  }
  /** Compares previous guess to current guess. */
  function is_good_enough(previous_guess, current_guess) {
    return Math.abs(previous_guess - current_guess) < 0.001;
  }
  return sqrt_iter(1, x);
}

describe("1.7", () => {
  const tiny_number = 0.000000001;
  const huge_number = 999_999_999_999_999_999_999;

  test.fails(
    "Original `is_good_enough` function is inaccurate for very small numbers",
    () => {
      expect(sqrt(tiny_number)).toBeCloseTo(Math.sqrt(tiny_number));
    }
  );

  test.fails(
    "Original `is_good_enough` function causes stack overflow for very large numbers",
    () => {
      expect(sqrt(huge_number)).toBeCloseTo(Math.sqrt(huge_number));
    }
  );

  test("Updated `is_good_enough` function works for very small numbers", () => {
    expect(sqrt_2(tiny_number)).toBeCloseTo(Math.sqrt(tiny_number));
  });

  test("Updated `is_good_enough` function works for very large numbers", () => {
    expect(sqrt_2(huge_number)).toBeCloseTo(Math.sqrt(huge_number));
  });
});
