# 0/1 Knapsack Problem
# Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack.
# In 0/1 knapsack, a given item can be included in the knapsack only once.
# This is a dynamic programming solution to the 0/1 Knapsack problem.
# Time complexity: O(n * W)
# Space complexity: O(n * W)
# Function to solve the 0/1 Knapsack problem using dynamic programming
# This function returns the maximum value that can be put in a knapsack of capacity W
# weights: list of weights of items
# values: list of values of items
# W: maximum capacity of knapsack
# n: number of items
def knapsack(W, weights, values, n):
    # Create a 2D table to store the maximum value at each n and W
    dp = [[0 for _ in range(W + 1)] for _ in range(n + 1)]
    
    # Build the dp table in bottom-up manner
    for i in range(1, n + 1):
        for w in range(W + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w])
            else:
                dp[i][w] = dp[i - 1][w]
    
    return dp[n][W]

# Example usage
values = [60, 100, 120]  # Profits
weights = [10, 20, 30]    # Weights of items
W = 50                    # Knapsack capacity
n = len(values)

max_value = knapsack(W, weights, values, n)
print("Maximum value in Knapsack =", max_value)
# Output: Maximum value in Knapsack = 220