//Remove Duplicate from unsorted linked list


class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to append a new node to the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to delete a node with a specific value
    delete(value) {
        if (!this.head) {
            return; // Empty list, nothing to delete
        }

        if (this.head.data === value) {
            this.head = this.head.next; // Update head to skip the first node
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === value) {
                current.next = current.next.next; // Update reference to skip the node to be deleted
                return;
            }
            current = current.next;
        }
    }
    removeDuplicate(){
        let set=new Set();
        let current=this.head;
        let prev=null;
        while(current){
            if(!set.has(current.data)){
                set.add(current.data);
                prev=current;
                current=current.next;
            }else{
                prev.next=current.next;
                current=prev.next;
            }
        }
    }

    // Method to print the linked list
    print() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.data);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}

// Create a linked list
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.append(1);
myList.append(2);
myList.append(3);

console.log("Original linked list:");
myList.print();


myList.removeDuplicate()
// console.log("\nLinked list after deleting node with value 3:");
myList.print();

