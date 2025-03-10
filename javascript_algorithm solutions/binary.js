// binary search algorithm in which the array is sorted and we have to find the target element in the array
// the array is split into two parts and the target element is compared with the middle element of the array
// if the target element is greater than the middle element then the left part of the array is discarded
// if the target element is smaller than the middle element then the right part of the array is discarded
// this process is repeated until the target element is found or the left pointer is greater than the right pointer
// if the target element is found then the index of the element is returned
// if the target element is not found then -1 is returned
// Time complexity of binary search is O(log n)
// Space complexity of binary search is O(1)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
