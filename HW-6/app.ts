// 5. Запросіть у користувача п’ятирозрядне число і визначте, чи є воно паліндромом.
// 7. Запросіть у користувача суму покупки та виведіть суму до сплати зі знижкою: від 200 до 300 – знижка 3%, від 300 до 500 – 5%, від 500 і вище – 7%.
// 8. Запросіть у користувача довжину кола та периметр ква- драта. Визначте чи може таке коло поміститися у зазначе- ний квадрат.
// 9. Задайте користувачеві 3 питання, у кожному питанні по 3 варіанти відповіді. За кожну правильну відповідь нарахо- вується 2 бали. Після запитань виведіть користувачеві кількість набраних балів.
// 10. Запросітьдату(день,місяць,рік)івиведітьнаступнудату. Врахуйте можливість переходу на наступний місяць, рік, а також високосний рік.

// 5. Запросіть у користувача п’ятирозрядне число і визначте, чи є воно паліндромом.

palindrom();

function palindrom(){

    let switcher: boolean = true;

    let count = 0;

    while(switcher){

        type numbers = 
        |"1"
        |"2"
        |"3"
        |"4"
        |"5"
        |"6"
        |"7"
        |"8"
        |"9"
        |"0";

        count ++;

        let userNumber: numbers = prompt("Назовите пятиразрядное число .");

        if(userNumber.length === 5){

            const revUserNumber = userNumber.split('').reverse().join('');
            console.log(revUserNumber);
            alert(revUserNumber);
             
            if(userNumber===revUserNumber){
                alert("Палиндром");

                switcher = !confirm ("Хочешь выйти?");
                if(switcher ){
                    
                }
                
            }else{
               alert("Не палиндром.")

               switcher = !confirm ("Хочешь выйти?");
               if(switcher ){
                   
               }
            }
           
        }else{
            alert("Число должно состоять из пяти цифр.")
        }
        if(count === 5){
            switcher = false;
        }

    }

}

// 7. Запросіть у користувача суму покупки та виведіть суму до сплати зі знижкою: від 200 до 300 – знижка 3%, від 300 до 500 – 5%, від 500 і вище – 7%.

discountPurchse();

function discountPurchse(){

    let switcher2 : boolean = true;

    while(switcher2){

        let amountPurchase:number = +prompt ("Какая сумма покупки?");

        if (amountPurchase >=200 && amountPurchase < 300){

            let discount = amountPurchase - (amountPurchase*3/100);
            alert(`Цена со скидкой ${discount}`);

        }else if (amountPurchase >= 300 && amountPurchase < 500){

            let discount = amountPurchase - (amountPurchase*5/100);
            alert (`Цена со скидкой ${discount}`); 

        }else if (amountPurchase >= 500 ){

            let discount = amountPurchase - (amountPurchase * 7/100);
            alert (`Цена со скидкой ${discount}`);

        }else{

            alert("Error...");

        }
        switcher2 = !confirm ("Хочешь выйти?");
        if(switcher2 ){
            
        }
    }
}

// 8. Запросіть у користувача довжину кола та периметр ква- драта. Визначте чи може таке коло поміститися у зазначе- ний квадрат.

const circumference:number = +prompt ("Введи длину окружности");
const perimeterOfTheSquare : number = +prompt("Введи периметр квадрата");





