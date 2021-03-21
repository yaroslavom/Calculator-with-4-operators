var buttonPlus = document.getElementById("buttonPlus");
var buttonMinus = document.getElementById("buttonMinus");
var buttonMultiply = document.getElementById("buttonMultiply");
var buttonDevide = document.getElementById("buttonDevide");

var input1 = document.getElementById('number1') 
var input2 = document.getElementById('number2') 

function getNumber1() {
    var number1 = Number(input1.value);
    return number1
}

function getNumber2() {
    var number2 = Number(input2.value);
    return number2
}

function makeOperation(operationCode) {
    if (operationCode === "+") {
        var result = getNumber1() + getNumber2();
        // window.alert(result)
    } else if (operationCode === "-") {
        var result = getNumber1() - getNumber2();
        // window.alert(result)
    } else if (operationCode === "*") {
        var result = getNumber1() * getNumber2();
        // window.alert(result)
    } else if (operationCode === "/") {
        var result = getNumber1() / getNumber2();
        // window.alert(result)
    } else {
        window.alert("Operation is unknown")
    }   
    window.alert(result);
}

function onButtonPlusClick() {
    // var result = getNumber1() + getNumber2();
    // window.alert(result)
    makeOperation("+"); 
}

function onButtonMinusClick() {
    // var result = getNumber1() - getNumber2();
    // window.alert(result)
    makeOperation("-"); 
}

function onButtonMultiplyClick() {
    // var result = getNumber1() * getNumber2();
    // window.alert(result)
    makeOperation("*"); 
}

function onButtonDevideClick() {
    // var result = getNumber1() / getNumber2();
    // window.alert(result)
    makeOperation("/"); 
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);