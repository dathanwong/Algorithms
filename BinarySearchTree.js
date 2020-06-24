// Dathan, Neil, Victoria, Vardges
//Daniel, Sam, Jerry,Dathan
class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}



// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
//                                         x
// [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
//                       x
// [14, 15, 16, 17, 18]
//          x

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    };

    insert(node, tree){
        if(this.root == null){
            this.root = node;
            return;
        }
        if(node.val > tree.val){
            if (tree.right === null) {
                tree.right = node;
                return;
            }
            this.insert(node, tree.right);
        }
        if(node.val < tree.val){
            if (tree.left === null) {
                tree.left = node;
                return;
            }
            this.insert(node, tree.left);
        }
    };

    // return true / false if the value exists within the given tree
    // if no tree is given, start a this.root
    find(val, node){
        if(node == null){
            return false;
        }
        if(node.val == val){
            return true;
        }
        if(val > node.val){
            return this.find(val, node.right);
        }
        if( val < node.val){
            return this.find(val, node.left);
        }
    }

    // remove and return the smallest node of a given tree
    removeSmallest(tree){
        // if tree becomes null, return null
        if(tree === null){
            return null;
        }
        if(tree.left == null){
            var smallest = tree;
            if(tree.right != null){
                this.root = tree.right;
            }else{
                this.root = null;
            }
            smallest.left = null;
            smallest.right = null;
            return smallest;
        }
        //At second to smallest
        if(tree.left.left == null){
            var smallest = tree.left;
            tree.left = null;
            smallest.left = null;
            smallest.right = null;
            return smallest;
        }
        return this.removeSmallest(tree.left);
    }

    // remove and return the largest node of a given tree
    removeLargest(tree){
        if(tree == null){
            return null;
        }
        if(tree.right==null){
            var biggest=tree;
            if(tree.left !=null){
                this.root=tree.left;
            }else{
                this.root=null;
            }
            biggest.left=null;
            biggest.right=null;
            return biggest;
        }
        if(tree.right.right==null){
            var biggest=tree.right;
            tree.right=null;
            biggest.left=null;
            biggest.right=null;
            return biggest;
        }
        return this.removeLargest(tree.right);
    }

    getLargestFromSubtree(node){
        if(node == null){
            return null;
        }
        if(node.right === null) return node.val;
        return this.getLargestFromSubtree(node.right);
    }

    getSmallestFromSubtree(node){
          if(node == null){
              return null;
          }
          if(node.left === null) return node.val;
          return this.getSmallestFromSubtree(node.left);
      }

    printPreorder(current){
        if(current === undefined){
            current = this.root;
        }
        if(current.left == null && current.right == null){
            console.log(current.val);
            return;
        }
        if(current.val){
          console.log(current.val);
          this.printPreorder(current.left);
            this.printPreorder(current.right);
        }
    }

    printInorder(current){
        if(current === undefined){
            current = this.root;
        }
        if(current.left == null && current.right == null){
            console.log(current.val);
            return;
        }
        if(current.val){
            this.printInorder(current.left);
            console.log(current.val);
            this.printInorder(current.right);
        }
    }

   printPostorder(current){
        if(current === undefined){
            current = this.root;
        }
        if(current.left == null && current.right == null){
            console.log(current.val);
            return;
        }
        if(current.val){
            this.printPostorder(current.left);
            this.printPostorder(current.right);
            console.log(current.val);
        }
    }

    returnPreorderArray(current, array){
        if(current === undefined){
            current = this.root;
        }
        if(current.left == null && current.right == null){
            array.push(current.val);
            return;
        }
        if(current.val){
            array.push(current.val);
            this.returnPreorderArray(current.left, array);
            this.returnPreorderArray(current.right, array);
        }
        return array;
    }

    printLevelorder(current, queue){
        if(current === undefined){
            current = this.root;
        }
        if(current.left == null && current.right == null){
            console.log(current.val);
            return;
        }

        if(current.val){
            console.log(current.val);
            if(current.left != null){
                queue.enqueue(current.left);
            }
            if(current.right!=null){
                queue.enqueue(current.right);
            }
            this.printLevelorder(queue.dequeue(), queue);
            this.printLevelorder(queue.dequeue(), queue);
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue { // FIFO
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    // reverse a queue using only one stack as additional storage
    queueReverse(){
        var stack = new Stack();

        while(!this.isEmpty()){
            stack.push(this.dequeue());
        };

        while(!stack.isEmpty()){
            this.enqueue(stack.pop());
        };
    }

    compareQueues(queue){
        if(this.length !== queue.length){
            return false;
        }
        var count = 0;
        var isEqual = true;
        let len = this.length;

        while(count < len){
            const dequeue1 = this.dequeue();
            const dequeue2 = queue.dequeue();

            if(dequeue1.data !== dequeue2.data){
                isEqual = false;
            }

            this.enqueue(dequeue1);
            queue.enqueue(dequeue2);
            count++;
        }

        return isEqual;
    }

    queueIsPalindrome(){
        var isPalindrome = true;
        var stack = new Stack();
        var len = this.length;

        for(var i = 0; i < len; i++){
            var node = this.dequeue();
            stack.push(node);
            this.enqueue(node);
        }

        for(var i = 0; i < len; i++){
            var dequeued = this.dequeue();
            var popped = stack.pop();

            if(popped.data !== dequeued.data){
                isPalindrome = false;
            }

            this.enqueue(dequeued);
        }
        return isPalindrome;
    }

    enqueue(node){
        if(this.rear === null){
            this.rear = node;
            this.front = node;
            this.length++;
        }else{
            this.rear.next = node;
            this.rear = node;
            this.length++;
        }
    }
    dequeue(){
        if(this.front === null){
            this.length--;
            return null;
        };
        if(this.front === this.rear){
            this.rear = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        this.length--;
        return node;
    }
    checkFront(){
        return this.front ? this.front.data : null;
    }
    isEmpty(){
        return this.front === null;
    }
}


var tree = new BST();
tree.insert(new BSTNode(25), tree.root);
tree.insert(new BSTNode(15), tree.root);
tree.insert(new BSTNode(50), tree.root);
tree.insert(new BSTNode(10), tree.root);
tree.insert(new BSTNode(22), tree.root);
tree.insert(new BSTNode(35), tree.root);
tree.insert(new BSTNode(70), tree.root);
tree.insert(new BSTNode(4), tree.root);
tree.insert(new BSTNode(12), tree.root);
tree.insert(new BSTNode(18), tree.root);
tree.insert(new BSTNode(24), tree.root);
tree.insert(new BSTNode(31), tree.root);
tree.insert(new BSTNode(44), tree.root);
tree.insert(new BSTNode(66), tree.root);
tree.insert(new BSTNode(90), tree.root);
//tree.printPostorder();
var array = [];
//console.log(tree.returnPreorderArray(tree.root, array));
var queue = new Queue();
tree.printLevelorder(tree.root, queue);