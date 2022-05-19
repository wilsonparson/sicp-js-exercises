function inc(x) {
  return x + 1;
}

function dec(x) {
  return x - 1;
}

(function first_plus() {
  /**
   * This function creates a recursive process, because it creates a chain
   * of deferred operations which all need to be kept in memory.
   */
  function plus(a, b) {
    return a === 0 ? b : inc(plus(dec(a), b));
  }

  /** Here's how each step of evaluation looks: */
  if (false) {
    plus(4, 5);
    inc(plus(dec(4), 5));
    inc(plus(3, 5));
    inc(inc(plus(dec(3), 5)));
    inc(inc(plus(2, 5)));
    inc(inc(inc(plus(dec(2), 5))));
    inc(inc(inc(plus(1, 5))));
    inc(inc(inc(inc(plus(dec(1), 5)))));
    inc(inc(inc(inc(plus(0, 5)))));
    inc(inc(inc(inc(5))));
    inc(inc(inc(6)));
    inc(inc(7));
    inc(8);
    9;
  }
})();

(function second_plus() {
  /**
   * This this functino creates iterative process, because it doesn't create
   * a chain of deferred operations. Instead, it keeps track of two state
   * variables for each iteration.
   */
  function plus(a, b) {
    return a === 0 ? b : plus(dec(a), inc(b));
  }

  /** Here's how each step of evaluation looks: */
  if (false) {
    plus(4, 5);
    plus(dec(4), inc(5));
    plus(3, 6);
    plus(dec(3), inc(6));
    plus(2, 7);
    plus(dec(2), inc(7));
    plus(1, 8);
    plus(dec(1), inc(8));
    plus(0, 9);
    9;
  }
})();
