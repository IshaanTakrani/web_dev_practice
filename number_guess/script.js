
// getting values from html document
const guess = document.getElementById('in_text');
const activator = document.getElementById('button'); 
const output = document.getElementById('out1')

// function that changes output paragraph to guess
function myFunction(){
    output.innerHTML = guess.value;
}

// event handler:
activator.addEventListener('click',myFunction)