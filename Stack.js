// JAVASCRIPT STACK: 

// Stacks are a linear collection of nodes that follows the "First In, Last Out" (FILO) principle.

// Key Operations:
// - .push(data): Adds data to the top of the stack.
// - .pop(): Removes and returns data from the top of the stack.
// - .peek(): Provides data from the top of the stack without removing it.

// Stacks are commonly used in scenarios where the order of operations is crucial, 
// such as the web browser's back/forward functionality.

const LinkedList = require('./LinkedList');

// Stack Class Constructor():
// maxSize parameter: An optional parameter specifying the maximum size (capacity) of the stack (default is Infinity).
class Stack {
    constructor(maxSize = Infinity) {
        // Represents the stack using a linked list.
        this.stack = new LinkedList();
        // Maximum size (capacity) constraint for the stack.
        this.maxSize = maxSize;
        // Tracks the number of elements in the stack.
        this.size = 0;
    }

    //.push() method: 
    // Adds data to the top of the stack
    push(data) {
        if (!this.hasRoom()) throw new Error('Stack is full!')
        // If there is room in the stack.
        // Increment the size of the stack.
        this.size++;
        // Add data to the top of the stack.
        this.stack.addToHead(data);
    }

    // pop() method: 
    // Removes from the top of the stack
    pop() {
        if (this.isEmpty()) throw new Error('Stack is empty!')
        // If the stack is not empty.
        // Decrement the size of the stack.
        this.size--;
        // Remove and return data from the top of the stack.
        return this.stack.removeHead();
    }

    //.peek() method:
    // returns the data of the stack’s top element
    peek() {
        if (this.isEmpty()) return null;
        // If the stack is not empty.
        // Return the data of the top element in the stack.
        return this.stack.head.data;
    }

    //.hasRoom() Helper method:
    // Aviod: stack overflow
    hasRoom() {
        // Returns true if the current size of the stack is less than the maximum size.
        return this.size < this.maxSize;
    }

    // .isEmpty() Helper Method:
    // Aviod stack underflow
    isEmpty() {
        // Returns true if the stack has no elements.
        return this.size === 0;
    }

    // printStack() method:
    // Print out the elements in the stack, starting from the top.
    printStack() {
        let node = this.stack.head;
        let output = '<top> ';
        while (node) {
            output += node.data + ' ';
            node = node.getNextNode();
        }
        output += '<bottom>';
        console.log(output);
    }
};

module.exports = Stack;