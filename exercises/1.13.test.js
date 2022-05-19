import { describe, expect, test } from "vitest";

const theta = (1 + Math.sqrt(5)) / 2;
const psi = (1 - Math.sqrt(5)) / 2;

function fib_approx(n) {
  return (Math.pow(theta, n) - Math.pow(psi, n)) / Math.sqrt(5);
}

// prettier-ignore
function fib(n) {
	return n === 0
		? 0
		: n === 1
		? 1
		: fib(n - 1) + fib(n - 2);
}

describe("1.13", () => {
  test("fib_approx approximates actual fib function", () => {
    expect(fib_approx(8)).toBeCloseTo(fib(8));
  });
});
