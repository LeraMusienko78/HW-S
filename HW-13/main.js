import { Customer } from "./components/Customer/Customer.js";
import { Manager } from "./components/Manager/Manager.js";
import { afterDeal } from "./components/deals/deals.js";

const pizzacountry  = new Manager ("Pizza Country", 100000  );

const lera = new Customer ("Lera", "Lera@.ua", 121212, 200);
const jonn = new Customer ("Jonn", "Jonn@.ua", 222222, 300);

const priceProduct1 = 50;
const priceProduct2 = 20;


const currentBalansLera = afterDeal(lera.wallet, priceProduct1);

const currentBalansJonn = afterDeal(jonn.wallet, priceProduct2);


const managerBalans = priceProduct1+ priceProduct2 + pizzacountry.currentManagerMoney;

console.log("[NEWCUSTOMER]", lera);
console.log ("[PIZZACOUNTRY]", pizzacountry);

console.log ("[MANAGERBALANS]", managerBalans);
console.log ("[CUSTOMERBALANS]", currentBalansLera);
console.log ("[CUSTOMERBALANS]", currentBalansJonn);



