// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const matrix = [];
    let inner = [];
    array.forEach((el, idx) => {
        if ((idx + 1) % size === 0) {
            debugger
            inner.push(el);
            matrix.push(inner);
            inner = [];
        }
        else {
            inner.push(el);
        }
    });
    inner.length ? matrix.push(inner) : null;
    return matrix;
}


module.exports = chunk;
