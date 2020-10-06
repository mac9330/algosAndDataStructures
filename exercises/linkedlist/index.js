// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, node = null) {
        return {
            data: data, 
            next: node
        }
    }
}

class LinkedList {

    constructor() {
        this.head = null
    }

    insertFirst(data) {
        const head = new Node(data, this.head)
        this.head = head
        return head;
    }

    getFirst() {
        return this.head
    }

    size() {
        let length = 0;
        let node = this.head;
        while (node) {
            node = node.next;
            length++;
        }
        return length;
    }

    getLast() {
        let node = this.head;
        while (node.next) {
            if (node.next) node = node.next;
        }
        return node;
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        this.head = this.head.next;
    }
// 0
// 1
    removeLast() {
        if (!this.head) return;
        if (!this.head.next) return this.head = null;
        let node = this.head;
        for (let i = 0; i < this.size()-1; i++) {
                if (i === this.size()-2) return node.next = null;
                node = node.next;
        }

    }

    insertLast(ele) {
        if (!this.head) return this.head = new Node(ele);
        let node = this.head;
        while(node.next) {
            node = node.next;
        }
        node.next = new Node(ele)
    }

    getAt(idx) {
      if (!this.head) return null;
      let node = this.head;
      let i = 0;
        while (node) {
            if (idx === i) return node ? node : null;
            node = node.next;
            i++;
        }
        return null;
    }

    removeAt(idx) {
        if (!this.head) return;
        if (idx === 0) return this.removeFirst();
        if (this.size() > idx) return this.getAt(idx-1).next = this.getAt(idx+1)
    }

    insertAt(data, idx) {
        if (!this.head) return this.head = new Node(data);
        if (idx === 0) return this.insertFirst(data);
        if (this.size() <= idx) return this.insertLast(data);

        const next = this.getAt(idx); 
        return this.getAt(idx-1).next = new Node(data, next);
    }

    forEach(func) {
        if (!this.head) return;
        let node = this.head;
        let i = 0
        while (node) {
            func(node, i)
            node = node.next;
            i++
        }
    }

    *[Symbol.iterator]() {
        let node = this.head;
        while(node) {
            yield node;
            node = node.next;
        }
    }
} 

module.exports = { Node, LinkedList };
