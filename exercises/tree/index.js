// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.children = [];
        this.data = data;
    }

    add(data) {
        const node = new Node(data)
        this.children.push(node);
    }

    remove(data) {
        // this.children.pop(data);
        this.children = this.children.filter(node => (node.data !== data)) 
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        const queue = [this.root];
        let i = 0;
        while (queue[i]) {
                fn(queue[i])
                queue.push(...queue[i].children);
                i++;
        }
    }

    traverseDF(fn) {
        const stack = [this.root];
        while(stack.length) {
            const ele = stack.shift()
            fn(ele);

            stack.unshift(...ele.children)
        }
    }
}

module.exports = { Tree, Node };
