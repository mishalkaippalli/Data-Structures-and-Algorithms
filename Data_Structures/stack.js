class Stack{

    constructor(){
       this.items = []
    }

    push(element){
        this.items.push(element)
    }

    pop(){
        if(this.isEmpty()){
            return "stack is empty"
        }   
        return this.items.pop()  
    }
// return the top element without removing it
    peek(){
        if(this.isEmpty()){
            return "stack is empty"
        }
        return this.items[this.items.length - 1]
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = []
    }
    print() {
        console.log(this.items.toString())
    }
}

const stack = new Stack();

stack.push(10)
stack.push(20)
stack.push(30)

console.log(stack.peek()); 
console.log(stack.pop());  
console.log(stack.pop());  

console.log(stack.size()); 

stack.push(40)
stack.push(50)

stack.print(); 

console.log(stack.isEmpty()); 

stack.clear();
console.log(stack.isEmpty()); 

//time complexity
//push O(1)
//pop O(1)
//peek O(1)
// all operations have constant time complexity