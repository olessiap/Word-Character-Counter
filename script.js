let characterCount = 0;

let userInput = document.querySelector('textarea');
console.log(userInput.textContent.length);

userInput.addEventListener('input', function(event) {
    console.log(event.target.value.length);
    let charNum = document.getElementById("character-count");
    charNum.innerHTML = event.target.value.length;
})