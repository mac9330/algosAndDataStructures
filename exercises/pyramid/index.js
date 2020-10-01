// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # ' n = 2 col = 0..2 row = 0 '0,0- 1,0+ 2,0-' n = 2 col === 1 2 * row + col
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let row = 0; row < n; row++) {
        let str ="";
        for (let col = 0; col < 2*n-1; col++) {
            const mid = Math.floor((2 * n - 1) / 2);
            if (col >= mid - row && col <= mid + row) {
                str += "#"
            }
            else {
                str += " "
            }
        }
        console.log(str)
    }
}

module.exports = pyramid;
