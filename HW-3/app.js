"use strict";

// 1) Via "for" console every odd number from 20
// 2) Replace "for" on "while"
// 3) Face-control
// const age = prompt("How old are you ?");

// if <= 18 => get over here
// if > 18 => get out of here

// until user <= 18 ask him about his age

// 4) Output every simple number from 2 to 10;
// 5) Get number from user and get factorial of this number
// 5 = 1 * 2 * 3 * 4 * 5 = 125

// * 1) *
// Via "for" console every odd number from 20

//  2.1) for:

let number1 = 0;

for (let number1 = 0; number1 <=20 ; number1++){
    if (number1 %2 !==0){
        console.log ("[НЕЧЕТНЫЕ ЧИСЛА - ЦИКЛ FOR]" ,number1);
    }else{
    }
}

// 2.2) while:

let number2 = 0;

while (number2 < 20){

    number2 ++;

    if(number2%2!=0){
        console.log("[НЕЧЕТНЫЕ ЧИСЛА - ЦИКЛ WHILE]" ,number2);
    }
    else{
    }
}

// 3) Face-control:

let userName = prompt ("Hello ! What is your name ");

while(userName === "" || userName === null ){
    userName = prompt ("Hello! What is your name! ");
}

alert(`${userName}  , очень приятно !` );

let question  =  confirm (`${userName  } , cкажешь свой возраст?`);

if (question == true){

    alert(" Ура ");

    const AGE = 18;
    let age;
    let i = 0;
    let isOn = true;

    while (isOn){

        i++;

        let userAge = +prompt ("Сколько тебе лет?");

        if (userAge === AGE){
            console.log(" Suitable age ! ");
            alert(" В точку!");

            isOn = false;
        }
        else if(userAge < 18){
            console.log( "Get over here ! ");
            alert("Мало");
        }
        else if (userAge > 18 && userAge <=120){
            console.log("get out of here");
            alert("Много");
        }
        else if (userAge > 120){
            console.log("Don't live that long");
            alert("Очень много !!!")
        }
        else{
            ("Error...");
            console.log("Error...")
            alert("Err...")
        }

        // console.log(" Количество попыток сказать правду",i);

    }  console.log(" Количество попыток сказать правду",i);
       alert(" Количество попыток сказать правду.")
    
    // while ( age != AGE || age === "" || age === null){
    
    //     i++;
    
    //     age = +prompt ("How old are you ?");
    
    //     if(age ===AGE){
    //         console.log ("18 ask him about his age");
    //         alert(age + " Как раз вовремя!");
    //     }
    
    //     else if(age < AGE){
    //         console.log ("[ < AGE ] " ,"Get over here");
    //         alert(age + " Ты еще мал!");
    //     }
    
    //     else if(age > AGE && age < 100){
    //         console.log ("[ > AGE ] " ,"Get out of here");
    //         alert(age + " Опоздал!");
    //     }
    //     else{
    //         console.log (" [ Oups... ] ");
    //         alert("Err... Уже вообще поздно!")
    //     }
    // }
    // console.log ("[Количество вводов ] " + i);
}
else{
    alert(" Ну ладно...")
}

// 4) Output every simple number from 2 to 10;

let num = 10;
let i;
let j;

nextPrime:

for (i = 2; i < num ; i++) {

    for (j = 2 ; j < i ; j++){
        if ((i % j == 0))
        continue nextPrime;
    }
    console.log(i);
}

// 5) Get number from user and get factorial of this number

let userNum = +prompt(`${userName} , Скажи свое число.`);
alert(userNum);

while (userNum === "" || userNum === null  || userNum< 0) {
    userNum = prompt(`${userName} , Скажи свое число.`);
}

    // alert("Факториал равен :")

function factorial(userNum){

    let res = 1;

    while(userNum--)

    res *= userNum +1;

    return res;
}
alert (factorial(userNum));






















