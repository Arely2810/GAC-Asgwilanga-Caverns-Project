Depth First Search
initialize a stack (visited, array)
place node as visited (array), then place onto stack
  -> explore unvisited adjacent nodes
  -> explore the nodes dependent on 'residue'
place unvisited nodes onto stack

check node if any unvisited adjacent
  -> pop from stack

/*
function DFS (node) {
  var explored = [];
  DFS_helper(node, explored);
}

function DFS_helper (node, explored) {
  explored.push(node);
  while ( explored.length != 0 ) {
    var adjacentNodes = node.get_adjacent_nodes();
    for ( var i = 0; i < adjacentNodes.size(); i++ ) {
      if (adjacentNodes[i] != explored) {
        DFS_helper (adjacentNode[i], explored);
      }
    }
    //pick between residue
    explored.pop();
  }
}
*/




/*
function DFS (node) {
  var explored = [];
  var smallest_residue;
  DFS_helper(node, explored);
}

function DFS_helper (node, explored) {
  explored.push(node);
  //if aleady explored return

  //if residue is smaller, store, and return
  // for each adjacent node of current -> dfs_helper (node, explored)
}
*/

//visit root
// -create an array of visited nodesand smallest residue
//traverse smallest
//record smallest residue
//traverse rest of adjacency

function DFS (root) {
  let explored = [];
  var smallest_node

  return DFS_helper( root, smallest_node, explored)
}

function DFS_helper (current_node, smallest_node, explored, ) {
  explored.push(node);

  if ( current_node.residue < smallest_node.residue() ) {
    smallest_node = current_node;
  }

  for each (var adjacent in node) {
    if (adjacent != explored)
    DFS_helper(adjacent, residue, explored)
  }
  return solution_node;
}
