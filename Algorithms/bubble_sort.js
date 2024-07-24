function bubbleSort(array) {
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
  console.log(bubbleSort([7,2,4,1,0,8]))