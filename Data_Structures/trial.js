// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }


//     middleElement(){
//         let size = this.getSize()
//         let midIndex = Math.floor(size/2)

//         let curr = this.head
//         for(let i = 0; i < midIndex; i++){
//             curr = curr.next
//         }
//         return curr.value

//     }

//     print(){
//         if(this.isEmpty()){
//             console.log("list is empty")
//         } else {
//             let curr = this.head
//             let listValues = ''
//             while(curr){
//                 listValues += `${curr.value}-->`
//                 curr = curr.next
//             }
//             console.log("list values",listValues)
//         }
//     }
// }

// let list = new linkedList()

// console.log(list.isEmpty())
// console.log(list.getSize())

// list.print()

// list.prepend(10)
// list.prepend(20)
// list.prepend(30)

// list.print()

// function secondSmallestfunction(arr) {
//    let n = arr.length;
//    let smallest = Infinity
//    let secondsmallest = Infinity

//    for(let i = 0; i < n; i++){
//       if(arr[i] < smallest){
//         secondsmallest = smallest
//         smallest = arr[i]
//       }
//       if(arr[i] > smallest && arr[i] < secondsmallest){
//         secondsmallest = arr[i]
//       }
//    }
//    if(secondsmallest === Infinity){
//     console.log("there is no second smallest number in the array")
//    }
//    return secondsmallest
// }

// console.log(secondSmallestfunction([1,2,3,4,5,-1,-2]))

function binarySearch(arr, target) {
    let n = arr.length
    let left = 0
    let right = n
    let midIndex
    while (left <= right){                              // 1, 2, 5, 6 , 8   1
        let midIndex = Math.floor((left+right)/2)

        if(arr[midIndex] === target){
            return midIndex
        } else if (arr[midIndex] < target ) {
            left = midIndex
        } else if (arr[midIndex] > target){
            right = midIndex
        }
    }
    return midIndex

}
console.log(binarySearch([1,2,3,4,5], 1))

