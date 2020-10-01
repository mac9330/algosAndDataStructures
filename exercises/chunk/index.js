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
    let nested = [];
    array.forEach((ele, i) => {
       if ((i + 1) % size === 0) {
            nested.push(ele);
            matrix.push(nested);
            nested = [];
       } else {
           nested.push(ele);
           debugger
       }
    });
    nested.length ? matrix.push(nested) : null;
    console.log(matrix)
    return matrix;
}

chunk([1,2,3], 2)


module.exports = chunk;
