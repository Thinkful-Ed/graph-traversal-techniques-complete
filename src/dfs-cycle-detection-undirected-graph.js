// Cyclic graph example:
//     1
//    / \
//   2---3
//  / \   \
// 4---5   6

const cyclicGraph = [
  [], // Index 0 is unused to align the indices with vertex numbers
  [2, 3], // Vertex 1 connects to Vertex 2 and Vertex 3
  [1, 3, 4, 5], // Vertex 2 connects to Vertex 1, 3, 4, and 5
  [1, 2, 6], // Vertex 3 connects to Vertex 1, 2, and 6
  [2, 5], // Vertex 4 connects to Vertex 2 and Vertex 5
  [2, 4], // Vertex 5 connects to Vertex 2 and Vertex 4
  [3] // Vertex 6 connects to Vertex 3
];

// Acyclic graph example:
//   1
//  / \
// 2   3
//  \   \
//   4   5
//    \   \
//     6   7

const acyclicGraph = [
  [], // Index 0 is unused to align the indices with vertex numbers
  [2, 3], // Vertex 1 connects to Vertex 2 and Vertex 3
  [1, 4], // Vertex 2 connects to Vertex 1 and 4
  [1, 5], // Vertex 3 connects to Vertex 1 and 5
  [2, 6], // Vertex 4 connects to Vertex 2 and 6
  [3, 7], // Vertex 5 connects to Vertex 3 and 7
  [4], // Vertex 6 connects to Vertex 4
  [5] // Vertex 7 connects to Vertex 5
];

function dfs(graph, node, parent, visited) {
  visited.add(node);

  for (let neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      if (dfs(graph, neighbor, node, visited)) {
        return true;
      }
    } else if (neighbor !== parent) {
      return true;
    }
  }
  return false;
}

function hasCycle(graph, startNode) {
  const visited = new Set();
  return dfs(graph, startNode, null, visited);
}

console.log(hasCycle(cyclicGraph, 1)); // Logs true
console.log(hasCycle(acyclicGraph, 1)); // Logs false
