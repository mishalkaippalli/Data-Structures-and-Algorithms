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