//selection sort


function selectionSortAsc(arr) {
    let n = arr.length

    for(let i = 0; i <= n - 1; i++){
        let minIndex = i

        for(let j = i + 1; j < n ; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            } 
        }

        if(minIndex !== i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}

let arr = [64, 25, 12, 22, 11, -1, -6];
console.log("Sorted Array:", selectionSortAsc(arr)); 

function selectionSortDec(arr){
  let n = arr.length

  for(let i = 0; i < n - 1; i++) {
    let minIndex = i

    for(let j = i + 1; j < n; j++){
        if(arr[j] > arr[minIndex] ){
            minIndex = j
        }

        if(minIndex !== i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
  }
  return arr
}

console.log("Sorted Array:", selectionSortDec(arr)); 

function selectionSortStrings(arr){
    let n = arr.length;

    for(let i = 0; i < n - 1; i++) {
        let minIndex = i

        for(let j = i+1; j < n; j++){
            if(arr[j].localeCompare(arr[minIndex]) < 0){
                minIndex = j
            }
        }
        if(minIndex !== i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
    return arr
}
let arr3 = ["pear", "apple", "orange", "banana", "grape"];
console.log("Sorted Array of Strings:", selectionSortStrings(arr3));