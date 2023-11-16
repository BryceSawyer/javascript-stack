const Stack = require('./Stack');

const stack = new Stack(6);

console.log('\n// Adding to stack... //');
for (let i = 1; i < 7; i++) {
    stack.push(`Data #${i}`)
    console.log(`Data #${i}`)
}

console.log('\n// Current Stack //')
stack.printStack();

console.log('\n// Push to full stack //')
try {
    stack.push('Data#7')
} catch (e) {
    console.log(e)
}

console.log(`\nThe first element is ${stack.peek()}\n`)

console.log('// Removeing from stack... //');
for (let i = 0; i < 6; i++) {
    console.log(stack.pop());
}

console.log('\n// Pop from empty stack //')
try {
    stack.pop()
} catch (e) {
    console.log(e)
}
