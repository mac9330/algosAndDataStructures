// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');
// 1, 2, 3
// 3, 2, 1

// first in last out stack
// first in first out queue


class Queue {
    constructor() {
        this.stackOne = new Stack();
        this.stackTwo = new Stack();
    }

    add(ele) {
        this.stackOne.push(ele);
    }

    remove() {
        while (this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.pop());
        }

        const ele = this.stackTwo.pop();
        while (this.stackTwo.peek()) {
            this.stackOne.push(this.stackTwo.pop());
        }

        return ele;
    }

    peek() {
        while (this.stackOne.peek()) {
            this.stackTwo.push(this.stackOne.pop());
        }
        const peek = this.stackTwo.peek();
        while (this.stackTwo.peek()) {
            this.stackOne.push(this.stackTwo.pop());
        }
        return peek;
    }
}

module.exports = Queue;
