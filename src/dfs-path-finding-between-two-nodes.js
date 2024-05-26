// 1
// | \
// 2 - 3
//     |
//     4

const edgeList = [
  [1, 2],
  [1, 3],
  [2, 3],
  [3, 4]
];

function buildAdjacencyList(n, edges) {
  const graph = Array.from({ length: n + 1 }, () => []);

  edges.forEach(([u, v]) => {
    graph[u].push(v);
    graph[v].push(u);
  });

  return graph;
}

function dfs(graph, current, destination, visited) {
  if (current === destination) return true;

  visited.add(current);
  for (let neighbor of graph[current]) {
    if (!visited.has(neighbor) && dfs(graph, neighbor, destination, visited)) {
      return true;
    }
  }
  return false;
}

function hasValidPath(n, edges, source, destination) {
  const graph = buildAdjacencyList(n, edges);
  const visited = new Set();
  return dfs(graph, source, destination, visited);
}

console.log(hasValidPath(5, edgeList, 1, 4)); // true
console.log(hasValidPath(5, edgeList, 1, 5)); // false
