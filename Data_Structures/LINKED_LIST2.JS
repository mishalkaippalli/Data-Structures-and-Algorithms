//SECOND LARGEST ELEMENT OF AN ARRAY

let array = [1,2,3,4]
let search = 3

function binarySearch(arr, search){
    let left = 0
    let right = arr.length


    while(left !== right) {
        let mid = Math.floor(arr.length/2)

        if(arr[mid] === search){
            return mid
        } else if(arr[mid] < search){
            right = mid
        } else {
            left = mid
        }
    }

}
console.log(binarySearch(array,search))

