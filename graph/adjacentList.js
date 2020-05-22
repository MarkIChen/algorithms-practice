/*jshint esversion: 6*/

class Graph {
  constructor(initList = null) {
    this.adjacencyList = {};
    if (initList != null) {
      for (let item of initList) {
        this.addVertex(item);
      }
    }
  }
  addVertex(vertexName) { this.adjacencyList[vertexName] = []; }
  addEdge(vertexA, vertaxB) {
    this.adjacencyList[vertexA].push(vertaxB);
    this.adjacencyList[vertaxB].push(vertexA);
  }
  addEdgeByList(list) {
    for (let pair of list) {
      let firstItem = pair.charAt(0);
      let secondItem = pair.charAt(1);
      this.addEdge(firstItem, secondItem);
    }
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v != v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v != v1);
  }
  removeVertex(v) {
    for (let vertex of this.adjacencyList[v]) {
      this.removeEdge(v, vertex);
    }
    delete this.adjacencyList[v];
  }
  dfsRecursive(firstVertex) {
    var visited = [];
    const adjacencyList = this.adjacencyList;

    (function helper(parent) {
      visited.push(parent);
      adjacencyList[parent].forEach(neighbor => {
        if (!(visited.includes(neighbor)))
          helper(neighbor);
      });
    })(firstVertex);

    return visited;
  }
  dfsIterative(startVertex) {
    const queue = [];
    const visited = [];
    queue.push(startVertex);

    while (queue.length != 0) {
      const lastElement = queue.pop();
      visited.push(lastElement);

      this.adjacencyList[lastElement].forEach(neighbor => {
        if (!visited.includes(neighbor) && !queue.includes(neighbor))
          queue.push(neighbor);
      });
    }
    return visited;
  }
  bfs(start) {
    const queue = [start];
    const res = [];
    const visited = [];

    while (queue.length != 0) {
      const firstElement = queue.shift();
      res.push(firstElement);
      visited[firstElement] = true;

      this.adjacencyList[firstElement].forEach(neighbor => {
        if (!visited[neighbor]){
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return res;
  }
}


let graph = new Graph([ 'A', 'B', 'C', 'D', 'E', 'F' ]);
graph.addEdgeByList([ 'AB', 'BD', 'DE', 'DF', 'EF', 'AC', 'CE' ]);

console.log(graph.dfsIterative('A'));
console.log(graph.dfsRecursive('A'));
console.log(graph.bfs('A'));
