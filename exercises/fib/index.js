// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if (n === 1) return 1;
    if (n === 2) return 1;

    return fib(n-1) + fib(n-2)
}

// function fib(n) {
//     if (n === 1) return 1;
//     if (n === 2) return 1;

//     const results = [1, 1];

//     for (i = 2; i < n; i++) {
//         results.push(results[results.length - 1] + results[results.length - 2])
//     }
//     return results[results.length - 1]
// }

module.exports = fib;
