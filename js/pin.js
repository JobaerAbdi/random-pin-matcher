function genaratePin(){ 
    const random = Math.random()*10000;
    const randomNumber = Math.round(random);
    return randomNumber;
}

function getPin(){
    const myPin = genaratePin(); 
    const myPinString = myPin + '';              

    if(myPinString.length  === 4){             
        return myPin;
    }
    else{
        return getPin();
    }
}



document.getElementById('generate-pin').addEventListener('click',function(){
    const displayPinFiled = document.getElementById('display-pin');
    displayPinFiled.value = getPin();
})


document.getElementById('deligate').addEventListener('click',function(event){
    const stringNumber = event.target.innerText; 

    const calculatorDisplay = document.getElementById('calculator-display');
    const prevCalculatorDisplay = calculatorDisplay.value;
     if(isNaN(stringNumber)){
        if(stringNumber === 'C'){
            calculatorDisplay.value = '';
        }
        else if(stringNumber === '<'){
            const splitNumber = prevCalculatorDisplay.split('');
            splitNumber.pop();
            const joinNumber = splitNumber.join('');
            calculatorDisplay.value = joinNumber;
        }
     }
     else{
        const currentCalculatorDisplay = prevCalculatorDisplay + stringNumber;
        calculatorDisplay.value = currentCalculatorDisplay;
     }

})

document.getElementById('btn-submit').addEventListener('click',function(){
    const displayPin = document.getElementById('display-pin');
    const displayPinNumber = displayPin.value;

    const typeNumber = document.getElementById('calculator-display');
    const typeMyNumber = typeNumber.value;


    const pinSussessMessage = document.getElementById('pin-correct');
    const pinFeularMessage = document.getElementById('pin-incorrect');

    if(typeMyNumber === displayPinNumber){
        pinSussessMessage.style.display = 'block';
        pinFeularMessage.style.display = 'none';
    }
    else{
        pinFeularMessage.style.display = 'block';
        pinSussessMessage.style.display = 'none';
    }
})




