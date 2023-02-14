"use strict";
// 1. Запросіть у користувача його вік та визначіть, ким він є: дитиною (0–12), підлітком (12–18), дорослим (18–60) або пенсіонером (60– ...).
// 2. Запросіть у користувача число від 0 до 9 і виведіть йому спеціальний символ, який розташований на цій клавіші (1–!, 2–@, 3–# тощо).
// 3. Запросіть у користувача тризначне число та перевірте чи є в ньому однакові цифри.
// 4. Запросіть у користувача рік та перевірте чи є він високо- сним. Високосний рік або кратний 400, або кратний 4 і при цьому не кратний 100.
// 5. Запросіть у користувача п’ятирозрядне число і визначте, чи є воно паліндромом.
// 6. Напишіть конвертор валют. Користувач вводить кількість USD, вибирає в яку валюту хоче перекласти: EUR, UAN або AZN, і отримує відповідну суму.
// 1. Запросіть у користувача його вік та визначіть, ким він є: дитиною (0–12), підлітком (12–18), дорослим (18–60) або пенсіонером (60– ...).
let switcher = true;
while (switcher === true) {
    const userAge = +prompt(" Скажи свой возраст?");
    if (userAge > 0 && userAge < 12) {
        console.log("Дитина");
        alert("Дитина");
    }
    else if (userAge >= 12 && userAge < 18) {
        console.log("Пiдлiток");
        alert("Пiдлiток");
    }
    else if (userAge >= 18 && userAge < 60) {
        console.log("Дорослий");
        alert("Дорослий");
    }
    else if (userAge >= 60) {
        console.log("Пенсионер");
        alert("Пенсионер");
        switcher = false;
    }
    else {
        alert("Error...");
    }
}
// 2. Запросіть у користувача число від 0 до 9 і виведіть йому спеціальний символ, який розташований на цій клавіші (1–!, 2–@, 3–# тощо).
let switcher2 = true;
while (switcher2 === true) {
    const userNumber = +prompt(" Введи число от 0 до 9 ");
    if (userNumber) {
        switch (userNumber) {
            case 1:
                console.log("!");
                alert("!");
                switcher2 = !confirm("Хочешь выйти?");
                if (switcher2) {
                    break;
                }
                break;
            case 2:
                console.log("@");
                alert("@");
                switcher2 = !confirm("Хочешь выйти?");
                if (switcher2) {
                    break;
                }
                break;
            case 3:
                console.log("#");
                alert("#");
                switcher2 = !confirm("Хочешь выйти?");
                if (switcher2) {
                    break;
                }
                break;
            case 4:
                console.log("$");
                alert("$");
                switcher2 = !confirm("Хочешь выйти?");
                if (switcher2) {
                    break;
                }
                break;
            case 5:
                console.log("%");
                alert("%");
                switcher2 = !confirm("Хочешь выйти?");
                if (switcher2) {
                    break;
                }
                break;
            case 6:
                console.log("^");
                alert("^");
                switcher2 = !confirm("Хочешь выйти?");
                if (switcher2) {
                    break;
                }
                break;
            case 7:
                console.log("&");
                alert("&");
                switcher2 = !confirm("Хочешь выйти?");
                if (switcher2) {
                    break;
                }
                break;
            case 8:
                console.log("*");
                alert("*");
                switcher2 = !confirm("Хочешь выйти?");
                if (switcher2) {
                    break;
                }
                break;
            case 9:
                console.log("(");
                alert("(");
                switcher2 = !confirm("Хочешь выйти?");
                if (switcher2) {
                    break;
                }
                break;
            case 0:
                console.log(")");
                alert(")");
                switcher2 = !confirm("Хочешь выйти?");
                if (switcher2) {
                    break;
                }
                break;
        }
    }
    else {
        console.log("Error...");
        alert("Error...");
    }
}
// 3. Запросіть у користувача тризначне число та перевірте чи є в ньому однакові цифри.
// let switcher3:boolean =  true;
// while (switcher3 === true){
//     let userThreeDigitNumber :string  = prompt ("Введи трехзначное число.");
//     console.log(userThreeDigitNumber);
//     alert(userThreeDigitNumber);
//     alert(userThreeDigitNumber.length);
//     for(let i = 0; i < userThreeDigitNumber.length ; i++){
//         console.log(userThreeDigitNumber[i]);
//     }
// }
// 4. Запросіть у користувача рік та перевірте чи є він високо- сним. Високосний рік або кратний 400, або кратний 4 і при цьому не кратний 100.
let switcher4 = true;
while (switcher4 === true) {
    let year = +prompt("Введите свой год рождения ");
    if (year) {
        if (year % 400 === 0 && year % 100 !== 0) {
            alert("Год високосний");
            console.log("Високосний ");
        }
        else if (year % 4 === 0) {
            alert("Год високосний");
            console.log("Високосний ");
        }
        else {
            alert("Год не високосний.");
            console.log("Обічній");
        }
        switcher4 = confirm("Хочешь выйти?");
        if (switcher4) {
            alert("Goodbay");
            break;
        }
        // else{
        //   year  = +prompt ("Введите свой год рождения ");
        // }
    }
    else {
        alert("Error...");
    }
}
