import { describe, it, expect } from "vitest";

function p() {
  return p();
}

function test(x, y) {
  return x === 0 ? 0 : y;
}

describe("1.5", () => {
  it.fails("should cause a stack overflow", () => {
    test(0, p());
  });
});

/**
 * Applicative-order evaluation:
 * 1. The interpreter will first evaluate the arguments passed into `test`
 * 2. When the intepreter tries to evaluate `p()`, it will recurse infinitely
 *
 * Normal-order evaluation:
 * 1. The interpreter will try to delay evaluating the arguments until it needs them
 * 2. It will check if x is 0, which it is, and return 0
 */
