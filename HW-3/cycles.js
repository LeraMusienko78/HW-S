let name = prompt ("Hello!!! What is your name ?")

let i = 0;


while (i < 4){
    
    i++;

    if (name === "" || name === null){
        name = prompt("Hello!!! What is your name ?");
    }
    else{
        alert ("Very nice!")
    }
   
}