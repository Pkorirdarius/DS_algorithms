// Amortized analysis is a method for analyzing a sequence of operations.
//  It allows for a more accurate estimate of the average time complexity of an operation in a data structure.
//  It is particularly useful when the time complexity of an operation can vary significantly,
//  and the worst-case scenario is unlikely to occur. 
// The idea is to average out the time complexity of each operation over a sequence of operations, rather than looking at the time complexity of each operation in isolation. 
// This can give a more accurate estimate of the average time complexity of the operations in the sequence.
class DynamicArray {
    constructor() {
        this.array = [];
        this.size = 0;
    }

    insert(val){
        // resize the array if it is full
        if(this.size === this.array.length){
            this.array = [...this.array, ...Array(this.array.length).fill(0)];
        }
        this.array[this.size] = val;
        this.size++;
        console.log(`Array after inserting ${val} is: ${this.array}`);
    }
}

let dynamicArray = new DynamicArray();
dynamicArray.insert(1);
dynamicArray.insert(2);
dynamicArray.insert(3);
dynamicArray.insert(4);

