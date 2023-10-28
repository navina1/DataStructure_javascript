//Implementing stack using array
class Stack{
    constructor(){
        this.stack=[]
    }
    push(element){
        this.stack.push(element);
    }
    pop(){
        if(stack.length==0){
            throw new Error("Stack is already empty")
        }
        return this.stack.pop();
    }
    peek(){
        if(this.stack.length==0){
            throw new Error("Stack is empty");
        }
        return this.stack[this.stack.length-1]
    }
    print(){
        console.log(this.stack);
    }
}
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek());//prints 4
console.log(stack.pop());
stack.print();