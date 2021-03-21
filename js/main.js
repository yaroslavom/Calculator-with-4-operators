var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);


function onButtonPlusClick() {
    var input1 = document.getElementById('number1') 
    var input2 = document.getElementById('number2') 

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var result = number1 + number2;
    window.alert(result)
}

function onButtonMinusClick() {
    var input1 = document.getElementById('number1') 
    var input2 = document.getElementById('number2') 

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var result = number1 - number2;
    window.alert(result)
}

function onButtonMultiplyClick() {
    var input1 = document.getElementById('number1') 
    var input2 = document.getElementById('number2') 

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var result = number1 * number2;
    window.alert(result)
}

function onButtonDevideClick() {
    var input1 = document.getElementById('number1') 
    var input2 = document.getElementById('number2') 

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var result = number1 / number2;
    window.alert(result)
}

