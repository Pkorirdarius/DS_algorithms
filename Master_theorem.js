// The master theorem is a formula for solving recurrence relations of divide and conquer algorithms.
// The master theorem states that if a recursive algorithm divides a problem of size n into a subproblems each of size n/b and takes f(n) time to solve the problem and combine the solutions of the subproblems, then the time complexity of the algorithm can be expressed as:
// T(n) = aT(n/b) + f(n)
// where a is the number of subproblems, b is the factor by which the problem size is reduced, and f(n) is the time complexity of the algorithm.
// The master theorem provides a way to determine the time complexity of the algorithm based on the values of a, b, and f(n).
// The master theorem has three cases:
// 1. If f(n) = O(n^c) where c < log_b(a), then T(n) = O(n^log_b(a))
// 2. If f(n) = O(n^c) where c = log_b(a), then T(n) = O(n^c * log(n))
// 3. If f(n) = O(n^c) where c > log_b(a), then T(n) = O(f(n))
// In this example, we will use the master theorem to solve the recurrence relation T(n) =
// 2T(n/2) + n, which arises in the merge sort algorithm.
// The recurrence relation for the merge sort algorithm is T(n) = 2T(n/2) + n, where n is the size of the input array.
// We can apply the master theorem to this recurrence relation to determine the time complexity of the merge sort algorithm.
// In this case, a = 2, b = 2, and f(n) = n.
// We can see that f(n) = O(n^1), which is n^c where c = 1.
// Since c = 1 and log_b(a) = log_2(2) = 1, we are in case 2 of the master theorem.
// Therefore, the time complexity of the merge sort algorithm is O(n^1 * log(n)) = O(n log(n)).
// This means that the merge sort algorithm has a time complexity of O(n log(n)), which is an efficient sorting algorithm.

function mergesort(arr){
    // if the array has only one element or no element, return the array
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    //recursively  splitting the array into two halves
    let left = mergesort(arr.slice(0,mid));
    let right = mergesort(arr.slice(mid));
    return merge(left,right);
}
function merge(arr1,arr2){
    let sorted_arr =[];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            sorted_arr.push(arr1[i]);
            i++;
        }else{
            sorted_arr.push(arr2[j]);
            j++;
        }
    }
    // append the remaining elements of the array
    while(i < arr1.length){
        sorted_arr.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        sorted_arr.push(arr2[j]);
        j++;
    }
    return sorted_arr;
}
const arr = [8,4,5,7,1,3,6,2];
const sortedArr = mergesort(arr);
console.log(sortedArr);
