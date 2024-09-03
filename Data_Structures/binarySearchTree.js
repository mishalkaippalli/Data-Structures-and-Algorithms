class Node{
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
       const newNode = new Node(value)
       if(this.isEmpty()){
        this.root = newNode
       } else {
         this.insertNode(this.root, newNode)
       }
    }
    
    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if(root.right === null){
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value){
        if(!root){
            return false
        } else {
            if(root.value === value) {
                return true
            } else if(value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root){
        if(root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    
    postOrder(root){
        if(root){
            this.inOrder(root.left)
            this.inOrder(root.right)
            console.log(root.value)
        }    
    }

    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
         if(curr.left) {
            queue.push(curr.left)
        }
        if(curr.right) {
            queue.push(curr.right)
        }
      }
    }

    min(root){
        if(!root.left){
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        } else {
            return this.max(root.right)
        }
    }

}

let bst = new BinarySearchTree()
console.log('tree is empty', bst.isEmpty())

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)


console.log(bst.search(bst.root, 10))
console.log(bst.search(bst.root, 5))
console.log(bst.search(bst.root, 15))

bst.levelOrder(bst.root)
console.log("minimum value", bst.min(bst.root))
console.log("maximum value", bst.max(bst.root))



// After inserting the values 10, 5, 15, 3, 7, the binary search tree (BST) looks like this:

// markdown
// Copy code
//         10
//        /  \
//       5    15
//      / \
//     3   7
// Step-by-Step Recursive In-Order Traversal
// You invoke bst.inOrder(bst.root). The inOrder method is called on the root node, which has the value 10.

// Here's how the recursive process works:

// Initial Call (Root = 10)

// The current root is 10.
// The method first calls this.inOrder(root.left) to traverse the left subtree of 10.
// First Recursive Call (Root = 5)

// The current root is now 5 (the left child of 10).
// The method calls this.inOrder(root.left) to traverse the left subtree of 5.
// Second Recursive Call (Root = 3)

// The current root is now 3 (the left child of 5).
// The method calls this.inOrder(root.left), but since root.left is null (there's no left child for 3), this call returns immediately.
// The value 3 is printed (console.log(root.value)).
// The method then calls this.inOrder(root.right), but since root.right is null (there's no right child for 3), this call also returns immediately.
// The function returns to the previous call (Root = 5).
// Returning to First Recursive Call (Root = 5)

// After the left subtree of 5 (which includes node 3) has been fully processed, the value 5 is printed.
// The method then calls this.inOrder(root.right) to traverse the right subtree of 5.
// Third Recursive Call (Root = 7)

// The current root is now 7 (the right child of 5).
// The method calls this.inOrder(root.left), but since root.left is null (there's no left child for 7), this call returns immediately.
// The value 7 is printed.
// The method then calls this.inOrder(root.right), but since root.right is null (there's no right child for 7), this call also returns immediately.
// The function returns to the initial call (Root = 10).
// Returning to Initial Call (Root = 10)

// After the left subtree of 10 (which includes nodes 3, 5, 7) has been fully processed, the value 10 is printed.
// The method then calls this.inOrder(root.right) to traverse the right subtree of 10.
// Fourth Recursive Call (Root = 15)

// The current root is now 15 (the right child of 10).
// The method calls this.inOrder(root.left), but since root.left is null (there's no left child for 15), this call returns immediately.
// The value 15 is printed.
// The method then calls this.inOrder(root.right), but since root.right is null (there's no right child for 15), this call also returns immediately.
// The function returns to the previous call.