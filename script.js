const celciusInput = document.querySelector('#celsius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');
let clearBtn= document.getElementById("btn");

function roundNumber(number){
    return Math.round(number*100)/100;
}


celciusInput.addEventListener('input',function(){
    let cTemp = parseFloat(celciusInput.value);
    let fTemp = ((9/5)*cTemp)+32;
    let kTemp = (cTemp)+273.15;
    fahrenheitInput.value = roundNumber(fTemp);
    kelvinInput.value = roundNumber(kTemp);
})

fahrenheitInput.addEventListener('input',function(){
    let fTemp = parseFloat(fahrenheitInput.value);
    let cTemp = (5/9)*(fTemp-32);
    let kTemp = (5/9)*(fTemp-32) + 273.15;
    celciusInput.value = roundNumber(cTemp);
    kelvinInput.value = roundNumber(kTemp);
})

kelvinInput.addEventListener('input',function(){
    let kTemp = parseFloat(kelvinInput.value);
    let cTemp = kTemp - 273.15;
    let fTemp = ((9/5)*(kTemp-273.15))+32;
    celciusInput.value = roundNumber(cTemp);
    fahrenheitInput.value = roundNumber(fTemp);
})

clearBtn.addEventListener('click',()=>{
    celciusInput.value = "";
    fahrenheitInput.value = "";
    kelvinInput.value = "";
})