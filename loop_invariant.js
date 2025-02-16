//  Implementing Insertion Sort algorithm using loop invariant concept.
// The loop invariant is property of the loop that is true before (and after) each iteration of the loop.
// Time Complexity: O(n^2)
function insertion_sort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
  
      console.log(`Iteration ${i}:`, arr);
    }
    return arr;
}
  
test_array = [12, 11, 13, 5, 6];
sorting =insertion_sort(test_array);
console.log("Sorted array:",sorting);
  