//using a do while adn for loop
function bubbleSort1(array){
  let swapped
  do{
    swapped = false
      for(let i = 0; i < array.length - 1; i++){
        if(array[i] > array[i+1]){
          let temp = array[i]
          array[i] = array[i+1]
          array[i+1] = temp
          swapped = true
        }
      }
  }while(swapped)
    return array
}
//time complexity big-O = O(n^2)


// using two for loops , not so efficient
function bubbleSort2(array) {
    const length = array.length;
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          // Swap elements
          const temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
          console.log(array)
        }
      }
    }
    return array;
  }
  
 
console.log(bubbleSort1([7,2,4,-2,-5,1,0,8]))
  //big-O = O(n^2)