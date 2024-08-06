function bubbleSort(arr) {
    for(let i = 0; i < arr.length - 1; i++){
      for(let j= 0; j < arr.length - i; j++){
        if(arr[j] > arr[j+1]){
          let temp = arr[j+1]
          arr[j+1] = arr[j]
          arr[j] = temp
        }
      }
    }
    return arr
}

console.log(bubbleSort([1,3,4,2,5,-4,-6]))