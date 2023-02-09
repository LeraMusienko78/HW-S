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

let num1 = 20;
let counter = 0;


for (counter = 0; counter <= num1 ; counter++){

    if (counter % 2 !== 0){
        console.log ("[НЕЧЕТНЫЕ ЧИСЛА - ЦИКЛ FOR]" ,counter);
    }else{
    }
}

// 2.2) while:

let num2 = 20;
let coonter2 = 0;

while (coonter2 <= num2){

    coonter2++;

    if(coonter2 % 2 ===0){
        console.log("[ЧЕТНЫЕ ЧИСЛА - ЦИКЛ WHILE]" , coonter2);
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

    }  console.log(" Количество попыток сказать правду",i);
       alert(" Количество попыток сказать правду.")
    
   
}
else{
    alert(" Ну ладно...")
}

// 4) Output every simple number from 2 to 10;

// let num = 10;
// let i;
// let j;

// nextPrime:

// for (i = 2; i <= num ; i++) {

//     for (j = 2 ; j < i ; j++){
//         if ((i % j == 0))
//         continue nextPrime;
//     }
//     console.log(i);
    
// }

// 4) Output every simple number from 2 to 10;

let num = 10 ; 
let i ;
let j ;


for (i = 2 ; i < num ; i++){
    for(j = 2 ; j < i ; j++){

        if(i % j === 0){
            continue;
        }
    }
    console.log("[простое число]" ,i);
}

// 5) Get number from user and get factorial of this number

let numberUser = +prompt (" Number? ")

while(numberUser === "" || numberUser === null || numberUser === false || numberUser === NaN ){
    numberUser = prompt ("Number?");
}

let res = 1;
let sum = 0;
let radical;
let square;

for ( i = numberUser ; i > 0 ; i--){
    // if(i === 0) continue;
    res *= i;
    sum += i;
    radical = Math.sqrt(numberUser);
    square = numberUser*numberUser;
} 
console.log("[ФАКТОРИАЛ] " , res);
console.log("[СУММА] " , sum);
console.log("[КОРЕНЬ]" , radical);
console.log("[КВАДРАТ]" , square);





























