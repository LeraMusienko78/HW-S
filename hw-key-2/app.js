

// const word = document.getElementById('word').textContent;
// const input = document.getElementById('input');
// const mistakesCounter = document.getElementById('mistakes-counter');

// let currentLetterIndex = 0;
// let mistakesCount = 0;

// document.addEventListener('keydown',(event)=>{
//     if(event.key === 'tab'){
//         event.preventDefault();
//         input.classList.toggle('focus');
//     }
//     else if(event.key === word[currentLetterIndex]){
//         event.preventDefault();
//         markCorrectLetter();
//         currentLetterIndex++;
//         input.value = '';
//         if(currentLetterIndex === word.length){
//             input.remove();
//         }
//     }
//     else{
//         mistakesCount++;
//         mistakesCounter.textContent = mistakesCount;
//     }
// });

// function markCorrectLetter(){
//     const wordLetters = document.getElementById('word').children;
//     wordLetters[currentLetterIndex].classList.add('correct-letter');
// }
const word = document.getElementById('word').textContent;
const input = document.getElementById('input');
const mistakesCounter = document.getElementById('mistakes-counter');
let currentLetterIndex = 0;
let mistakesCount = 0;

document.addEventListener('keydown', function(event) {
  if (event.key === 'tab') {
    event.preventDefault();
    input.classList.toggle('focused');
  } else if (event.key === word[currentLetterIndex]) {
    event.preventDefault();
    markCorrectLetter();
    currentLetterIndex++;
    input.value = '';
    if (currentLetterIndex === word.length) {
      input.remove();
    }
  } else {
    mistakesCount++;
    mistakesCounter.textContent = mistakesCount;
  }
});

function markCorrectLetter() {
  const wordLetters = document.getElementById('word').children;
  wordLetters[currentLetterIndex].classList.add('correct-letter');
}


