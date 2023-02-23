// let isRunning : boolean = true ; 

// while(isRunning){

//     const number1: number = +prompt ("Введи число : ");
//     const number2: number = +prompt ("Введи число : ");

//     validate (number1 ,number2 )

//     if(number1 === 23)
//     break;
// }

// function validate (x:number , y:number){
//     if(!isNaN (x) && !isNaN (y)){
//         console.log("Valid");

//         const symbol = prompt (" 1)Sub 2)Add 3)Div 4)Mult");

//         calculate(x , y , symbol);

//     }
//     else{
//         console.log("Invalid");
//         isRunning = confirm("Хочешь выйти?");
//     }
// }

// function calculate (a:number , b:number, symbol:string){

//     switch (symbol){

//         case "1":
//             console.log(a - b);

//           break;

//         case "2":
//             console.log(a + b);

//           break;

//         case "3":
//             console.log(a * b);

//           break;

//         case "4":
//             console.log(a / b);

//           break;

//         default:

//          console.log("Error...");

//             break
//     }
// }



// Calculator

// let isRunning2 = true;

// while(isRunning2){

//     const userNumber1 = +prompt ("Назовите первое число:");
//     const userNumber2 = +prompt ("Назовите второе число:");
//     const userSymbol = prompt ("Введите знак");

//     calculete(userNumber1, userNumber2, userSymbol);
    
// }

// function isExit (choose){
//     return choose;
// }

// function add(a, b){
//     return a + b;
// }

// function subtr(a, b){
//     return a - b;
// }

// function multiply(a, b){
//     return a * b;
// }

// function div(a, b){
//     return a / b;
// }

// function validate (a,b){
//     if(!isNaN(a) && !isNaN(b)){
//         console.log("Valide");
//         alert("Продолжайте")
//     }
//     else{
//         console.log("Invalide !");
//         alert ("Введите корректные данные !");
        
//     }
// }

// function calculete(number1, number2 , symbol){

//     validate(number1, number2);

//     let result;

//     switch (symbol){
//         case "+":
//             result = add(number1,number2);
//             alert(result);
//             console.log(result);
//             break;

//         case "-":
//             result = subtr(number1,number2);
//             alert(result);
//             break; 

//         case "*":
//             result = multiply(number1,number2);
//             alert(result);
//             console.log(result);
//             break; 
                
//         case "/":
//             result = div(number1,number2);
//             alert(result);
//             console.log(result);
//             break; 
            
//         default:
//             console.error("Error");
//             errorMessage("Error...");
//             break;

//     }

// }

//          ***   CALCULETE  ***


let isRunning: boolean = true ;

while(isRunning){

    const userNumber1:number = +prompt ("Назовите первое число:");
    const userNumber2:number = +prompt ("Назовите второе число:");
    const userSymbol: string = prompt ("Введите знак");

    // calculate(userNumber1, userNumber2, userSymbol);

    isRunning = !confirm("Хочешь выйти ?");
    if(isRunning){

    }else{
        alert("Goodbay");
    }
   
}

// function calculate (x, y, symbol){

//     const symbol:string = ("Выбрать арифметический знак: \n 1) +  \n 2) -  \n 3) * \n 4) /");

// }










