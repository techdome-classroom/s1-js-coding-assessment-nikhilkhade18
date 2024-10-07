const getTotalIsles = function (grid) {
  if (grid === null || grid.length === 0) return 0;

  let numberOfIslands = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // Helper function to perform DFS
  const dfs = (grid, i, j) => {
    // If the cell is out of bounds or is water ('W'), return
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === "W") return;

    // Mark the current landmass as visited by setting it to 'W'
    grid[i][j] = "W";

    // Explore all four directions (up, down, left, right)
    dfs(grid, i - 1, j); // up
    dfs(grid, i + 1, j); // down
    dfs(grid, i, j - 1); // left
    dfs(grid, i, j + 1); // right
  };

  // Loop through every cell in the grid
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // When we find an unvisited land ('L'), we start a DFS
      if (grid[i][j] === "L") {
        numberOfIslands++;
        dfs(grid, i, j); // Mark all connected lands
      }
    }
  }

  return numberOfIslands;
};

module.exports = getTotalIsles;
