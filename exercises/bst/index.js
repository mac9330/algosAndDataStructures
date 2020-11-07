// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    // recursive solution
    insert(data, node=this) {
        if (data < node.data) {
            if (node.left) {
                this.insert(data, node.left)
            } else {
                return node.left = new Node(data);
            }
        } else if (data > node.data) {
            if (node.right) {
                this.insert(data, node.right)
            } else {
                return node.right = new Node(data);
            }
        }
    }
    // iterative solution
    // insert(data) {
    //     let node = this;
    //     while (node) {
    //         if (data < node.data) {
    //             // node.left ? node = node.left : node.left = new Node(data); node = false;
    //             if (node.left) {
    //                 node = node.left; 
    //             } else {
    //                 node.left = new Node(data)
    //                 node = false;
    //             }
    //         } else if (data > node.data) {
    //             if (node.right) {
    //                 node = node.right;
    //             } else {
    //                 node.right = new Node(data); 
    //                 node = false
    //             }
    //         }
    //     }
    // }


    //recusive solution
    contains(data) {
        if (data === this.data) {
            return this;
        }
        if (data < this.data && this.left) {
            return this.left.contains(data);
        } else if (data > this.data && this.right) {
            return this.right.contains(data); 
        }
        return null;
    }

    // iterative solution
    // contains(data) {
    //     let node = this;
    //     while(node) {
    //         if (data < node.data) {
    //             node = node.left;
    //         } else if (data > node.data) {
    //             node = node.right;
    //         } else {
    //             return node;
    //         }
    //     }
    //     return null;
    // }
}

module.exports = Node;
