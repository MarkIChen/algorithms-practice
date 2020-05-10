/* jshint esversion:6*/

class Node {
  constructor(value, leftNode= null, rightNode = null) {
    this.value = value;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}

class BFS {
  constructor(root) {
    this.root = root
  }
  search() {
    var queue = []
    var visited = []
    queue.push(root)

    while(queue.length != 0){
      let firstElement = queue[0];
      visited.push(firstElement.value);
      if(firstElement.leftNode != null) {
        queue.push(firstElement.leftNode);
      }
      if(firstElement.rightNode != null) {
        queue.push(firstElement.rightNode);
      }
      queue.shift();
    }
    console.log(visited);
  }
}

// buid the tree
let root = new Node(10)
root.leftNode =  new Node(6, new Node(3), new Node(8));
root.rightNode = new Node(15, null, new Node(20));

let BFSTree = new BFS(root);
BFSTree.search();
