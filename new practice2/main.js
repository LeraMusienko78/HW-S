
// const div =  document.getElementById('gridWrap');
// const div1 = document.getElementsByClassName ('header');
// const div2 = document.getElementsByTagName ('div');
// const div3 = document.getElementsByClassName('big');
// const div4 = document.getElementsByTagName('h6');

// class Pizza{
//     constructor(price){
//         this.price = price;
//     }
//     changePrice(price){
//         this.price = price;   
//     }
// }

// - click - клик мышки;
// - dblclick - двойной клик мышки;
// - contextmenu - правый клик мышки;
// - mousemove - движение мышкой;
// - mouseover - мышка на элементе;
// - mouseout - мышка ушла с элемента;

// *** elem.addEventLister(event, callback) ***// - добавить событие

// event { ... }

// const header =  document.getElementsByClassName('header')[0];
// header.addEventListener('click', (event) =>{
//     console.log("[X]", event.x,"[Y]", event.y);
//     alert("hello");
// });
// header.onclick = () =>{
//     console.log ('click on main');
//     alert('click on main');
// }

// const gridWrap = document.getElementById('gridWrap');

// gridWrap.addEventListener('dblclick', () =>{
//     alert("yhy-hy");
// });

// const smoll = document.getElementsByName('smoll');

// smoll.addEventListener('click', () =>{

// });

// *** elem.removeEventListener(event, callback) *** - убрать событие

// document.body.addEventListener('click', (event)=>{
//     console.log(event.target);
//     // console.log(`y: ${event.y}`);
// });

section.addEventListener('click' , (event) => {

    if (event.target.tagName === 'IMG'){
        document.body.style.backgroundImage = `url(${event.target.getAttribute('src')})`
    }
});

/*

elem.children - дочерний элемент
elem.parentElement - элемент родителя
elem.nextSiblingElement - следующий элемент
elem.prevSiblingElement - предыдущий элемент

*/




