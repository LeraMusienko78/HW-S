// ----------------- 1) ------------------ //

document.addEventListener('keydown' ,(event) =>{
    const keyCode = event.keyCode;
    const key = event.key;

    document.getElementById('code-box').innerHTML = keyCode;
    document.getElementById('value-box').innerHTML = key;
});

// ----------------- 2) ------------------- //

function updateValue(event) {
    document.getElementById("output").innerHTML = event;
    event.preventDefault();
    input.classList.toggle("tab");

};

// ----------------- 3) ------------------- //

document.addEventListener('keydown', (event)=>{
    if(event.key === "F12" || (event.cntrKey && event.shiftKey && event.key === "I")){
        event.preventDefault();
    }
});

// ----------------- 4) ------------------- //

const img = document.getElementById('image');

let x = 0;
let y = 0;

function moveRabbit(event){
    const speed = 10;

    switch(event.keyCode){
        case 87:
            y -= speed;
            break;

        case 65:
            x -= speed;
            break;

        case 83:
            y += speed;
            break;

        case 68:
            x += speed;
            break;

    }

    image.style.top = `${y}px`;
    image.style.left = `${x}px`;


}

document.addEventListener('keydown', moveRabbit);
