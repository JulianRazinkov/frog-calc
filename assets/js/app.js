'use strict'

let buttons = document.querySelectorAll('.button_item');
let clearButton = document.querySelector('.clear-btn');
let additionButton = document.querySelector('.plus-btn');
let outputArea = document.querySelector('.output-area');
let equalsButton = document.querySelector('.equals-btn');
let outputValue = '';


console.log(buttons)



if(outputValue == undefined){
	outputValue = '0';
}

//Вызов события при клике сразу для всех кнопок
for(let i = 0; i < 15; i++){
	buttons[i].addEventListener('click', numberInput);
}


equalsButton.addEventListener('click', equals);
clearButton.addEventListener('click', clearOutput);


function numberInput(){
	let commonNumber = event.target.innerText;
	outputValue = outputValue + commonNumber;
	outputArea.innerHTML = outputValue;
}
function clearOutput(){
	console.log('clear');
	outputArea.innerText = '';
	outputValue = '';
}
function equals(){
	if(outputValue == undefined){
		outputValue = '0';
		outputArea.innerText = outputValue;
	}else {
		outputValue = eval(outputValue);
		outputArea.innerText = outputValue;
	}

}