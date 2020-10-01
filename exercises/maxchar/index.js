// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const obj = toObject(str);
    let max = 0;
    let result = "";
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            result = key;
            debugger
        }
    }
    debugger
    return result;
}

function toObject(str) {
    const obj = {};
    for (let char of str) {
        debugger
        obj[char] = obj[char] + 1 || 1;
    }
    return obj
}

module.exports = maxChar;
