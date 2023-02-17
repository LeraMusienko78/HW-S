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

        //  *** Не работают типы numbers ???? ***

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


inscribedCircle();

function inscribedCircle(){

    let switcher3: boolean = true ;



    while(switcher3){

        // *** Почему не преобразовывает в числа? Ввожу буквы , пишет NaN  и пропускает дальше *** //

        const circumference: number = +prompt ("Введи длину окружности"); 

        const perimeterOfTheSquare: number = +prompt("Введи периметр квадрата");

        radiusSide();

        function radiusSide (){
            let radiusCirc = circumference /(2 * Math.PI) ;
             alert (`Radius = ${radiusCirc}`);

            let sideOfASquare = perimeterOfTheSquare/4;
             alert (`Side of square = ${sideOfASquare}`);

             if( radiusCirc <=sideOfASquare/2){
                alert("Окружность входит в квадрат.");

                switcher3 = !confirm ("Хочешь выйти?");
                if(switcher3 ){
                }

            }else{
                alert("Окружность не вхотит в квадрат.")

                switcher3 = !confirm ("Хочешь выйти?");
                if(switcher3 ){
                    
                }
            }

        }
    }
}

// 9. Задайте користувачеві 3 питання, у кожному питанні по 3 варіанти відповіді. За кожну правильну відповідь нарахо- вується 2 бали. Після запитань виведіть користувачеві кількість набраних балів.




test();
 
function test(){

    let switcher4 : boolean = true ;

    while (switcher4){

        const question1: string | null =  ("Сколько дней в неделе ?");
        alert(question1);
        const answerUser1 : string | null = prompt ("Выбрать один из вариантов : \n a) 7  \n b) 10 \n c) 3 ");
        let res1:number = +answer1 (question1, answerUser1);
        alert(res1);


        const question2: string| null=  ("Сколько месяцев в году ?");
        alert(question2);
        const answerUser2 : string | null = prompt ("Выбрать один из вариантов : \n a) 24 \n b) 16 \n c) 12 ");
        let res2:number = +answer2 (question2 , answerUser2);
        alert (res2);

        const question3: string| null =  ("Какой месяц в году самый короткий ?");
        alert (question3);
        const answerUser3 : string | null = prompt ("Выбрать один из вариантов : \n a) январь \n b) февраль \n c) март");
        let res3:number = +answer3 (question3 , answerUser3) ;
        alert (res3);

        let sumRes:number = res1 + res2 + res3 ;
       

        if (sumRes === 6){
            alert(`Вы набрали : ${sumRes}  баллов ! Вы супермозг`);
        }else if (sumRes === 4){
            alert(`Вы набрали : ${sumRes}  баллов ! Вам надо подучиться!`);
        }else if (sumRes === 2){
            alert(`Вы набрали : ${sumRes}  баллов ! Вам учиться многому!`);
        }else{
            alert(`Вы дурень !!! `)
        }

        switcher4 = !confirm ("Хочешь выйти?");
        if(switcher4 ){
            
        }

        // break;

    }
}

function answer1 (quest1 , answ1){

    if(quest1){
        if (answ1 === "a"){
            return 2;
        }else if(answ1 === "b" || answ1 === "c"){
            return 0;
        }else{
            alert("Error...");
        }
    } else{
        // alert("Error...");
    }
   
}

function answer2 (quest2 , answ2){

    if(quest2){
        if (answ2 === "c"){
            return 2;
        }else if(answ2 === "a" || answ2 === "b"){
            return 0;
        }else{
            alert("Error...");
        }
    } else{
        // alert("Error...");
    }
}

function answer3 (quest3 , answ3){

    if(quest3){
        if (answ3 === "b"){
            return 2;

        }else if(answ3 === "a" || answ3 === "c" ){
            return 0;

        }else{
            alert("Error...");
        }
    }else{
        // alert("Error...");
     }
}

















