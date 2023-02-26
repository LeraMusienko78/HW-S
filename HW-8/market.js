"use strite"

// ************* MARKET *************

// const products = [
//  {
//     id :creatId(),
//     label : " Samsung",
//     img: "https://content1.rozetka.com.ua/goods/images/big/253281547.jpg",
//     price : 2323 +"$",
//     description: `
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe odio officiis molestias quo voluptatibus facere provident atque blanditiis laboriosam, doloremque in. Sed.
//     `,
//  },
//  {
//     id : creatId(),
//     label : " LG",
//     img: "https://content1.rozetka.com.ua/goods/images/big/253281547.jpg",
//     price : 1323 +"$",
//     description: `
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe odio officiis molestias quo voluptatibus facere provident atque blanditiis laboriosam, doloremque in. Sed.
//     `,
//  },
//  {
//     id : creatId(),
//     label : "Nokia",
//     img: "https://content1.rozetka.com.ua/goods/images/big/253281547.jpg",

//     price : 3323 +"$",

//     description: `
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe odio officiis molestias quo voluptatibus facere provident atque blanditiis laboriosam, doloremque in. Sed.
//     `,
//  },

// ];





// console.log(products);

// function creatProdukt(lb, img, prise, desc, id = creatId()){
//     return{
//         label: lb,
//         image: img,
//         price: prise,
//         description: desc,
//         id: id
//     };
// }

// function creatId(){
//    return "id:" + Math.random().toString().slice(3,8);
// }

// console.log("[products[0]]", products[0]);

// const sony = creatProdukt(
//     "Sony",

//     "https://m.media-amazon.com/images/I/31Uq-TT9-xL.jpg"
//     ,
//     2325 + " $",
//     `
//     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe odio officiis molestias quo voluptatibus facere provident atque blanditiis laboriosam, doloremque in. Sed.
//     `,
// );

// const label = prompt (" Название продукта : ");
// const price = prompt ("Цена продукта : ");
// const image = prompt ("Изображение : ")
// const description = prompt ("Описание продукта : ");

// const userProdukt = creatProdukt(label, image, image, description);

// products.push(userProdukt);

// products.push(sony);



// for(const produkt of products){

//     app.insertAdjacentHTML(
//         "afterbegin",
//         `
//         <h2> ${produkt.label}</h2>
//         <img src = "${produkt.img}"/>

//         <p>${produkt.description.slice(0,50)}</p>

//         <div>
//           <span> Price :</span>
//           <span>${produkt.price}</span>
//         </div>

//         <button>Bye !</button>
//        `
//     );
// }



// 1) Login(login, password);
// 2) Register(login, password);
// 3) Show products (products[])
// 4) Profile:
//  if admin => add produkt, edit product, delete product
//  if user => login , pass

// 5) Exit

const products = [
 {
    id :creatId(),
    label : " Samsung",
    img: "https://content1.rozetka.com.ua/goods/images/big/253281547.jpg",
    price : 2323 +"$",
    description: `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe odio officiis molestias quo voluptatibus facere provident atque blanditiis laboriosam, doloremque in. Sed.
    `,
 },
 {
    id : creatId(),
    label : " LG",
    img: "https://content1.rozetka.com.ua/goods/images/big/253281547.jpg",
    price : 1323 +"$",
    description: `
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis saepe odio officiis molestias quo voluptatibus facere provident atque blanditiis laboriosam, doloremque in. Sed.
    `,
 },
];

let isRunning = true;

let userId = false;

// let isLoggedIn = false;

const users = [
    {
        id: creatId(),
        login: "kir",
        password: "2323",
        isAdmin: true,
    },
    {
        id: creatId(),
        login: "lera",
        password: "1616",
        isAdmin: true,
    },
];

while(isRunning){
    // const currentUser = {};

    const userChoouse = prompt (`
    1) Login
    2) Register
    3) Show products
    4) Profile
    5) Exit

    `);

    switch(userChoouse){
        case "1":
            const login = prompt ("Enter your login : ");
            const password = prompt ("Enter your password : ");

            userId = getUserID(login, password, users);

            console.log(userId);

          break;

        case "2":
            const newAccountLogin = prompt ("Enter your login :");
            const newAccountPassword = prompt ("Enter your password :");

            userId = register(newAccountLogin, newAccountPassword, users);


          break;

        case "3":
            showProducts(products);

          break;

        case "4":
            if(!userId){
            console.error(("Создай аккаунт перед авторизацией!"));
            } 

            console.log(userId);

          break;

        case "5":
            isRunning = false;
          break;

        default :
        break;
    }
}
function getUserID(log, pass, arr){
    let isLoggedIn =  false;

    
    for(const item of arr){
        if(item.login === log && item.password === pass){
            isLoggedIn = true;
            return item;
        }
    }
    if(!isLoggedIn ) {
        console.error ("Создай аккаунт перед авторизацией!");

        return null;
    }
}

function register (log, pass , arr ){
    const newUser = {
        id: creatId(),
        login: log,
        password: pass,
        isAdmin: false,
    };

   arr.push(newUser);

   return newUser;
}

function showProducts (arr){
    console.table(arr)
}

function creatId(){
    return "id:" + Math.random().toString().slice(3,8);
}











