//sum of array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//largest element of an array
function findMax(arr) {
    if (arr.length === 0) return null; 
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// reverse array
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// Example usage:
let numbers = [1, 2, 3, 4, 5];
console.log("sum of array", sumArray(numbers)); 
console.log("Maximum number of array",findMax(numbers))
console.log("reversed array", reverseArray(numbers)); 




