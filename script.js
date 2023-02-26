const passwordField=document.getElementById("generated-password");
const rangeBarValue=document.getElementById("range");
const lengthValue=document.getElementById("length-value");
const refresh=document.getElementById("refresh");
const copy=document.getElementById("copy");
const uppercaseCheckbox=document.getElementById("uppercase");
const lowercaseCheckbox=document.getElementById("lowercase");
const numberCheckbox=document.getElementById("number");
const symbolCheckbox=document.getElementById("symbol");

const uppercase=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const number=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbol=['!', '@', '#', '$', '%', '^', '&', '*', '?', '`', '~', '|'];

rangeBarValue.addEventListener("input", changeLengthValue);
rangeBarValue.addEventListener("input", generatePassword);
refresh.addEventListener("click", generatePassword);
copy.addEventListener("click", copyText);
uppercaseCheckbox.addEventListener("click", upperChecked);
lowercaseCheckbox.addEventListener("click", lowerChecked);
numberCheckbox.addEventListener("click", numberChecked);
symbolCheckbox.addEventListener("click", symbolChecked);
uppercaseCheckbox.addEventListener("click", generatePassword);
lowercaseCheckbox.addEventListener("click", generatePassword);
numberCheckbox.addEventListener("click", generatePassword);
symbolCheckbox.addEventListener("click", generatePassword);

var checked=[uppercase,lowercase,number, symbol];
var passwordArray=[];

function upperChecked(){

    if(uppercaseCheckbox.checked==false){
        checked = checked.filter(function(e) { return e !== uppercase })
    }
    if(uppercaseCheckbox.checked==true){
        checked.push(uppercase);
    }
}

function lowerChecked(){
    if(lowercaseCheckbox.checked==false){
        checked = checked.filter(function(e) { return e !== lowercase })
    }
    if(lowercaseCheckbox.checked==true){
        checked.push(lowercase);
    }
}

function numberChecked(){
    if(numberCheckbox.checked==false){
        checked = checked.filter(function(e) { return e !== number })
    }
    if(numberCheckbox.checked==true){
        checked.push(number);
    }
}

function symbolChecked(){
    if(symbolCheckbox.checked==false){
        checked = checked.filter(function(e) { return e !== symbol })
    }
    if(symbolCheckbox.checked==true){
        checked.push(symbol);
    }
}

function concatenate(){
    for(let i=0;i<checked.length;i++){
        passwordArray=passwordArray.concat(checked[i])
    }
}

function generatePassword(){
    concatenate();
    let newPassword=[];
    for(let i=0;i<rangeBarValue.value;i++){
        var temp=passwordArray[Math.floor(Math.random()*passwordArray.length)];
        newPassword.push(temp);
        passwordField.innerHTML=newPassword.join("");
    }
    passwordArray=[]
}

function changeLengthValue(){
    lengthValue.innerHTML=rangeBarValue.value;
}

function copyText(){
    navigator.clipboard.writeText(passwordField.innerText);
}
