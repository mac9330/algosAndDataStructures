// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(strA, strB) {
    if (strA.length !== strB.length) return false;
    const objA = objectify(strA);
    const objB = objectify(strB);

    for (let key in objA) {
        if (objA[key] !== objB[key]) return false
    }
    return true;
}

function objectify(str) {
    const obj = {};
    for (let char of str) {
        obj[char] = obj[char] + 1 || 1;
    }

    return obj;
}
module.exports = anagrams;
