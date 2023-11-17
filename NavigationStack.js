// Sample: Stack Navigation //////////////////////////////////
// Run node NavigationStack.js and follow prompts.
const Stack = require('./Stack.js');
// prompt-sync library for synchronous input
const prompt = require('prompt-sync')();

// Initialize the current page
let currentPage = 'Start Page';

// Create stacks for back and next pages
const backPages = new Stack();
const nextPages = new Stack();

// Function to display the current page information
const showCurrentPage = (action) => {
    console.log(`\n${action}`);
    console.log(`Current page: ${currentPage}`);
    console.log('Back page:', backPages.peek());
    console.log('Next page:', nextPages.peek());
};

// Function to navigate to a new page
const newPage = (page) => {
    // Push the current page to the backPages stack
    backPages.push(currentPage);
    // Set the current page to the new page
    currentPage = page;
    // Clear the nextPages stack
    while (nextPages.peek()) {
        nextPages.pop();
    }
    // Display the updated page information
    showCurrentPage('NEW:');
};

// Function to go back to the previous page
const backPage = () => {
    // Push the current page to the nextPages stack
    nextPages.push(currentPage);
    // Set the current page to the previous page
    currentPage = backPages.pop();
    // Display the updated page information
    showCurrentPage('BACK:');
};

// Function to go to the next page
const nextPage = () => {
    // Push the current page to the backPages stack
    backPages.push(currentPage);
    // Set the current page to the next page
    currentPage = nextPages.pop();
    // Display the updated page information
    showCurrentPage('NEXT:');
};

// Display the default page information
showCurrentPage('DEFALT:');
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// Initialize variables for control flow
let finish = false;
let showBack = false;
let showNext = false;

// Main loop for user interaction
while (!finish) {
    let instructions = baseInfo;
    // If there is a back page
    if (backPages.peek()) {
        instructions = `${instructions}, ${backInfo}`;
        showBack = true;
    } else {
        showBack = false;
    }
    // If there is a next page
    if (nextPages.peek()) {
        instructions = `${instructions}, ${nextInfo}`;
        showNext = true;
    } else {
        showNext = false;
    }
    // Display instructions to the user
    instructions = `${instructions}, ${quitInfo}`;
    console.log(instructions);

    // Receive user input
    const answer = prompt(question);
    const lowerCaseAnswer = answer.toLowerCase();

    // Process user input using a switch statement
    switch (lowerCaseAnswer) {
        case 'n':
            // If the user can navigate to the next page
            if (showNext) {
                nextPage();
            } else {
                console.log('\nCannot go to the next page. Stack is empty.');
            }
            break;
        case 'b':
            // If the user can go back to the previous page
            if (showBack) {
                backPage();
            } else {
                console.log('\nCannot go back page. Stack is empty.');
            }
            break;
        case 'q':
            // Set finish to true to exit the loop
            finish = true;
            break;
        default:
            // Create a new page for other user inputs
            newPage(answer);
    }
}