

// 1) condition is false ; 2) break;
// while (i < 10) {
//   console.log(i);
//   i++;
//   if (i === 7) {
//     break;
//   }
// }

// do ... while
// do {
//   console.log(i);
//   i++;
//   console.log("Here we are");
// } while (i === 0);

// for

// break ;
// continue;

// for (let i = 0; i < 10; i++) {
//   if (i === 5 || i === 7) continue;

//   console.log(i);
// }

// Fuzz Bizz
// end 100;
// Если число нацело делится на 3 , тогда выводи слово "Фаз"
// Если число нацело делится на 5 , тогда выводи слово "Бизз"
// Если число нацело делится на 3 и на 5 , тогда выводи "ФазБизз"

// for (let i = 0; i < 100; i++) {
//   //   console.log(i);
//   if (i % 3 === 0) {
//     console.log("Fuzz");
//   } else if (i % 5 === 0) {
//     console.log("Biz");
//   }
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("Fuzz Biz");
//   } else {
//     continue;
//   }
// }


// let isOn = true;
// let num = 10;

// nextPrime :

// for (let i = 2 ; i < num ; i++ ){

//     for(let j = 2 ; j < i ; j++){

//         if (i % j === 0){

//            continue nextPrime;
//         }
       
//     }console.log(i);
// } 

let isOn = true;

while(isOn){

    let number = +prompt ("назови число");

    if ( number != NaN ){

        // console.log(number);
        isOn = true;

    }else{
        console.log(number);
    }
}






