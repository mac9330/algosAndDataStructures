// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let sorted = false
    while (!sorted) {
        sorted = true
        let i = 0
        while (i < arr.length - 1) {
            if (arr[i] > arr[i+1]) {
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                sorted = false
                i = 0;
            }
            i++;
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}

function mergeSort(arr) {
    if (arr.length < 2) return arr 
    let left = mergeSort(arr.slice(0, arr.length/2))
    let right = mergeSort(arr.slice(arr.length/2, arr.length))

    return merge(left, right)
}

function merge(left, right) {
    const result = [];
    while(left.length && right.length) {
        if (left[0] < right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    result.push(...left, ...right)
    return result;
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
