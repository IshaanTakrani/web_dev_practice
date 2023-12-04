
// getting values from html document
let random_int = Math.random
let guess = document.getElementById('in_text');
let output = document.getElementById('out1')
let activator = document.getElementById('button'); 
let clear_button = document.getElementById('clear_button')
// document.body.style.background = "linear-gradient(90deg, rgb(0, 50, 0) 0%, rgb(50, 0, 50) 100%);"
let stillstring = ""
let count = 0


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let randint = getRandomInt(1,10);
let rand = randint.toString()

function displayResult(){

    
    if(guess.value == rand){
        output.innerHTML = "Correct"
        stillstring = ""
        count = 0
        clear_button.innerHTML = "try again"
        document.getElementById('body').style.background = 'green'
        
    }

    if (guess.value != rand){
        output.innerHTML = stillstring + "WRONG"
        stillstring = stillstring.concat("STILL ")
        count = count+1
        
    }

    if (count > 3){
        output.innerHTML = "TOO MANY TRIES"
        clear_button.innerHTML = "try again"
        document.getElementById('body').style.background = 'darkred';
    }

    guess.value = ""
}


function clear(){
    location.reload() 
}

// event listeners:
guess.addEventListener("keypress",function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    activator.click();
  }
});

activator.addEventListener('click',displayResult)
clear_button.addEventListener('click',clear)