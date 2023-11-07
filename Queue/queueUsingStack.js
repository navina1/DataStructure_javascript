//Implementing queue using stack

//costly enqueue

//enqueue
//dequeue

class Stack{
    constructor(){
        this.stack=[];
    }
    push(element){
        this.stack.push(element);
    }
    isEmpty(){
        return (this.stack.length==0) ? true : false;
    }
    pop(){
        if (this.isEmpty()){
            return "Underflow";
        }
        return this.stack.pop();
    }
}

class Queue{
    constructor(){
        this.queue=new Stack();
    }
    enQueue(element){
        let tempStack = new Stack();
        while(!this.queue.isEmpty()){
            tempStack.push(this.queue.pop())
        }
        //console.log(tempStack)
        this.queue.push(element);
        while (!tempStack.isEmpty()){
            this.queue.push(tempStack.pop());
        }
    }
    deQueue(){
        if (this.queue.isEmpty()){
            return "Queue Underflow"
        }
        return this.queue.pop()
    }
}

let queue=new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.enQueue(5);
console.log(queue.deQueue())