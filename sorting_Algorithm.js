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
const arr = [8,4,5,7,1,3,6,2];
const sortedArr = bubble_sort(arr);
console.log(sortedArr);


// Selection sort
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