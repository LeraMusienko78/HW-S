// const el = document.getElementById("div");

// document.getElementsByClassName("g");

// document.querySelector('')

// document.body
// document.head
// document.documentElement

// // DOM document object model

// div.style.color = "aqva";

// div.classList.add('qwe')

// const div= document.createElement('div'); 

// document.body.append(div);

// div.remove();

// elem.addEventiListener(eventName, )

// dispatchEvent.addEventListerner('mouseenter', ()=>{
//     console.log('mouseenter');
// })

const div = document.getElementById('qwe');

document.body.addEventListener('click', (event) => {
    console.log(event.x, event.y);
});

// page task.txt

// 1

function setTextById(id, text) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = text;
    } else {
      console.error(`Element with id ${id} not found`);
    }
}
setTextById("my-element", "Hello, world");

// 3

function createElements(num, text) {
    // Найти элемент, в который будем добавлять новые элементы
    const parentElement = document.getElementById('parent');
  
    // Создать новые элементы и добавить их в родительский элемент
    for (let i = 0; i < num; i++) {
      const newElement = document.createElement('div');
      newElement.innerText = text;
      parentElement.appendChild(newElement);
    }
  }



// task events.txt

// 1

let number = 0;

function incrementNumber() {
  number++;
  document.getElementById("number").innerHTML = number;
}

// 2
