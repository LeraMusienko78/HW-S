// class onli
// if class solve several problems sub-system

class HumanDB{
    humanDB = [];

    getHuman(){
        console.log(this.humanDB);
    }

    saveHuman(human){
        this.humanDB.push(human);
    }
}

class Human{
    // !  anmalsDB = [] NOT SINGL; 

    constructor(name){
        this.name = name;
    }
    get humanName(){
        return this.name;
    }

    saweanHuman(human){}
}

// ! Open-closed prinsiple

class AnimalDB{
    animalDB = [];

    get animalDataBase(){
        return this.animalDB;
    }

    saveAnimal (animal){
        this.animalDB. push(...animal);
    }
}

class Animal {
    constructor(name){
        this.name = name;
    }

    makeSound (){
        return "Huck";
    }

    get animal() {
        return this;
    }
}

class Monkey extends Animal{
    constructor (name){
        super (name);
    }

    makeSound (){
        return "Ua a a";
    }
}

class Pig extends Animal{
    constructor (name){
        super (name);
    }

    makeSound (){
        return "Hro hro";
    }
}

const animalDB = new AnimalDB();

animalDB.saveAnimal([new Monkey("Mike"), new Pig ("Peppa")]);

const monkeySound = animalDB.animalDB[0].makeSound();
const pigSound = animalDB.animalDB[1].makeSound();

console.log("[monkeySound]", monkeySound);
console.log("[pigSound]", pigSound);

// console.log(
//  "[animalDB.animalDB[0].makeSound()]" ,
//   monkeySound  
// );


// ! BAD PRACTICE

// animalDB.saveAnimal([
//     new Animal ("Monkey"),
//     new Animal ("Cat"),
//     new Animal ("Pig"),
// ]);

// const catSound =  animalDB.animalDB[1].makeSound();
// console.log("[catSound]", catSound);

console.log ("[animalDB]", animalDB.animalDataBase);

// ! BAD PRACTIS

// function AnimalSound (animalArr){
//     for(let i = 0; i < animalArr ; i++){
//         if (animalArr[i].name === "Monkey"){
//             return ("Ua a a");
//         }
//         if (animalArr[i].name === "Cat"){
//             return ("Miu-miu");
//         }
//         if (animalArr[i].name === "Pig"){
//             return ("Hro-hro");
//         }
//     }
// }

// class Discount {
//     giveDiscount (){
//         if()
//     }
// }

class Discount {
    getDiscount(price) {
        return price * 0.2;
    }
}

class SilverDiscount extends Discount {
    getDiscount(price) {
        return super.getDiscount(price) * 1.5;
    }
}

class VIPDiscount extends Discount {
    getDiscount(price) {
        return super.getDiscount(price) * 2;
    }
}

// ! liskov

function speachLength(array){
    for(let i = 0; i < array.lentgh; i++){
        const element = array [i];

        const soundLength =  element.makeSound().lentgh;

        return soundLength;
        
    }
}

