// RECURSIVE SOLUTION
function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// Dynamic Programming = A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions
// Only works with OPTIMAL SUBSTRUCTURE & OVERLAPPING SUBPROBLEMS
// OVERLAPPING SUBPROBLEMS = A problem said to have overlapping subproblems if it can be broken down into subproblems which are reused several times
// OPTIMAL SUBSTRUCTURE = A problem is said to have optimal substructure if an optimal solution can be constructured from optimal solutions of its subproblems

// MEMOIZE SOLUTION
function fib_memo(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  var res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}

// Tabulation = Storing the result of previous result in a "table" (usually array). Usually done using iteration. Better space complexity can be achieved using tabulation

// TABULATION SOLUTION
function fib_table(n) {
  if (n <= 2) return 1;
  var fibNums = [0, 1, 1];
  for (var i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
