//     A
//    / \
//   B   C
//  /     \
// D       E

// A graph is defined as an adjacency list here
const graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "E"],
  D: ["B"],
  E: ["C"]
};

function dfs(graph, node, visited = new Set()) {
  console.log(node);

  visited.add(node);
  const neighbors = graph[node];
  for (let next of neighbors) {
    if (!visited.has(next)) {
      dfs(graph, next, visited);
    }
  }
}

dfs(graph, "A"); // A B D C E
