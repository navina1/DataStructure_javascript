// class Stack{
//     constructor(){
//         this.stack=[]
//     }
//     push(element){
//         this.stack.push(element);
//     }
//     pop(){
//         if(stack.length==0){
//             throw new Error("Stack is already empty")
//         }
//         return this.stack.pop();
//     }
//     peek(){
//         if(this.stack.length==0){
//             throw new Error("Stack is empty");
//         }
//         return this.stack[this.stack.length-1]
//     }
//     print(){
//         console.log(this.stack);
//     }
// }
// //let stack = new Stack();
let arr=[1,6,2,9,3,4];
function sortArray(arr){
    let stack=new Stack();
    let temp=new Stack();
    //console.log(stack.length())
    for (let i=0;i<arr.length;i++){
        while(stack.length!=0 && stack.peek()>arr[i]){
            temp.push(stack.pop());
        }
        stack.push(arr[i]);
        while(temp.length>0){
            stack.push(temp.pop())
        }
    }
    return stack;
}
console.log(sortArray(arr));
//only logic