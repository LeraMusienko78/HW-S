export class Manager{

    constructor(managerName, managerMoney){
        this.managerName = managerName;
        this.managerMoney = managerMoney;
       
    }
    get currentManagerMoney(){
        return this.managerMoney;
    }
    set currentManagerBalans (money){
        this.managerMoney = money;
    }
}