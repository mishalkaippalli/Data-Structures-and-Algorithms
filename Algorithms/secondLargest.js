function secondLargest(arr) {

    if (arr.length < 2) {
        throw new Error('Array must contain at least two elements');
    }
    
    let largest = -Infinity
    let secondLargest = -Infinity
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== largest )
            secondLargest = arr[i];
           
    }

    if (secondLargest === -Infinity) {
        throw new Error('No second largest element found');
    }
    return secondLargest
}

console.log("second largest",secondLargest([1,2,7,5]))