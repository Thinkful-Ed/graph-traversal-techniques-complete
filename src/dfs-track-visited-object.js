// Graph represented as an array of arrays with 1-based indexing
//   1
//  / \
// 2   3
//  \   \
//   4   5
//        \
//         6
//
//       7   8
const graph = [
  [], // Index 0 is empty because we start from 1
  [2, 3], // Node 1 is connected to Node 2 and Node 3
  [1, 4], // Node 2 is connected to Node 1 and Node 4
  [1, 5], // Node 3 is connected to Node 1 and Node 5
  [2], // Node 4 is connected to Node 2
  [3, 6], // Node 5 is connected to Node 3 and Node 6
  [5], // Node 6 is connected to Node 5
  [], // Node 7 has no connections
  [] // Node 8 has no connections
];

function dfs(graph, node, visited = {}, depth = 0, path = []) {
  console.log(
    `Visiting node: ${node}, Depth: ${depth}, Path: ${path
      .concat(node)
      .join(" -> ")}`
  );

  // Mark the node as visited, and store the depth and path in the visited object
  visited[node] = { depth: depth, path: path.concat(node) };

  // Access neighbors using the node index directly (adjusted for 1-based index)
  const neighbors = graph[node];
  for (let next of neighbors) {
    if (!visited[next]) {
      dfs(graph, next, visited, depth + 1, visited[node].path);
    }
  }
}

// Invoke DFS starting from node 1
dfs(graph, 1);

// Logs:
// Visiting node: 1, Depth: 0, Path: 1
// Visiting node: 2, Depth: 1, Path: 1 -> 2
// Visiting node: 4, Depth: 2, Path: 1 -> 2 -> 4
// Visiting node: 3, Depth: 1, Path: 1 -> 3
// Visiting node: 5, Depth: 2, Path: 1 -> 3 -> 5
// Visiting node: 6, Depth: 2, Path: 1 -> 3 -> 6
// Visiting node: 7, Depth: 3, Path: 1 -> 3 -> 6 -> 7
// Visiting node: 8, Depth: 3, Path: 1 -> 3 -> 6 -> 8
