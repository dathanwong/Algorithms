
class SLL {
    constructor() {
        this.head = null;
    }

    reverse(){
        var current = this.head;
        var array = [];
        while(current != null){
            array.push(current);
            current = current.next;
        }
        for(var i = array.length-1; i >= 1; i--){
            array[i].next = array[i-1];
        }
        array[0].next = null;
        this.head = array[array.length-1];
    }

    reverseOnce(){
        var current = this.head;
        var prev = null;
        var next = current.next;
        while(next != null){
            current.next = prev;
            prev = current;
            current = next;
            next = next.next;
        }
        this.head = current;
    }
    // reverse the order of a singly linked list.

    // if the order is head -> 1 -> 2 -> 3 -> null
    // the result will be head -> 3 -> 2 -> 1 -> null

    // first solve this any way that you can, possibly using
    // a different data structure as storage

    // once you have a working solution, how could you refactor
    // your code to only traverse the list once?


    nthToLast(n){
        var current = this.head;
        var array = [];
        while(current != null){
            array.push(current);
            current = current.next;
        }
        return array[array.length-1-n];
    }
    //traverse sll till end,
    //set a pointer =length-1-n
    //return pointer val

    // return the nth to the last node. assume you do not have a count() method
    // first get a working solution

    // assume n is within range of the list

    // once you solve it, how could you refactor your code to only
    // traverse the list one time?





    //iterate the linked list and print the value of every node
    display(){
        var runner = this.head;
        while (runner !== null) {
            console.log(runner.data);
            runner = runner.next;
        }
    }

    //if data is contained within the current list, remove it.
    //consider edge cases of head node, last node, and middle nodes
    delete(data) {
        var runner = this.head;
        var prev = null;

        if (runner !== null && runner.data == data) {
            this.head = runner.next;
            return;
        }

        while (runner && runner.data !== data) {
            prev = runner;
            runner = runner.next;
        }

        if (runner === null) {
            return;
        }
        //runner is now our node to be deleted
        prev.next = runner.next;
    }

    addToFront(node){
        if(this.isEmpty()){
            this.head = node;
            return;
        };

        node.next = this.head;
        this.head = node;
        return;
    }

    isEmpty(){
        if(this.head){
            return false;
        }
        return true;
    }

    addToBack(node){
        // create a runner at the head
        let runner = this.head;

        // check if the runner is null, meaning our list is headless
        if(runner === null){
            this.head = node;
            return
        }

        // "10" == 10 yes
        // "10" === 10 no

        // start while looping
        while(runner){
            // check if the next node is null
            if(runner.next === null){
                // if so, add here and return
                runner.next = node;
                return
            }
            // if not, advance runner
            runner = runner.next;
        }
    }

    contains(value){
        // start at the head
        var runner = this.head;

        // while we have a runner
        while(runner){

            // return true if data === value
            if(runner.data === value){
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        return false;
    }

    recursiveContains(current, value){
        // if you didn't pass current, current should be the head
        if(current === undefined) current = this.head;

        // if current is null, return false up the call stack
        if(current === null) return false;

        // if runner.data === value, return true up the call stack
        if(runner.data === value) return true;

        // otherwise return the result of contains for current.next
        return this.recursiveContains(current.next, value);
    }

    // remove and return the first node from the list or null
    removeHead(){
        if(this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        return removed;
    }

    // remove head and return the value of that node or null
    removeHeadValue(){
        if(this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        return removed.value;
    }

    // remove and return the last node from the list or null
    removeBack(){
        if(this.isEmpty()) return null;
        if(this.head.next === null){
            return this.removeHead();
        }
        var current = this.head.next;
        var prev = this.head;
        while(current){
            if(current.next === null){
                prev.next = null;
                return current;
            }
            prev = current;
            current = current.next;
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// var mySLL = new SLL();


// mySLL.addToFront(new Node(7));


// var myNewNode = new Node(8);
// mySLL.addToFront(myNewNode);

// var bool = mySLL.isEmpty();
// console.log(bool);