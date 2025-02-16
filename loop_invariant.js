//  Implementing Insertion Sort algorithm using loop invariant concept.
// The loop invariant is property of the loop that is true before (and after) each iteration of the loop.
// Time Complexity: O(n^2)
function insertionSort(arrayToSort){
    for (let currentElementIndex = 1; currentElementIndex < arrayToSort.length; currentElementIndex++) {
        let currentElement = arrayToSort[currentElementIndex];
        let previousIndex = currentElementIndex - 1;
        while (previousIndex >= 0 && arrayToSort[previousIndex] > currentElement) {
            arrayToSort[previousIndex + 1] = arrayToSort[previousIndex];
            previousIndex = previousIndex - 1;
        }
        arrayToSort[previousIndex + 1] = currentElement;
  
        console.log(`Iteration ${currentElementIndex}:`, arrayToSort);
    }
    return arrayToSort;
}
  
let testArray = [12, 11, 13, 5, 6];
let sortedArray = insertionSort(testArray);
console.log("Sorted array:", sortedArray);
  