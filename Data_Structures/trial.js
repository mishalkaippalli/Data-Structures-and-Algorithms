class Minheap{
   constructor(){
    this.heap = []
   }

   push(value){
     this.heap.push(value)
     const n = this.heap.length
     let curr = n - 1

     while(curr > 0 ){
        let parent = ((curr - 1)/2)
        if(this.heap[curr] < this.heap[parent]){
            [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]]
            curr = parent
        } else {
            break
        }      
     }
   }

   pop(){
       const n = this.heap.length;

       [this.heap[0], this.heap[n-1]] = [this.heap[n-1], this.heap[0]]

       let returnvalue = this.heap.pop()

       let curr = 0

       while(curr*2+1 < n){
        let leftIndex = curr*2 + 1
        let rightIndex = curr*2 + 2
        let minChildIndex = (rightIndex < n && this.heap[rightIndex] < this.heap[leftIndex]) ? rightIndex : leftIndex;
         if(this.heap[minChildIndex] < this.heap[curr]){
            [this.heap[minChildIndex], this.heap[curr]] = [this.heap[curr], this.heap[minChildIndex]]
            curr = minChildIndex
         } else {
            break
         }
       }
       return returnvalue
   }
}

const heap = new Minheap()

heap.push(5)
heap.push(10)
heap.push(15)
heap.push(12)
heap.push(14)

console.log(heap)

heap.push(7)

console.log(heap)

heap.pop()
console.log("after popping",heap)
  