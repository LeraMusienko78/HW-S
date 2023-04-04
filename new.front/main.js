
// const div = document.getElementById('gridWrap'); - по id;

// const div = document.getElementsByClassName('header'); - по имени;

// const div = document.getElementsByTagName('div');

// Создаем div элемент
const divElement = document.createElement("div");

// Устанавливаем размеры
divElement.style.width = "200px";
divElement.style.height = "200px";

// Устанавливаем начальный текст и рамку
divElement.textContent = "0";
divElement.style.border = "5px solid black";

// Добавляем элемент на страницу
document.body.appendChild(divElement);

// Добавляем обработчик событий на клик
divElement.addEventListener("click", function() {
  // Получаем текущий текст и цвет рамки
  let currentValue = parseInt(this.textContent);
  let currentColor = this.style.borderColor;

  // Увеличиваем текст на 1
  currentValue++;

  // Переключаем цвет рамки
  if (currentColor === "black") {
    this.style.borderColor = "green";
  } else {
    this.style.borderColor = "black";
  }

  // Обновляем текст
  this.textContent = currentValue.toString();
});
