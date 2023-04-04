

const word = document.getElementById("word").textContent;
console.log("[WORD]", word);
const input = document.getElementById("input");
const counter = document.getElementById("counter");

let currentIndex = 0;
let mistakesCount = 0;

input.addEventListener('keydown', (event) => {
  if (event.key === "Tab") {
    // event.preventDefault();
    input.classList.toggle("focus");
  } else if (event.key === word[currentIndex].toString().toLowerCase()) {
    event.preventDefault();
    currentIndex++;
    input.value = "";
    highlightCurrentLetter();
    if (currentIndex === word.length) {
      input.remove();
    }
  } else {
    mistakesCount++;
    counter.textContent = mistakesCount;
  }
});

function highlightCurrentLetter() {
  const letters = word.split("");
  letters[currentIndex-1] = `<i class="highlight">${letters[currentIndex-1]}</i>`;
  const highlightedWord = letters.join("");
  console.log(currentIndex-1);
  document.getElementById("word").innerHTML = highlightedWord;
}
