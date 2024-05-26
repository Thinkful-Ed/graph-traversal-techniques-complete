// Graph represented as an array of arrays with 1-based indexing
//   1
//  / \
// 2   3
//  \   \
//   4   5
//        \
//         6
//        / \
//       7   8
const graph = [
  [], // Index 0 is empty because we start from 1
  [2, 3], // Node 1 is connected to Node 2 and Node 3
  [1, 4], // Node 2 is connected to Node 1 and Node 4
  [1, 5], // Node 3 is connected to Node 1 and Node 5
  [2], // Node 4 is connected to Node 2
  [3, 6], // Node 5 is connected to Node 3 and Node 6
  [5, 7, 8], // Node 6 is connected to Node 5, Node 7, and Node 8
  [6], // Node 7 is connected to Node 6
  [6] // Node 8 is connected to Node 6
];

function bfs(start) {
  let visited = new Set();
  let queue = [start];

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node);
    visited.add(node);
    const neighbors = graph[node];

    for (let next of neighbors) {
      if (!visited.has(next)) {
        queue.push(next);
        visited.add(next);
      }
    }
  }
}

bfs(1);
// Logs:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
