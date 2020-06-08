// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT

// think of a stack of paper

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class arrStack {
    constructor(items){
        if(!items) items = [];
        this.items = items;
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        if (this.items.length === 0){
            return true;
        }
        return false;
    }

    size() {
        return this.items.length;
    }

    print() {
        for(var item in this.items){
            console.log(item);
        }
    }
}

class slStack {
    constructor() {
        this.head = null;
    }

    push(node){
        node.next = this.head;
        this.head = node;
    }
    pop(){
        var removedNode = this.head;
        this.head = removedNode.next;
        removedNode.next = null;
        return removedNode;
    } // return a node
    // break the reference .next === null
    peek(){
        return this.head.data;
    }
    isEmpty(){
        return this.head == null;
    }
}