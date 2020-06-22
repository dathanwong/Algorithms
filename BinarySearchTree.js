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
}


var tree = new BST();
tree.insert(new BSTNode(10), tree.root);
tree.insert(new BSTNode(111), tree.root);
tree.insert(new BSTNode(3), tree.root);
tree.insert(new BSTNode(1), tree.root);
// console.log(tree);
console.log(tree.getLargestFromSubtree(tree.root));
// https://www.cs.usfca.edu/~galles/visualization/BST.html