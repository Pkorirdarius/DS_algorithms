import numpy as np

import matplotlib.pyplot as plt

# Define the range for n
n = np.linspace(1, 100, 400)

# Define the different Big O notations
O_1 = np.ones_like(n)
O_log_n = np.log(n)
O_n = n
O_n_log_n = n * np.log(n)
O_n_squared = n ** 2
O_2_n = 2 ** n

# Plot the different Big O notations
plt.figure(figsize=(10, 6))
plt.plot(n, O_1, label='O(1)')
plt.plot(n, O_log_n, label='O(log n)')
plt.plot(n, O_n, label='O(n)')
plt.plot(n, O_n_log_n, label='O(n log n)')
plt.plot(n, O_n_squared, label='O(n^2)')
plt.plot(n, O_2_n, label='O(2^n)', linestyle='--')

# Add labels and legend
plt.ylim(0, 1000)  # Limit y-axis for better visualization
plt.xlabel('n')
plt.ylabel('Operations')
plt.title('Big O Notation')
plt.legend()
plt.grid(True)

# Show the plot
plt.show()