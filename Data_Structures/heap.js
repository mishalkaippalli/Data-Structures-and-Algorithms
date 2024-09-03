class MinHeap {
    constructor() {
        this.heap = []
    }


 heappush( newKey){

    this.heap.push(newKey);
    let curr = this.heap.length - 1

    while(curr > 0){
     let parent = Math.floor((curr-1)/2)

     if(this.heap[curr] < this.heap[parent]) {
       
        [this.heap[curr], this.heap[parent]] = [this.heap[parent], this.heap[curr]]
        curr = parent
     } else {
        break
     }
    }
  }

  heappop(){
    // swap root with last node
    const n = this.heap.length;
    [this.heap[0], this.heap[n-1]] = [this.heap[n-1], this.heap[0]]
  
    // remove the root i.e. the last item (because of swap)
    const removedKey = this.heap.pop();
  
    let curr = 0;
  
    // keep going till atleast left child is possible for current node
    while(2*curr + 1 < this.heap.length){
      const leftIndex = 2*curr+1; 
      const rightIndex = 2*curr+2;
      const minChildIndex = (rightIndex < this.heap.length && this.heap[rightIndex] < this.heap[leftIndex] ) ? rightIndex :leftIndex;
      if(this.heap[minChildIndex] < this.heap[curr]){
       // quick swap, if smaller of two children is smaller than the parent (min-this.heap)
        [this.heap[minChildIndex], this.heap[curr]] = [this.heap[curr], this.heap[minChildIndex]]
        curr = minChildIndex
      } else {
        break
      }
    }
  
    // finally return the removed key
    return removedKey;
  }


}

const heap = new MinHeap()
heap.heappush(10);
heap.heappush(5);
heap.heappush(20);
heap.heappush(1);

console.log(heap)

console.log(heap.heappop())
console.log(heap)