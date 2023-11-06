class Queue {
    constructor() {
        this.queue = [];
    }

    enQueue(element) {
        this.queue.push(element);
    }

    deQueue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.queue.shift();
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.queue[0];
    }
}

class Stack {
    constructor() {
        this.q1 = new Queue();
    }

    push(value) {
        this.q1.enQueue(value);
    }

    pop() {
        if (this.q1.isEmpty()) {
            throw new Error("Stack is empty");
        }
        let q2 = new Queue();
        while (this.q1.queue.length > 1) {
            q2.enQueue(this.q1.deQueue());
        }
        let data = this.q1.deQueue();
        while (!q2.isEmpty()) {
            this.q1.enQueue(q2.deQueue());
        }
        return data;
    }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // Output will be 2
