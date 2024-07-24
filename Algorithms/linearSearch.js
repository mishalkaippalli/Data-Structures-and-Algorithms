function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}
// Example usage:
console.log("linear search: ",linearSearch([1, 2, 3, 4, 5], 3)); 

function findMin(arr) {
    if (arr.length === 0) return null;
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
// Example usage:
console.log("minimum value :",findMin([3, 1, 4, 1, 5, 9])); 

function exists(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}
// Example usage:
console.log("element exists :",exists([1, 2, 3, 4, 5], 3)); 




