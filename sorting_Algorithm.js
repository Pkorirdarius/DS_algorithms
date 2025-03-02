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
