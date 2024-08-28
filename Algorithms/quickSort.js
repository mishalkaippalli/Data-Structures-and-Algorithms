function quickSort(arr) {

    if(arr.length < 2){
        return arr
    }
    let pivot = arr[arr.length -1]
    let left = []
    let right = []

    for (let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([-1,3,5,4,-3,9]))

// worst case - big O = O(n^2) // if the array is already sorted
//avg case theta O(nlogn)      // derrriving to this is a big process so just understand.

// works rapidly and effectively
// has the best time complexity when compared to other sorting algorithm
// has a space complexity(memory) O(logn), making it an excellent choice for situations when space is limited.

//disadvantages
// technique is considered as unstable since it doesn't maintain the key-value pairs initial order // In other words, if two elements have the same value, Quicksort may rearrange them such that their order in the sorted output is different from their order in the input.
//isn't effective when the pivot is largest or smallest element (worst case complexity)
//not adaptive

//applications
// commercial computing and private organizations for purpose of various data like sorting filesby name/dat/price
// computer graphics
// financial systems
