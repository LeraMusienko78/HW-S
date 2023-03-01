// import "./public/style/style.css";

// "use struct";

// const productsDOM = document.querySelector("#products");

// const TV = document.querySelector("#TV");
// const smartphone = document.querySelector("#Smartphone");

// const categories = [
//   "Smartphone",
//   "TV",
// ];

// const products = [
//   {
//     id : createID(),
//     label : "Samsung",
//     category : getFirstItem(categories,getSmartphone),
//     imageUrl: "https://content1.rozetka.com.ua/goods/images/big/263968708.jpg"
//   },
//   {
//     id : createID(),
//     label : "Philips",
//     category : getFirstItem(categories,getTV),
//     imageUrl: "https://images.philips.com/is/image/PhilipsConsumer/50PUS8556_12-IMS-ru_UA?$jpglarge$&wid=960"
//   },
//   {
//     id : createID(),
//     label : "LG",
//     category : getFirstItem(categories,getSmartphone),
//     imageUrl: "https://content2.rozetka.com.ua/goods/images/big/287300298.png"
//   },
//   {
//     id : createID(),
//     label : "Sony",
//     category : getFirstItem(categories,getTV),
//     imageUrl: "https://www.sony.ua/image/d4f672c8c1b08401c3fb67cce747b7db?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF"
//   },
//   {
//     id : createID(),
//     label : "Nokia",
//     category : getFirstItem(categories,getTV),
//     imageUrl: "https://content2.rozetka.com.ua/goods/images/big/263325295.jpg"
//   },
//   {
//     id : createID(),
//     label : "Nokia",
//     category : getFirstItem(categories,getSmartphone),
//     imageUrl: "https://cdn.comfy.ua/media/catalog/product/cache/4/image/600x/9df78eab33525d08d6e5fb8d27136e95/h/o/hope_rational_back_darkcyan.jpg",
//   },
//   {
//     id : createID(),
//     label : "Samsung",
//     category : getFirstItem(categories,getTV),
//     imageUrl: "https://www.lg.com/ua/images/televisions/md07528855/gallery/medium01.jpg",
//   }

// ];

// // getCategory(categories)

// // function getCategory(categories){
// //   for (const category of categories ){
// //     console.log(category);
// //   }
// // }

// const htmlProducts= products.map(function(elem, index){
//   return `
//    <div>${elem.label}</div>
//   `
// })
// console.log(htmlProducts);

// productsDOM.append(htmlProducts);

// // .filter(elem, i) +
// // .reverse() +
// // .forEach(elem, i) +
// // .sort +
// // .reduce
// // .some +
// // .every
// // .map +



// smartphone.addEventListener("click", function(e){
//   e.preventDefault();

//   const smartphoneProducts = products.filter(function(product , i){
//     if(product.category === "Smartphone") return product;
//   })

//   smartphoneProducts.forEach(function(product, i){
//     console.log(product);
  
//     productsDOM.insertAdjacentHTML("beforeend", `
  
//     <div class = "product">
  
//       <h1  class ="label">Label : ${product.label}</h1>
  
//       <h2 class = "category">Category :${product.category}</h2>
  
//       <div class = "image-wrapper">
//         <img class = "image" src = ${product.imageUrl} />
//       </div>
  
//       <button>Buy</button>
  
//     </div>
//     `)
//   })
// })

// TV.addEventListener("click",function(e){
//   e.preventDefault();

//   const TVproducts = products.filter(function(product , i){
//     if(product.category === "TV") return product;
//   })

//   TVproducts.forEach(function(product, i){
//     console.log(product);
  
//     productsDOM.insertAdjacentHTML("beforeend", `
  
//     <div class = "product">
  
//       <h1  class ="label">Label : ${product.label}</h1>
  
//       <h2 class = "category">Category :${product.category}</h2>
  
//       <div class = "image-wrapper">
//         <img class = "image" src = ${product.imageUrl} />
//       </div>
  
//       <button>Buy</button>
  
//     </div>
//     `)
//   })

// })

// // products.forEach(function(elem, i ){
// //   console.log("[FOREACH]",elem,i);
// // })

// // ! SORT 

// let numbers = [2, 6, 8, 45, 3, 67, 1];
// numbers.sort(function(a, b){
//  return a - b;
// });

// numbers = [2, 6, 8, 45, 3, 67, 1];
// numbers.sort(function(a, b){
//  return b - a;
// })
// .reverse();

// console.log(numbers);



// function getFirstItem(arr, callback){
//   return arr.filter(callback)[0];
// };

// function getSmartphone(category){
//   if(category === "Smartphone")
//   return category;
// };

// function getTV(category){
//   if(category === "TV")
//   return category;
// };

// function createID(){
//   return Math.random().toString().slice(3,9);
// };

// console.log ("[PRODUCTS]", products);
// console.log("[APP]" , app);

// const listOfNumbers = [2, 3, 5, 7, 34, 56];

// const filtredValues = listOfNumbers.filter(function(el,i){
//   return el < 23;
// });

// console.log(listOfNumbers);
// console.log(filtredValues);


// const group = [
//   {
//     firstName: "Jonn",
//     age: 32,
//   },
//   {
//     firstName: "Mike",
//     age: 23,
//   },
//   {
//     firstName: "Bob",
//     age: 13,
//   },
// ];

// const isAdmit = group.some(function(el){
//   return el.age > 48;
// });
// console.log(isAdmit);

// const isAdult = group.every(function(student){
//  return student.age > 12 ;
// });
// console.log(isAdult);

// 1) If even one of group have a ligher return "good sheet"
// 2) Sum of age into the group
// 3) Divide group on three groups : "Who knows JS" , "Who dont's know JS" , "Who knows CSS"


const group = [
  {
    firstName: "John",
    age: 23,
    skills: ["HTML", "CSS", "JS"],
    pocket: {
      left: ["keys", "food"],
      right: ["docs", "snikers"],
    },
  },
  {
    firstName: "Bob",
    age: 32,
    skills: ["HTML", "CSS"],
    pocket: {
      left: ["docs", "food"],
      right: ["keys", "snikers"],
    },
  },
  {
    firstName: "Mike",
    age: 18,
    skills: ["JS"],
    pocket: {
      left: ["lighter", "cigarettes"],
      right: ["rat", "cheese"],
    },
  },
];



// **********     TASK-1    ***************

const hasLighter = group.some(function(el){
  if(el.pocket.left.includes("lighter") || el.pocket.right.includes("lighter")) return "goot sheet";
});

if(hasLighter){
  console.log("goot sheet");
}else{
  console.log("Error...")
}

// *****************       TASK-2      *****************   //

const callAgeGroup = group.reduce (function(sum, student){
  return sum + student.age;
} ,0);
console.log (callAgeGroup);

// *****************       TASK-3      *****************   //

const groupJS = group.filter(function(skill){
  return skill.skills.includes ("JS");
});
console.log(groupJS);

const groupCSS = group.filter(function(skill){
  return skill.skills.includes ("CSS");
});
console.log(groupCSS);

const groupDontJS = group.filter(function(skill){
  return !skill.skills.includes("JS");
});
console.log(groupDontJS);








