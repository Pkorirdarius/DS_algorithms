import sympy as sp

# Define n as a symbolic variable
n = sp.Symbol('n')

# Define the given functions with clearer ordering
functions = [
    (4 * sp.log(sp.log(n, 2), 2), "O(log log n)"), 
    (4 * sp.log(n, 2), "O(log n)"),
    ((n**(1/2)) * (sp.log(n, 2)**4), "O(n^(1/2) log^4 n)"),
    (5 * n, "O(n)"),
    (n**4, "O(n^4)"),
    ((sp.log(n, 2))**(5 * sp.log(n, 2)), "O((log n)^(5 log n))"),
    (n**(sp.log(n, 2)), "O(n^(log n))"),
    (5**n, "O(5^n)") 
]

# Define a custom order for sorting based on known growth rates
growth_order = {
    "O(log log n)": 1,
    "O(log n)": 2,
    "O(n^(1/2) log^4 n)": 3,
    "O(n)": 4,
    "O(n^4)": 5,
    "O((log n)^(5 log n))": 6,
    "O(n^(log n))": 7,
    "O(5^n)": 8
}

# Sort functions based on their asymptotic growth using the custom order
sorted_functions = sorted(functions, key=lambda x: growth_order[x[1]])

# Print sorted functions
for i, (func, label) in enumerate(sorted_functions, 1):
    print(f"{i}. {label}")