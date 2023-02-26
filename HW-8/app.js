"use strict";

const app = document.querySelector("#app");

// const firstName = "Jonn";

function tagFacctory(name, tag, greeting, id){
    app.insertAdjacentHTML(
        "afterbegin",
        `<${tag} id = ${id}> ${greeting} ${name}</${tag}}
    `);

    return document.querySelector(`#${id}`);
}

// const userName = prompt ("Hello , what is your name ?");
// const userTag = prompt ("Wath the tag do wanna see here ?");
// const userGreeting = prompt ("Enter your greeting")

const newTag = tagFacctory("LERA", "h1", "Hello from", "greeting");

// app.insertAdjacentHTML("afterbegin" , newTag);

// 

newTag.addEventListener("click", function ( e ) {
    e.target.style.background  = "red";
});
console.log (newTag);

