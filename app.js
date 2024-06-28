let countElement = document.querySelector("counter")
let inCreaseButton = document.querySelector("increase")
let deCreaseButton = document.querySelector("decrease")
let resetButton = document.querySelector("reset")



let counter = 0;

function updateCounter() {
    document.getElementById('counter').innerText = counter;
    

}

function increase() {
    counter++;
    updateCounter();

}

function decrease() {
    counter--;
    updateCounter();
}

function reset() {
    counter = 0;
    updateCounter();
}