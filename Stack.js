class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack { // FILO
    constructor() {
        this.head = null;
    }

    // using only one extra stack for storage, check if this stack is sorted
    // return the stack back to it's original order when you are done
    // assume numerical inputs (integers)
    isSorted(){
        var stack2 = new Stack();
        var sorted = true;

        // ! bang operator
        while(!this.isEmpty()){
            var temp = this.pop();
            if(stack2.isEmpty() || stack2.peek().data <= temp.data){
                stack2.push(temp);
            } else {
                sorted = false;
                stack2.push(temp);
                break;
            }
        }
        while (!stack2.isEmpty()){
            this.push(stack2.pop());
        }
        return sorted;
    }

    push(newNode) {
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    pop() {
        if (this.head === null) {
            return null;
        }

        const removed = this.head;
        this.head = this.head.next;
        removed.next = null;

        return removed;
    }

    peek() {
        return this.head ? this.head.data : null;
    }

    isEmpty() {
        let isEmpty = this.head === null;
        return isEmpty;
    }
}



// enqueue(node)
// dequeue() / grab every third node and enqueue in nextQueue
// checkFront()
// isEmpty()

// because .next is just a Queue, all previous
// queue interfaces will already be accessible
// through this.nextQueue.enqueue(node) etc etc