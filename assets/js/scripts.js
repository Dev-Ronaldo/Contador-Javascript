var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber +1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement() {
    currentNumber = currentNumber -1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function increment10() {
    currentNumber = currentNumber +10;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement10() {
    currentNumber = currentNumber -10;
    currentNumberWrapper.innerHTML = currentNumber;
}
