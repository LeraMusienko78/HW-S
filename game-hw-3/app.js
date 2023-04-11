// Установка начальных значений
let health1 = 100;
let health2 = 100;
let message = "";

// Обработчики событий для кнопок атаки персонажей
document.getElementById("button1").addEventListener("click", function() {
  // Вычисление урона и изменение здоровья персонажа 2
  let damage = Math.floor(Math.random() * 10) + 1;
  health2 -= damage;

  // Обновление индикатора здоровья и вывод сообщения о выстреле
  document.getElementById("healthBar2").value = health2;
  message = `Персонаж 1 атаковал и нанес ${damage} урона персонажу 2.`;
  document.getElementById("message").innerHTML = message;

  // Проверка, окончена ли игра
  if (health2 <= 0) {
    message = "Персонаж 1 победил!";
    document.getElementById("message").innerHTML = message;
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
  }
});

document.getElementById("button2").addEventListener("click", function() {
  // Вычисление урона и изменение здоровья персонажа 1
  let damage = Math.floor(Math.random() * 10) + 1;
  health1 -= damage;

  // Обновление индикатора здоровья и вывод сообщения о выстреле
 document.getElementById("healthBar1").value = health1;
 message = `Персонаж 2 атаковал и нанес ${damage} урона персонажу 1.`;
 document.getElementById("message").innerHTML = message;

  // Проверка, окончена ли игра
  if (health1 <= 0) {
    message = "Персонаж 2 победил!";
    document.getElementById("message").innerHTML = message;
    document.getElementById("button").innerHTML = true;
  }
});
