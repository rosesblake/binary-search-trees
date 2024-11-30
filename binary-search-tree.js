class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


//since i didnt get an example, i tried this to the best of my ability and studied the inner workings via chat gpt.
//whoever can come in and just figure this out without ever having seen it is a wizard. Wish the school gave a walkthrough or examples prior.


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    //create new node for val
    const newNode = new Node(val)

    //if tree is empty, set root to be this new node
    if(this.root === null){
      this.root = newNode;
      return this;
    }

    let current = this.root

    while(true) {
      if (val === current.val) return this;

      if(val < current.val){
        if(current.left === null){
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if(current.right === null){
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    // if the tree is empty, set the root
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    //find the position and insert the node
    if (current === null) {
      return new Node(val);
    }
    if (val < current.val) {
      // Insert in the left subtree
      current.left = this.insertRecursively(val, current.left);
    } else {
      // Insert in the right subtree
      current.right = this.insertRecursively(val, current.right);
    }
  
    return current;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while(current){
      if(current.val === val) return current;
      current = val < current.val ? current.left : current.right;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    // if the current node's value matches, return the node
    if (current.val === val) return current;
  
    // Recur to the left if the value is smaller, otherwise to the right
    if (val < current.val) {
      return this.findRecursively(val, current.left);
    } else {
      return this.findRecursively(val, current.right);
    }
  }
  

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(current = this.root, visited = []) {
    if (current === null) return visited;

    visited.push(current.val);

    this.dfsPreOrder(current.left, visited);

    this.dfsPreOrder(current.right, visited);

    return visited
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(current = this.root, visited = []) {
    if (current === null) return visited;
  
    this.dfsInOrder(current.left, visited);
  
    visited.push(current.val);
  
    this.dfsInOrder(current.right, visited);
  
    return visited;
  }
  

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(current = this.root, visited = []) {
    if (current === null) return visited;
  
    this.dfsPostOrder(current.left, visited);
    
    this.dfsPostOrder(current.right, visited);

    visited.push(current.val);
  
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    if (this.root === null) return [];

    let queue = [this.root];
    let visited = [];

    while (queue.length > 0) {
      let current = queue.shift();

      visited.push(current.val);

      if(current.left) queue.push(current.left)
      if(current.right) queue.push(current.right)
    }

    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}


const tree = new BinarySearchTree()
tree.insert(11)
tree.insert(10)
tree.insert(12)
tree.insert(18)
tree.insert(1)
tree.insert(17)
tree.insert(59)
console.log(tree.bfs())

// module.exports = BinarySearchTree;
