// The stacknput strstackng s stacks valstackd stackf and only stackf:

// Every open bracket stacks closed by the same type of close bracket.
// Open brackets are closed stackn the correct order.
// Every close bracket has a correspondstackng open bracket of the same type.

// s = "([{}])"
// s = "[(])"

function stringcheck(s){
   

   if(s.length === 0 || s.length === 1) {
      return false
   }

   let stack = []
   
   for(let j = 0; j < s.length ; j++){
      if (s[j] === "(" || s[j] === "[" || s[j] === "{"){
         stack.push(s[j])
      }
      else{
         if(
            !stack.length||
            (s[j] === ")" && stack[stack.length - 1] !== "(") ||    
            (s[j] === "}" && stack[stack.length - 1] !== "{")||
            (s[j] === "]" && stack[stack.length - 1] !== "[")
           )
            return false

            stack.pop()
      }

   }
   return !stack.length
}
let s = "([{}])"
console.log(stringcheck(s))


//mergesorting
// function mergeSort(arr){

//    if(arr.length < 2){
//        return arr
//    }

//    let mid = Math.floor(arr.length/2)
//    let leftArr = []
//    let rightArr = []
    
//    leftArr = arr.slice(0, mid)
//    rightArr = arr.slice(mid)

//    return merge(mergeSort(leftArr), mergeSort(rightArr))

//    function merge(leftArray, rightArray){
//        let sortedArray = []
//        while(leftArray.length && rightArray.length){
//            if(leftArray[0] > rightArray[0]){
//                sortedArray.push(rightArray.shift())
//            } else {
//                sortedArray.push(leftArray.shift())
//            }
//        }
//        return [...sortedArray,...leftArray,...rightArray]
//    }
// }

// let array = [15,4,3,6,1,7]
// console.log(mergeSort(array))