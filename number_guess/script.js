
// getting values from html document
let random_int = Math.random
let guess = document.getElementById('in_text');
let output = document.getElementById('out1')
let activator = document.getElementById('button'); 
let clear_button = document.getElementById('clear_button')


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let randint = getRandomInt(1,10);
let rand = randint.toString()

function displayResult(){
    console.log(rand);
    console.log(guess.value);
    if(guess.value == rand){
        output.innerHTML = "Correct"
    }
    else{
        output.innerHTML = "WRONG"
    }  
}


function clear(){
    location.reload() 
}

// event handlers:
activator.addEventListener('click',displayResult)
clear_button.addEventListener('click',clear)