const Stack = require('./Stack');

describe('Stack', () => {
    let stack;

    beforeEach(() => {
        stack = new Stack(3);
    });

    test('push data onto the stack', () => {
        stack.push('A');
        stack.push('B');
        expect(stack.size).toBe(2);
        expect(stack.peek()).toBe('B');
    });

    test('pop data from the stack', () => {
        stack.push('A');
        stack.push('B');
        const poppedData = stack.pop();
        expect(stack.size).toBe(1);
        expect(poppedData).toBe('B');
    });

    test('peek at the top of the stack', () => {
        stack.push('A');
        stack.push('B');
        expect(stack.peek()).toBe('B');
    });

    test('check if the stack has room', () => {
        expect(stack.hasRoom()).toBe(true);
        stack.push('A');
        stack.push('B');
        stack.push('C');
        expect(stack.hasRoom()).toBe(false);
    });

    test('check if the stack is empty', () => {
        expect(stack.isEmpty()).toBe(true);
        stack.push('A');
        expect(stack.isEmpty()).toBe(false);
    });

    test('throws an error when pushing to a full stack', () => {
        stack.push(1);
        stack.push(2);
        stack.push(3);
        expect(() => stack.push(4)).toThrow('Stack is full!');
    });

    test('throws an error when popping from an empty stack', () => {
        expect(() => stack.pop()).toThrow('Stack is empty!');
    });

    test('returns null when peeking an empty stack', () => {
        expect(stack.peek()).toBeNull();
    });
});
