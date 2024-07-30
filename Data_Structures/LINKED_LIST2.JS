class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
       this.head = null;
       this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()) {
            console.log('linked list is empty')
        } else {
            let curr = this.head
            let listValues = ''

            while(curr){
                listValues += `${curr.value}-->`
                curr = curr.next
            }
            console.log(listValues)
        }
    }
}

let list = new linkedList()
console.log(list.getSize())


list.print()

list.prepend(10)
list.print()
console.log('list is empty ?', list.getSize())

list.prepend(20)
list.prepend(30)
list.print()