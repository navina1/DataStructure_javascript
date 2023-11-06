class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    enQueue(value){
        let node=new Node(value);
        if(!this.head){
           this.head=node;
           this.tail=node;
           this.length=1;
        }else{
            this.tail.next=node;
            this.tail=node;
            this.length=this.length+1;
        }
    }
    deQueue(){
        if(this.length==0){
            throw new Error ("queue is emty");
        }
        this.head=this.head.next;
    }
    peek(){
        if(this.length>0){
            return this.head.value;
        }
        throw new Error("Queue is empty")
    }
    isEmpty(){
        if(this.length){
            return false;
        }
        return true;
    }
}

let queue=new Queue();
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
queue.enQueue(5);
console.log(queue.peek());
queue.deQueue();
console.log(queue.peek());