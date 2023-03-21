"use strite"

// 1) Create class Hero : damage , hp
// 1.1 ) What the raice of ur hero : Archer , Elf
// 1.2) if user hero === Archer : computer = elf , hero === Elf : computer = archer
// 2) Extend class Hero by Elf : magicKick() { return damage * 2  }
// Archer magicArrow(){ return damage * 2 / 1.2 * .4 * 2.2  }
// 3) Create while loop
// 4) Via random function pick who will attack
// 5) While hero['hp'] <= 0 : game continuous


class Hero {

    HP_BY_DEFAULT = 100;
    DAMAGE_BY_DEFAULT= 25;

    constructor(name, damage = this.DAMAGE_BY_DEFAULT, hp = this.HP_BY_DEFAULT){
        this.name = name;
        this.damage = damage;
        this.hp = hp;
    }
}

class Elf extends Hero{
    constructor(name, damage, hp){
        super(name, damage, hp);
    }
    magicKick(){
        return this.damage * 2;
    }
}

class Archer extends Hero{

    constructor(name,damage, hp){
        super(name,damage,hp);
    }
    magicArrow(){
        return ((this.damage * 2) / 1.2)* 0.4 * 2.2;
    }
}

let isRunning = true;

while(isRunning){
    const userPick = prompt(`
    Привет, за кого будешь играть?
    a) Archer
    b) Elf
    q) Exit
    `)

    const queue= random();

    switch (userPick.toLowerCase()){
        case "a":

        const archer = new Archer ("Hero");
        const machineElf = new Elf("Hero");

        battle(archer, machineElf, queue)

        console.log("[ARCHER]", archer);

        break;

        case "b":

        const elf = new Elf("Hero");
        const machineArcher = new Archer("Hero");

        battle(elf, machineArcher, queue)


        console.log("[ELF]", elf);
        break;

        case "q":

        isRunning = false;

        break;

        default:
            
        alert("Выбор из списка!");

        break;
    }
}

function battle (hero,machine, queue ){
    if(queue === "hero"){
        attackHero(hero,machine);
    }
    else{
        attackMachine(hero, machine);
    }
}

function random (){
    const value =  Math.random().toString().slice(2.3);
    if( value %2 ) return "hero";
    return "bot";
}

function attackHero (hero, machine){
    while (hero.hp > 0 || machine.hp > 0) {
        hero.hp -= machine.damage;
        machine.hp -= hero.damage;
        console.log("[MACHINE_HP]", machine.hp);
        console.log("[HERO_HP]", hero.hp);
    }
}

function attackMachine(hero, machine){
    while (hero.hp > 0 || machine.hp > 0) {
        machine.hp -= hero.damage;
        hero.hp -= machine.damage;
        console.log("[HERO_HP]", hero.hp);
        console.log("[MACHINE_HP]", machine.hp);
    }
}