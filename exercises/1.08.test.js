import { describe, expect, it } from "vitest";

function cbrt(x) {
  function cbrt_iter(guess, x, previous_guess = 0) {
    return is_good_enough(guess, previous_guess)
      ? guess
      : cbrt_iter(improve_cbrt_guess(guess, x), x, guess);
  }
  function is_good_enough(previous_guess, current_guess) {
    return Math.abs(previous_guess - current_guess) < 0.001;
  }
  function improve_cbrt_guess(guess, x) {
    return (x / (guess * guess) + 2 * guess) / 3;
  }

  return cbrt_iter(1, x);
}

describe("1.8", () => {
  it("calculates cube roots", () => {
    expect(cbrt(27)).toBeCloseTo(3);
  });
});
