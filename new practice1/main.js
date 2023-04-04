"use strict";

// прототип

const protoCar = {
    signal(){
        console.log(`${this.id} is signaling`)
    }
};

function Car(){
    this.id = String(Math.random());
    // this.signal = "Beep";
}

Car.prototype = protoCar;

const car = new Car();

// наследование

//------------------- UNIT--------------------- */

const unitPrototype = {
    move(){}
};

function Unit(hp){
    this.hp = hp;
}

Unit.prototype = unitPrototype;

// -------------------- archer -------------------- */

const archerPrototype = new Unit();
archerPrototype.shot = function (){};

function Archer (){
   
}
Archer.prototype = archerPrototype;

// -------------------- builder -------------------- */

const builderPrototype = new Unit();
builderPrototype.shot = function (){};

function Builder (){
   
}
Builder.prototype = builderPrototype;

// --------------- croco ---------------- //

const crocoPrototype = {
    tailblow(){},
    bite(){}
}

function Crocodile (view, age){
    this.view = "ALLIGATOR";
    this.age = 123;
}

const allig = new Crocodile();
console.log("[ALLIG]", allig);

// -------------- animal -----------------//

const animalPrototype = {
    breathe(){}
}

function Animal(name){
   this.name = "ANIMAL"
}
    
Animal.prototype = animalPrototype;

const animal = Animal();
console.log("[]ANIMAL", animal);

// --------------- lizard ------------------ //

const lizardProto = new Animal();

lizardProto.cutTail = function (){};

function Lizard (){};

Lizard.prototype = lizardProto;

// --------------- Croco -------------------- //

const crocoProto = new Lizard();

crocoProto.bite = function (){};

function Croco (){};

Croco.prototype = crocoProto;



