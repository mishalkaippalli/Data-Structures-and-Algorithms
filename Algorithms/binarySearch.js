// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid; // Return the index of the target
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1; // Return -1 if the target is not found
// }
// // Example usage:
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); 

// function binarySearchFirstOccurrence(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
//     let result = -1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             result = mid;
//             right = mid - 1; // Continue searching in the left half
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return result;
// }
// // Example usage:
// console.log(binarySearchFirstOccurrence([1, 2, 3, 4, 5], 6)); 

function binarySearchLastOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            result = mid;
            left = mid + 1; // Continue searching in the right half
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}
// Example usage:
console.log(binarySearchLastOccurrence([1, 2, 3, 4, 5], 6));
console.log(binarySearchLastOccurrence([1, 2, 2, 3, 4], 2));


