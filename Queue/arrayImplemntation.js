class Queue{
    constructor(){
        this.queue=[];
    }
    enQueue(element){
        this.queue.push(element);
    }
    deQueue(){
        if(this.isEmpty(this.queue)){
            throw new Error ("queue is emty")
        }
        this.queue.shift()
    }
    isEmpty(){
        return this.queue.length==0;
    }
    peek(){
        if(this.isEmpty(this.queue)){
            throw new Error ("queue is emty")
        }
        return this.queue[0]
    }
}

let queue=new Queue();
queue.enQueue(10);
queue.enQueue(11);
queue.enQueue(12);
queue.enQueue(13);
queue.enQueue(14);
queue.enQueue(15);
console.log(queue.peek());
queue.deQueue();
console.log(queue.peek());