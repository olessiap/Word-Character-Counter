let charNum = document.getElementById("character-count");
let wordNum = document.getElementById("word-count");

let inputHandler = function(event) {
    if (!event.target.matches('[data-character-count]')) return;
    let wordCount = event.target.value.split(/[\n\r\s]+/g).filter(function(word) {
        return word.length > 0;
    });
    wordNum.textContent = wordCount.length;
    charNum.innerHTML = event.target.value.length

    
}

document.addEventListener('input', inputHandler, false);
