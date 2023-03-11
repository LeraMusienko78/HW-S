// 1) Create class Hero : damage , hp
// 1.1 ) What the raice of ur hero : Archer , Elf
// 1.2) if user hero === Archer : computer = elf , hero === Elf : computer = archer
// 2) Extend class Hero by Elf : magicKick() { return damage * 2  }
// Archer magicArrow(){ return damage * 2 / 1.2 * .4 * 2.2  }
// 3) Create while loop
// 4) Via random function pick who will attack
// 5) While hero['hp'] <= 0 : game continuous

class Hero {
    constructor(damage, hp){
        this.damage = damage;
        this.hp = hp;
    }
    attack(target){
        target.hp -= this.damage;
    }
}

class Elf extends Hero{
    constructor(damage, hp , race){
        super(damage,hp);
        this.race = race;
    }
    magicKick(){
        return this.damage*2;
    }
}

class Archer extends Hero{
    constructor(damage, hp, race){
        super(damage,hp);
        this.race = race;
    }
    magicArrow(){
        return this.damage*2/1.2*0.4*2.2;
    }
}

const elf = new Elf(10, 100, "Elf");
console.log("[ELF]", elf);

const archer = new Archer(10, 100, "Archer");
console.log("[ARCHER]", archer);

let user;
let computer;

if (user === archer){
    computer === elf;
}else if( user === elf){
    computer === archer;
}


function getRandomAttacer(){
    const randomNum = Math.random();
    console.log(randomNum);
    if(randomNum<0.5){
        return "user";
    }else{
        return "comuter";
    }
}

const attacers = getRandomAttacer();
console.log(attacers);


