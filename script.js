// Part 2: Function demonstrating scope, parameters & return value
function factorial(n) {
    if (n < 0) return null;
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

const factorialBtn = document.getElementById('factorialBtn');
factorialBtn.addEventListener('click', () => {
    const num = parseInt(document.getElementById('numInput').value);
    const result = factorial(num);
    const display = document.getElementById('factorialResult');
    if (result === null) {
        display.textContent = 'Enter a non-negative number.';
        display.style.color = 'red';
    } else {
        display.textContent = `Factorial of ${num} is ${result}`;
        display.style.color = 'green';
    }
});

// Part 3: Triggering CSS animation with JS
const moveBoxBtn = document.getElementById('moveBoxBtn');
const box = document.getElementById('box');

moveBoxBtn.addEventListener('click', () => {
    box.classList.toggle('animate');
});

// Extra: JS function with local vs global scope demo
let globalCounter = 0;

function increaseCounter(amount) {
    let localCounter = 0;
    localCounter += amount;
    globalCounter += amount;
    console.log(`Local: ${localCounter}, Global: ${globalCounter}`);
}

// Example usage
increaseCounter(5);
increaseCounter(3);
