// 1) Create class Hero : damage , hp
// 1.1 ) What the raice of ur hero : Archer , Elf
// 1.2) if user hero === Archer : computer = elf , hero === Elf : computer = archer
// 2) Extend class Hero by Elf : magicKick() { return damage * 2  }
// Archer magicArrow(){ return damage * 2 / 1.2 * .4 * 2.2  }
// 3) Create while loop
// 4) Via random function pick who will attack
// 5) While hero['hp'] <= 0 : game continuous

// class Hero {
//     constructor(damage, hp){
//         this.damage = damage;
//         this.hp = hp;
//     }
//     attack(target){
//         target.hp -= this.damage;
//     }
// }

// class Elf extends Hero{
//     constructor(damage, hp , race){
//         super(damage,hp);
//         this.race = "Elf";
//     }
//     magicKick(){
//         return this.damage*2;
//     }
// }

// class Archer extends Hero{
//     constructor(damage, hp, race){
//         super(damage,hp);
//         this.race = "Archer";
//     }
//     magicArrow(){
//         return this.damage*2/1.2*0.4*2.2;
//     }
// }



// alert("Выбрать героя:");

// const heroRace = prompt ("Выбрать героя:");
// let user;
// let computer;

// if(heroRace === "Elf"){
//     user = new Elf (20, 100);
//     computer = new Archer (10,120);
// }
// else if (heroRace === "Archer"){
//     user = new Archer(10,120);
//     computer = new Elf (20,100);
// }


// while(user.hp > 0 ){
//     let attacker ;
//     if(Math.random()<0.5){
//         attacker = user;
//         console.log("Attacking!")
//     }else{
//         attacker = computer;
//         console.log("Comp is attacking!");
//     }

// // console.log(attacker);

// }


// function getRandomAttacer(){
//     const randomNum = Math.random();
//     console.log(randomNum);
//     if(randomNum<0.5){
//         return "user";
//     }else{
//         return "comuter";
//     }
// }

// const attacers = getRandomAttacer();
// console.log(attacers);

// 1) Create class Hero : damage , hp +
// 1.1 ) What the raice of ur hero : Archer , Elf +
// 1.2) if user hero === Archer : computer = elf , hero === Elf : computer = archer +
// 2) Extend class Hero by Elf : magicKick() { return damage * 2  } +
// Archer magicArrow(){ return damage * 2 / 1.2 * .4 * 2.2  } +
// 3) Create while loop +
// 4) Via random function pick who will attack
// 5) While hero['hp'] <= 0 : game continuous

// const ARCHER = "archer";
// const ELF = "elf";

// class Hero {
//   constructor(raice) {
//     if (raice === ARCHER || raice === ELF) this.raice = raice;
//   }
// }

// class Machine extends Hero {
//     constructor(raice){
//         super(raice)
//     }
// }

// const hero = new Hero();

// function Employee(name, age, salary) {
//   const thiss = {};

//   thiss.name = name;
//   thiss.age = age;
//   thiss.salary = salary;

//   return thiss;
// }

// const john = new Employee("John", 23, 2200);

// console.log("[john]", john);

class Hero {
    // Field , attr
    HP_BY_DEFAULT = 100;
    DAMAGE_BY_DEFAULT = 25;
  
    constructor(name, damage = this.DAMAGE_BY_DEFAULT, hp = this.HP_BY_DEFAULT) {
      this.name = name;
      this.damage = damage;
      this.hp = hp;
    }
  }
  
  class Elf extends Hero {
    constructor(name, damage, hp) {
      super(name, damage, hp);
    }
    magicKick() {
      return this.damage * 2;
    }
  }
  
  class Archer extends Hero {
    constructor(name, damage, hp) {
      super(name, damage, hp);
    }
  
    magicArrow() {
      return ((this.damage * 2) / 1.2) * 0.4 * 2.2;
    }
  }
  
  let isRunning = true;
  
  while (isRunning) {
    const userPick = prompt(`
        Hello , enter raice that you wanna pick : 
        a) Archer 
        b) Elf
        q) Qutit 
    `);
  
    const queue = random();
  
    switch (userPick.toLowerCase()) {
      case "a":
        const archer = new Archer("Hero");
        const machineElf = new Elf("Hero");
  
        battle(archer, machineElf, queue);
  
        console.log(archer);
        break;
      case "b":
        const elf = new Elf("Hero");
        const machineArcher = new Elf("Hero");
  
        battle(elf, machineArcher, queue);
  
        console.log(elf);
        break;
      case "q":
        isRunning = false;
        break;
  
      default:
        alert("Try once again!");
        break;
    }
  }
  
  function battle( hero, machine, queue) {

    if (queue === "hero") {
      while (hero.hp > 0 || machine.hp > 0) {
        hero.hp -= machine.damage;
        machine.hp -= hero.damage;
  
        console.log("[MACHINE_HP]", machine.hp);
        console.log("[HERO_HP]", hero.hp);
      }
    } else {
      while (hero.hp > 0 || machine.hp > 0) {
        machine.hp -= hero.damage;
        hero.hp -= machine.damage;
  
        console.log("[HERO_HP]", hero.hp);
        console.log("[MACHINE_HP]", machine.hp);
      }
    }
  }
  
  function random() {
    const value = Math.random().toString().slice(2, 3);
  
    if (value % 2) return "hero";
  
    return "bot";
  }

  function heroAndMach (){

    while (hero.hp > 0 || machine.hp > 0 ){
        machine.hp -= hero.damage;
        hero.hp -= machine.damage;

        console.log("HERO-HP" , hero.hp);
    }
  }


