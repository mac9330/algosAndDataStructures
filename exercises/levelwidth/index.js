// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const tree = [root, "s"];
    const result = [0];

    while (tree.length > 1) {
        if (tree[0] === "s") {
            tree.shift();
            tree.push("s");
            result.unshift(0);
        }
            if (tree[0].children) tree.push(...tree[0].children);
            tree.shift();
            result[0]++;
    }
    return result.reverse();
}

module.exports = levelWidth;
