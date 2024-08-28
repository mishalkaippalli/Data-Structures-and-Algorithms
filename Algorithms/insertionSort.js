//insertionsort

function insertionSort(array) {

    for(let i = 1; i < array.length; i++){
        let numberToInsert = array[i]
        let j = i - 1

        while(j >= 0 && arr[j] > numberToInsert){
            arr[j + 1] = arr[j]
            j = j - 1
            //console.log(arr)
        }
        arr[j+1] = numberToInsert
       
    }
}

const arr = [8,20,-2, 4, 6]
insertionSort(arr)
console.log(arr)

// time complexity bigO = O(n^2)

// simplicity and ease of implementation
// efficiency in small data sets and stable sorting(preserves the relative order of equal elements)
// adaptive (it can be very efficient if the array is already full or partially sorted) 
// Online sorting (it can sort list as the data comes) **
// low overhead in terms of additional memory usage. only require a constant amount of additional space O(1)
// Use cases : combinations with quicksort and mergesort for hybrid sorting algorithms. it is particularly useful for sorting
// small sections of data or when integrating new elements into and already sorted list.
// in environments with tight memory contstaints or when sorting small datasets that arrive incrementally, insertion sort can be most effective
