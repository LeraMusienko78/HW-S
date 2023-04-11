"use strict";

// document.addEventListener('click' , ()=>{
//     audio.play();
//     audio.loop();
//     audio.load;
// });
// document.addEventListener('dblclick', ()=>{
//     audio.pause();
// });

document.addEventListener('click',()=>{
    audioTag2.play();
    audioTag2.loop;
    if(document.addEventListener('dblclick',()=>{
        audioTag2.pause();
    }));
});

const message = document.getElementById('message');
const addNoteButton = document.getElementById('add');
const noteList = document.getElementById('noteList');

let notes = JSON.parse(localStorage.getItem("notes"));

function displayNotes (){
   
    noteList.innerHTML = "";

    for (let i = 0; i < notes.length ; i++){

        const noteItem = document.createElement('li');
       
        const noteText = document.createElement('span');
    
        noteText.textContent = notes[i];
        noteItem.appendChild(noteText);
    
        const deleteNoteButton = document.createElement('button');
        deleteNoteButton.textContent = "delet";
        deleteNoteButton.addEventListener ('click', ()=>{
        notes.splice(i,1);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();

        });
        noteItem.appendChild(deleteNoteButton);
        noteList.appendChild(noteItem);
    }
}

addNoteButton.addEventListener('click', ()=>{
    if(message.value.trim()!==""){
        notes.push(message.value);
        localStorage.setItem('notes', JSON.stringify(notes));
        message.value = "";
        displayNotes();
    }
});

displayNotes();




