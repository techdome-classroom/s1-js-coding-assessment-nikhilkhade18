const decodeTheRing = function (message, pattern) {
  const m = message.length;
  const p = pattern.length;

  // DP table initialization
  const dp = Array(m + 1)
    .fill(false)
    .map(() => Array(p + 1).fill(false));

  // Empty pattern matches empty message
  dp[0][0] = true;

  // Handle patterns with leading '*'
  for (let j = 1; j <= p; j++) {
    if (pattern[j - 1] === "*") {
      dp[0][j] = dp[0][j - 1]; // '*' can match an empty sequence
    }
  }

  // Fill the DP table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= p; j++) {
      if (pattern[j - 1] === "?" || pattern[j - 1] === message[i - 1]) {
        // '?' matches any single character or characters match exactly
        dp[i][j] = dp[i - 1][j - 1];
      } else if (pattern[j - 1] === "*") {
        // '*' can match an empty sequence (dp[i][j - 1]) or one/more characters (dp[i - 1][j])
        dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
      }
    }
  }

  // The answer is whether the full message matches the full pattern
  return dp[m][p];
};

module.exports = decodeTheRing;
