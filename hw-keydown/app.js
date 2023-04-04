

const word = document.getElementById("word").textContent;
const input = document.getElementById("input");
const counter = document.getElementById("counter");

let currentIndex = 0;
let mistakesCount = 0;

input.addEventListener('keydown', (event) => {
  if (event.key === "Tab") {
    event.preventDefault();
    input.classList.toggle("focus");
  } else if (event.key === word[currentIndex]) {
    console.log("[CURRENTINDEX]", currentIndex);
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
  console.log("[LETTERS]", letters);
  letters[currentIndex] = `<p class="highlight">${letters[currentIndex]}</p>`;
  const highlightedWord = letters.join("");
  document.getElementById("word").innerHTML = highlightedWord;
}
