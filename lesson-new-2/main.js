
//  event.preventDefault(); - не запускать действие


// document.body.addEventListener('contextmenu' , () =>{
//     event.preventDefault(); 
//     console.log('!');
// });

// a.addEventListener('click' , (event) =>{
//     event.preventDefault();
//     console.log('!!!');
// })

// const obj = {
//     handleEvent(){

//     }
// }
// a.addEventListener ('click' , obj);

// document.addEventListener('click', (event)=>{
//     console.log('click on document');
//     console.log(event.target);
// });

// document.documentElement.addEventListener('click', (event)=>{
//     console.log('click on <html>');
//     console.log(event.target);
// });

// document.body.addEventListener ('click', (event)=> {
//     console.log ('click on <body>');
//     console.log(event.target);
// });


// a.addEventListener ('click', (event)=> {
//     event.preventDefault();
//     // event.stopPropagation();
//     console.log(event.target);
//     console.log ('click on <a>');
// });

// const header = document.getElementsByClassName('header')[0];

// header.addEventListener('dblclick', (event) =>{
//     console.log('click on header', event.x, event.y);
// });

// **************** СОБЫТИЯ КЛАВИАТУРЫ ***************** //

/*
   - keydown - клавиша нажата
   - keyup - клавиша отжата


   event:

    key - что человек ввел
    code - какую лавишу нажал
*/

// window.addEventListener('keydown',(event)=>{
//     console.log(`key:${event.key} | code: ${event.code}`)

//     // if(event.code === "Tab"){
//     //     event.preventDefault();
//     //     panel.classList.toggle('open');
//     // }
// } );

// const text = `
// let num1 = 20;
// let counter = 0;


// for (counter = 0; counter <= num1 ; counter++){

//     if (counter % 2 !== 0){
//         console.log ("[НЕЧЕТНЫЕ ЧИСЛА - ЦИКЛ FOR]" ,counter);
//     }else{
//     }
// }

// `;

// let lastIndex = 0;
// let newLastIndex = 0;

// document.addEventListener('keydown' , (event) =>{
//     newLastIndex += 2;
//     div.textContent += text.slice(lastIndex, newLastIndex);
//     lastIndex = newLastIndex;
// });

// input.addEventListener('input', ()=>{
//     console.log("!");
// });

// input.addEventListener('change', ()=>{
//     console.log("!");
// });
// input.focus();

// const f = (a, b, c ) => {
//     console.log('@');
// };
// const com = setInterval(f, 1000);
// const id = setTimeout(f,1000);

// // clearInterval(id) - останавливает таймер







