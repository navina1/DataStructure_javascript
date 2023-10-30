class Node{
    constructor(value){
        this.val = value;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.head=null;
    }
    push(value){
        const newNode= new Node(value);
        if(!this.head){
            this.head=newNode;
            return;
            //return this.head;
        }
        newNode.next=this.head;
        this.head=newNode;
    }
    pop(){
        if(this.head==null){
            throw new Error("Stack is already empty");
        }
        let value=this.head.val;
        this.head=this.head.next;
        return value;
    }
    peek(){
        if(this.head==null){
            throw new Error("Stack is already empty");
        }
        let value=this.head.val;
        return value;
    }
    print(){
        let curr=this.head;
        while(curr!=null){
            console.log(curr.val);
            curr=curr.next;
        }
    }
}
let sampleStack=new Stack();
sampleStack.push('A');
sampleStack.push('B');
sampleStack.push('C');
//sampleStack.print();
console.log("Poped element",sampleStack.pop());
sampleStack.print();
console.log("Peeked element",sampleStack.peek());



// min stack

// valid parantheses

// next greater element - pattern ( daily temp )

// stock span

// max area in histogram

// car fleet

// aditya verma- youtube vedio