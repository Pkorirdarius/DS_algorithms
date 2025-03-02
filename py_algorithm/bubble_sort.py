# Bubble sort
# Time complexity: O(n^2) in worst case, O(n) in best case
# Space complexity: O(1)
def bubble_sort(arr):
    size = len(arr)
    for i in range(size):
        swapped=False
        for j in range(size-i-1):
            # sorting in descending order
            if arr[j]<arr[j+1]:
                arr[j],arr[j+1]=arr[j+1],arr[j]
                swapped=True
        if not swapped:
            break
    return arr


arr = [64, 34, 25, 12, 22, 11, 90]
print(bubble_sort(arr)) # 