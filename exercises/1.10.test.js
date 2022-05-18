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
 * h(n) computes 2^(2^n)
 *
 * ^^ This isn't the right answer. I can't figure this one out.
 */
function h(n) {
  return A(2, n);
}
