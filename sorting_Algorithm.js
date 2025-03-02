// swapped is for optimization, if the array is already sorted then no need to loop through the array again.
// Bubble sort
function bubble_sort(arr){
    let n = arr.length;
    for(let i = 0; i < n; i++){
        // keeping track of swapping
        let swapped = false;
        for(let j = 0; j < n-i-1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            } else{
                continue;
            }
            if (!swapped){
                break;
            }
        }
    }
    return arr;
}

// Selection sort
// The selection sort algorithm works by repeatedly 
// finding the minimum element from the unsorted part of the array and swapping it with the first element of the unsorted part.
// The selection sort algorithm has a time complexity of O(n^2) in the worst case, where n is the number of elements in the array.
function selection_sort(arr){
    let n = arr.length;
    for(let i = 0; i < n; i++){
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min !== i){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
// insertion algorithm
// The insertion sort algorithm works by building a sorted array one element at a time.
// The insertion sort algorithm has a time complexity of O(n^2) in the worst case, where n is the number of elements in the array.
function insertion_sort(arr){
    let n = arr.length;
    for(let i = 1; i < n; i++){
        let key = arr[i];
        let j = i-1;
        // reverse the greater sign in the array to change the order of sorting
        while(j >= 0 && arr[j] > key){
            arr[j+1] = arr[j];
            j = j-1;
        }
        arr[j+1] = key;
    }
    return arr;
}
// merge sort
// The merge sort algorithm works by dividing the array into two halves, sorting each half, and then merging the two sorted halves.
// The merge sort algorithm has a time complexity of O(n log n) in the worst case, where n is the number of elements in the array.
function merge_sort(arr){
    if(arr.length<=1)
        return arr
    let mid = Math.floor(arr.length/2)
    //recursively  splitting the array into two halves
    let left = merge_sort(arr.slice(0,mid))
    let right = merge_sort(arr.slice(mid))
    return merge(left,right)
}
function merge(arr1,arr2){
    let sorted_arr =[]
    let i = 0
    let j = 0
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            sorted_arr.push(arr1[i])
            i++
        }else{
            sorted_arr.push(arr2[j])
            j++
        }
    }
    // append the remaining elements of the array
    while(i < arr1.length){
        sorted_arr.push(arr1[i])
        i++
    }
    while(j < arr2.length){
        sorted_arr.push(arr2[j])
        j++
    }
    return sorted_arr

}

// quick sort
// The quick sort algorithm works by selecting a pivot element from the array, partitioning the array into two subarrays based on the pivot, and then recursively sorting the subarrays.
// The quick sort algorithm has a time complexity of O(n log n) in the average case and O(n^2) in the worst case, where n is the number of elements in the array.
function quick_sort(arr){
    if(arr.length <= 1)
        return arr
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quick_sort(left),pivot,...quick_sort(right)]
}

// heap sort
// The heap sort algorithm works by building a max heap from the array, repeatedly extracting the maximum element from the heap, and then rebuilding the heap.
// The heap sort algorithm has a time complexity of O(n log n) in the worst case, where n is the number of elements in the array.
function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    if (left < n && arr[left] > arr[largest])
        largest = left;
    if (right < n && arr[right] > arr[largest])
        largest = right;
    if (largest !== i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        heapify(arr, n, largest);
    }
}
function heap_sort(arr) {
    let n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(arr, n, i);
    for (let i = n - 1; i > 0; i--) {
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        heapify(arr, i, 0);
    }
    return arr;
}


let message = "Unsorted array is:";
console.log(message);
const arr = [8,4,5,7,1,3,6,2];
console.log(arr);
const sortedArr = bubble_sort(arr);
const sortedArr2 = selection_sort(arr);
const sortedArr3 = insertion_sort(arr);
console.log("Sorted array is using bubble sort:");
console.log(sortedArr);
console.log("Sorted array is using selection sort:");
console.log(sortedArr2);
console.log("Sorted array is using insertion sort:");
console.log(sortedArr3);
