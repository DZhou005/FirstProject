class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
    // Initialize an empty binary search tree
    constructor() {
        this.root = null
    }

    // Insert a node into the binary search tree
        //Test the value against the root value to determine left or right path;
        //Introduce recursion to continue this process till we hit a leaf.
    insert(value, currentNode=this.root) {
        if(!currentNode) {
            let node = new TreeNode(value);

            this.root = node;

            return;
        }
        if(value >= currentNode.val){
            if(!currentNode.right) {
                let node = new TreeNode(value);
                currentNode.right = node;
            }
            else {
                this.insert(value, currentNode.right)
            }

        }
        else {
            if(!currentNode.left) {
                let node = new TreeNode(value);
                currentNode.left = node;
            }
            else {
                this.insert(value, currentNode.left)
            }
        }
    }
    // Perform a recursive search through the binary search tree
    searchRecur(val, currentNode=this.root) {
        // Your code here
    }

    // Perform an iterative search through the binary search tree
    searchIter(val) {
        // Your code here
    }
}

module.exports = {
    TreeNode,
    BST
};
