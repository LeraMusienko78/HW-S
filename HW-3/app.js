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

//  * for:

// let number1 = 0;


// for (let number1 = 0; number1 <=20 ; number1++){
//     if (number1 %2 !==0){
//         console.log ("[НЕЧЕТНЫЕ ЧИСЛА]" ,number1);
//     }else{
//         console.log ("[Четные числа]" , number1);
//     }
// }

// * while:

let number2 = 20;
// let i = 0

while (number2%2 !== 0){
    i++;
    // number2 ++;
    console.log(number2);
}

// * Face-control:

let userName = prompt ("Hello ! What is your name ");

while(userName === "" || userName === null){
    userName = prompt ("Hello! What is your name! ");
}

alert(`${userName}  , очень приятно !` );


const AGE = 18;
let age;
let i = 0;


while ( age != AGE || age === "" || age === null){

    i++;

    age = +prompt ("How old are you ?");

    

    if(age ===AGE){
        console.log ("18 ask him about his age");
        alert(age + " Как раз вовремя!");
    }

    else if(age < AGE){
        console.log ("[ < AGE ] " ,"Get over here");
        alert(age + " Ты еще мал!");
    }

    else if(age > AGE && age < 100){
        console.log ("[ > AGE ] " ,"Get out of here");
        alert(age + " Опоздал!");
    }
    else{
        console.log (" [ Oups... ] ");
        alert("Err... Уже вообще поздно!")
    }
}

console.log ("[Количество вводов ] " + i);










