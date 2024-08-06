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