// Linear search is used when the array is not sorted. In this algorithm, we compare the element to be searched with each element of the array one by one.
//  If the element is found then its position is returned otherwise the search continues till the end of the array.
//  If the element is not found then the function returns -1.
// Time complexity: O(n)
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
        return i;
        }
    }
    return -1;
    }
    // Example
const arr = [1, 2, 3, 4, 5];
const target = 3;
console.log(linearSearch(arr, target)); // Output: 2
console.log(linearSearch(arr, 6)); // Output: -1