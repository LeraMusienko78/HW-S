//  Function

// decl

// function sum1 (num1, num2){
//     return num1 + num2
// }
// const result = sum1(13,10);
// console.log("[RESULT]",result);

// // Express 

// const sum2 = function(num1, num2){
//     return num1 + num2;
// };
// const result2 = sum2(30,30);
// console.log("[RESULT]",result2);

// Anon

// const number1 = +prompt("Number1");
// const number2 = +prompt("Number2");

// (function(num1,num2){
//     console.log(num1+num2);
// })(number1,number2);

// const result3 = (function(num1,num2){
//     return num1 + num2;
// })(number1,number1);

// console.log("[RESULT]",result3);

//  Callback

// function callback(){
//     return "Hello World";
// }

// function call (callback){
//     return "*** " + callback() + " ***"
// }

// const result4 = call(callback);
// console.log("[RESULT]",result4);

// // ! Arrow =>

// const arrowFunction = (a, b) => a + b;
// const result5= arrowFunction(15,14);
// console.log(result5);

// const filterNum =[4, 35, 18, 45, 12].filter((num) => num >18);
// console.log(filterNum);


// function multiplyBy2DividBy4(num){
//    const result1 = num*2;

//    return () => result1 / 4;
// }

// const result1  =  multiplyBy2DividBy4(8)(); 
// console.log(result1);

// function mulBy4DivBy2(num){
//     const result2 = num*4;
//     return(() =>{
//         return result2/2;
//     })();
// }
// const result2  = mulBy4DivBy2(4);
// console.log(result2);

//  HOF, clousures, recursion

// ******************* ARR METODS **************

// Reduce

// const newArr =  [12,45,56,100].reduce((total,current)=>{
//     total += current;
//     return total;
// },0);

// const numbers = [12,45,56,100]
// let counter = 0 ;
// for (const number of numbers){
//     counter +=number;
// }

// console.log(newArr);
// console.log (counter);

// // Concat

// // const arr = [9,7,3,6,].concat([1,4,2,8,5]).sort().reverse();

// // console.log(arr);

// //  IndexOf

// const arr = ["Jonn","Bob","Flint","Sem","Corgy"];
// const indexBob = arr.indexOf("Bob");
// console.log("[INDEX-BOB]",indexBob);

// const arrNoBob = arr.slice(indexBob+1 ,indexBob+2);
// console.log("[ARR-NO-BOB]",arrNoBob);

// // Slise 

// const sliceArr = [23,54,32,16,18,98].slice(2,3);

// console.log(sliceArr);

// // Include

// const arrStudents = ["Jonn","Bob","Flint","Sem","Corgy"];
// console.log(arrStudents.includes("Jon"));

// // Splise

// arrStudents.splice(1,1);
// console.log(arrStudents);

// // Join

// const strArrStutents = arrStudents.join(" - ");
// console.log("[STROKA --]",strArrStutents);

// const sem  = arr.findIndex((obj) => obj === "Sem");
// console.log("[SEM]",sem);



// Factory funcion

function Human(name, age){
    return {
        name: name,
        age: age,
        // singIn: () =>console.log("Hellou world")
    };
};

const person1 = Human("Oleg",13);
// person1.singIn();
console.log(["PERSON1", person1]);

function Admin (name, age, skills, email, password){
    const person = Human(name, age);

    const admin = {}

    admin.skills = skills;
    admin.email = email;
    admin.password = password;

    const bob = Object.assign(person,admin );
    console.log(bob);

    return person;
};

const admin1 = Admin("Jonn", 23, ["HTML","CSS","JAVA"],"j@.ua",2323);
// console.log("[admin1]", admin1);

const admin2 =Admin("Mike", 43, ["Piton","JS","Upiter"],"m@.ua",4343);

console.log(["ADMIN1"], admin1);
console.log(["ADMIN2"], admin2);

function User (name, age, email, password){
    return Object.assign(Human(name, age),{
        email,
        password,
        // singIn: ()=> console.log("Is user?"),
    });
}

const user1 = User("Lera", 44, ["L@.ua", 4444]);
const user2 = User("Vadik", 44, "V@.ua",4545);

console.log (["USER1"],user1);
console.log (["USER2"],user2);

// admin1.singIn();
// user1.singIn();


// -----------------------------------------------------------------------------
//         ********** HOMWORK ***********
// 
const allInOne = [];

const auto = 
    {
    truck: [],
    sedan: [],
   }
;

console.log("[AUTO]" ,auto);

// auto => label , wheels , price

function Auto(label, price, color){
    return {
        label : label,
        price : price,
        color: color,
    }
}

function TypeSedan(){
    return{
        type: "SEDAN",
        wheels: 4,
        signal: "beeeep"
    }
}

function TypeTruck(){
    return{
        type: "TRUCK",
        wheels: 8,
        signal: "WoooooW"
    }
}


// function auto(label,price) {
//   const auto = {
//     label: label,
//     wheels: 4,
//     price: price
//   };
//   return auto;
// }

// label
// wheels
// price
// *-----------
// type = sedan
// color = color
// wheels = 4
// signal () => beeeep

function Sedan(label,price,color) {
    
    const autoSedan = Auto(label, price, color);
    const typeSedan = TypeSedan();

    const sedan = Object.assign(autoSedan,typeSedan );

    auto.sedan.push(sedan);
    return sedan;

  // push into auto.sedan
  // return ;
}
const sedanPejo = Sedan("Pejo","10000$","RED");
const sedanReno = Sedan("Reno", "15000$", "Black");
const sedanVolvo = Sedan ("Volvo","20000$","Pink");


// label
// wheels
// price
// *-----------
// type = truck
// color = color
// wheels = 8
// signal () => WoooooW

function Truck(label, price, color) {

    const autoTruck = Auto(label, price, color);
    const typeTruck = TypeTruck();

    const truck = Object.assign(autoTruck,typeTruck );

    auto.truck.push(truck);
    return truck;
  // push into auto.truck
  // return ;
}

const truckDaf = Truck("DAF","120000$","YELLOU");
const truckScania = Truck("SCANIA", "150000$", "WHITE");
const truckIveco = Truck ("IVECO","80000$","BLUE")



// Amount of trucks / sedans => by 3

//* 1) get all trucks label and print it to the console
//* 2) How much cost : all sedans , all trucks , and then all auto
//* 3) Concat arr truck and sedan in allInOne
//* 4) Get from allInOne only truck , only sendan
//* 5) Find elem by index '1' in allInOne and next + prev => [prev , 1 ,next]















