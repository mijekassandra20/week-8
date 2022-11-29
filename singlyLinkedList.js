class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val)

        if (!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        
        this.length++

        return this // return the list

    }

    unshift(val){
        let newNode = new Node(val)
        
        if(!this.head){
            this.head = newNode
            this.tail = newNode

        } else {
            newNode.next = this.head
            this.head = newNode
        }

        this.length++

        return this // return the list
    }

    shift(){
        
        if(!this.head) return undefined 

        let currentHead = this.head // initialize a variable where you store the current head
        this.head = this.head.next // the value next to currentHead will now be the new this.head, removing the head before it.

        this.length--

        if(this.length === 0 ){ // if the list becomes empty after removing the node, set the this.head as null
            this.head = null;
        }

        return currentHead // return the element you removed

    }

    get(index){

        if(index < 0 || index > this.length) return null

        let counter = 0;
        let currentHead = this.head 

        while (counter !== index){
            currentHead = currentHead.next
            counter++
        }

        return currentHead // return the element you want to retrieve
    }

    set(index, val){

        let findNode = this.get(index) // call the method get to find the node and pass the index as argument

        if(findNode) {
            findNode.val = val // set the new value of the node

            return this // return the list
        }
        
        return false; // return false if does not find a value 
    }

    remove(index) {

        if(index < 0 || index > this.length) return null
        if(index === 0) return this.shift()
        if(index === this.length - 1) return this.pop()

        let prevNode = this.get(index - 1)
        let removedNode = prevNode.next
        prevNode.next = removedNode.next

        this.length--

        return removedNode // return the node that was removed
    }

    pop(){

        if(!this.head) return undefined

        let current = this.head
        let newTail = current 

        while (current.next !== null){
            newTail = current
            current = current.next
        }

        this.tail = newTail
        this.tail.next = null

        this.length--

        if(this.length === 0){
            this.head = null
        }

        return current // return the current, which was the value you removed
    }

    insert(index, val){

        if(index < 0 || index > this.length) return undefined
        if(index === 0 ) return this.shift()
        if(index === this.length - 1) return this.push()

        let newNode = new Node(val)

        let prevNode = this.get(index - 1)
        let temp = prevNode.next

        prevNode.next = newNode
        newNode.next = temp

        this.length++

        return this // return the linked list 

    }


}

let newList = new SinglyLinkedList
console.log(newList.push(1))
console.log(newList.push(3))
console.log(newList.push(4))
console.log(newList.push(5))
// console.log(newList.shift())
// console.log(newList.unshift(10))
// console.log(newList.get(2))
// console.log(newList.set(0,8))
// console.log(newList.remove(1))
// console.log(newList.pop())
// console.log(newList.insert(1,2))
// console.log(newList)

