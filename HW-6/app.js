"use strict";
// 5. Запросіть у користувача п’ятирозрядне число і визначте, чи є воно паліндромом.
// 7. Запросіть у користувача суму покупки та виведіть суму до сплати зі знижкою: від 200 до 300 – знижка 3%, від 300 до 500 – 5%, від 500 і вище – 7%.
// 8. Запросіть у користувача довжину кола та периметр ква- драта. Визначте чи може таке коло поміститися у зазначе- ний квадрат.
// 9. Задайте користувачеві 3 питання, у кожному питанні по 3 варіанти відповіді. За кожну правильну відповідь нарахо- вується 2 бали. Після запитань виведіть користувачеві кількість набраних балів.
// 10. Запросітьдату(день,місяць,рік)івиведітьнаступнудату. Врахуйте можливість переходу на наступний місяць, рік, а також високосний рік.
// 5. Запросіть у користувача п’ятирозрядне число і визначте, чи є воно паліндромом.
palindrom();
function palindrom() {
    let switcher = true;
    let count = 0;
    while (switcher) {
        count++;
        let userNumber = prompt("Назовите пятиразрядное число .");
        if (userNumber.length === 5) {
            const revUserNumber = userNumber.split('').reverse().join('');
            console.log(revUserNumber);
            alert(revUserNumber);
            if (userNumber === revUserNumber) {
                alert("Палиндром");
                switcher = !confirm("Хочешь выйти?");
                if (switcher) {
                }
                break;
            }
            else {
                alert("Не палиндром.");
                switcher = !confirm("Хочешь выйти?");
                if (switcher) {
                }
                break;
            }
        }
        else {
            alert("Число должно состоять из пяти цифр.");
        }
        if (count === 3) {
            switcher = false;
        }
    }
}
