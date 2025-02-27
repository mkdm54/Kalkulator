const display = document.getElementById('display-the-result');

const appendToDisplay = (input) => {
    display.value += input;
};

const clearDisplay = () => {
    display.value = '';
};

const calculate = () => {
    display.value = eval(display.value);
};