// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // push to head
    addHead(node){
        if(this.head == null){
            this.head = node;
            this.tail = node;
        }else{
            var temp = this.head;
            temp.prev = node;
            this.head =node;
            node.next = temp;

        }
        node.prev = null;
        this.length++;
    }

    // pop from tail
    removeTail(){
        if(this.head == null) return;
        var temp= this.tail;
        this.tail = temp.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;

    }

    // add before target if exists
    prepend(target, node){
        var runner = this.head;
        while(runner.data != target){
            runner = runner.next;
            if(runner == null) return;
        }
        current.prev.next = node;
        node.prev = runner.prev;
        runner.prev = node;
        node.next = runner;
        this.length++;
    }

    // boolean, is empty
    isEmpty(){
        if(this.head == null) return true;
        return false;
    }

    // return length
    size(){
        return this.length;
    }


    // return true or false if val exists within the DLL
    exists(val){
        var runner = this.head;
        while(runner != null){
            if (runner.data == val){
                return true;
            }
            runner= runner.next;
        }
        return false;
    }

    // remove and return node with data === val if it exists
    // assume every val is unique or simply just remove and return
    // the first match that you find.
    removeVal(val){
        var runner = this.head;
        while(runner != null){
            //If found value is the head
            if(this.head.data == val){
                var node = this.head;
                this.head.next.prev = null;
                this.head = runner.next;
                return node;
            }
            else if(this.tail.data == val){
                var node = this.tail
                node.prev.next= null;
                this.tail = this.tail.prev;
                return node;
            }
            else if(runner.data == val){
                runner.prev.next = runner.next;
                runner.next.prev = runner.prev;
                runner.next = null;
                runner.prev = null;
                return runner;
            }
            runner = runner.next;
        }
    }

    // return true of false if the current DLL is a palindrome
    checkPalindrome(){
        var runnerHead =this.head;
        var runnerTail = this.tail;
        for(var i=0;i<this.length/2;i++){
            if(runnerHead.data != runnerTail.data){
                return false;
            }
            runnerHead=runnerHead.next;
            runnerTail= runnerTail.prev;
        }
        return true;
    }

    // == Challenge Question ==

    // implement recursive prepend that starts from this.head or current
    recursivePrepend(target, node, current){
        if(current == null){
            return;
        }
        if(current.data == target){
          console.log("Inside: " + current.data);
          if(current.prev != null){
            current.prev.next = node;
          }
          if(current.prev == null){
            this.head = node;
          }
            node.prev = current.prev;
            current.prev = node;
            node.next = current;
            console.log("Printing nodes");
            this.printNodes();
            this.length++;
            return;
        }
        current = current.next;
        this.recursivePrepend(target, node, current);
    }

    //Print all nodes
    printNodes(){
        var runner = this.head;
        while(runner != null){
            console.log(runner.data);
            runner = runner.next;
        }
    }



    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node){
        if(this.isEmpty){
            this.addHead(node);
        }else{
            this.tail.next= node;
            node.prev = this.tail;
            node.next = null;
            this.tail= node;
            length++;
        }
    }

    // add after target if exists
    append(target, node){
        var runner = this.head;
        while(runner.data != target){
            runner = runner.next;
            if(runner == null) return;
        }
        if(runner.next != null){
            runner.next.prev = node;
        }
        node.next = runner.next;
        runner.next = node;
        node.prev = runner;
        this.length++;
    }

    // pop from head
    removeHead(){
        var temp = this.head;
        this.head.next.prev = null;
        this.head = this.head.next;
        length--;
        return temp;
    }
}

// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

var dll = new DLList();
dll.addHead(new DLLNode(1));
dll.addHead(new DLLNode(2));
dll.addHead(new DLLNode(3));

dll.printNodes();

dll.recursivePrepend(99, new DLLNode(10), dll.head);

dll.printNodes();