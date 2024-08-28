function mergeSort(arr) {

  if(arr.length < 2){
    return arr
  }

  let mid = Math.floor(arr.length/2)
  let leftArr = arr.slice(0,mid)
  let rightArr = arr.slice(mid)
  console.log("leftArray :",leftArr,"rightarr : ", rightArr)

 return merge(mergeSort(leftArr),mergeSort(rightArr))

 function merge(leftArr, rightArr){
  let sortedArr = []
  while(leftArr.length && rightArr.length){
    if(leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift())
    } else {
       sortedArr.push(rightArr.shift())
    }
  }

  console.log("Returned sorted array", [...sortedArr, leftArr, rightArr])
  return [...sortedArr, ...leftArr, ...rightArr]
 }
}

const arr = [8, 20, -2, 4,-6]
console.log(mergeSort(arr))

//Time Complexity:
// Best Case: O(n log n), When the array is already sorted or nearly sorted.
// Average Case: O(n log n), When the array is randomly ordered.
// Worst Case: O(n log n), When the array is sorted in reverse order.

// advantages
// stability maintains relative order of equal elemets in the input array.
//guarenteed worst-case performance : mergesort has a worst-case time complexity of O(n log n), which means it performs well even on large datasets
//simple to implemetn: divide and conquer is quite straight forward
// naturally parallel

//disadvantages
//space complexity: Merge sort requires additional memory to store the merged subarrays during the sorting process
//not-in-place: requires additional memory to store sorted data . This can be a disadvantage in applications where memory usage is a concern
// slower than quickSort in general : QuickSort is more cache friendly because it works in place

// applications: 
// sorting large datasets
/// inversion counting
// collection.sort uses MergeSort  while arrays.sort in java uses quicksort 
// prefered algorithm for linked lists