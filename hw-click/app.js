"use strict";

const noteInput = document.getElementById("noteInput");
const addNoteButton = document.getElementById("addNoteButton");
const noteList = document.getElementById("noteList");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
  noteList.innerHTML = "";
  for (let i = 0; i < notes.length; i++) {
    const noteItem = document.createElement("li");
    const noteText = document.createElement("span");
    noteText.textContent = notes[i];
    noteItem.appendChild(noteText);
    const deleteNoteButton = document.createElement("button");
    deleteNoteButton.textContent = "Удалить";
    deleteNoteButton.addEventListener("click", () => {
      notes.splice(i, 1);
      localStorage.setItem("notes", JSON.stringify(notes));
      displayNotes();
    });
    noteItem.appendChild(deleteNoteButton);
    noteList.appendChild(noteItem);
  }
}

addNoteButton.addEventListener("click", () => {
  if (noteInput.value.trim() !== "") {
    notes.push(noteInput.value);
    localStorage.setItem("notes", JSON.stringify(notes));
    noteInput.value = "";
    displayNotes();
  }
});

displayNotes();
