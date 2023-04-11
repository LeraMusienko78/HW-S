"use strict";

// Функция добавления заметки в список и сохранения в localStorage
function addNote() {
    // Получаем текст заметки из поля ввода
    const text = noteText.value.trim();
    if (text === '') {
      return;
    }
    // Создаем объект заметки
    const note = {
      text: text,
      timestamp: new Date().getTime()
    };
    // Добавляем заметку в список и в массив заметок
    notes.push(note);
    const li = document.createElement('li');
    li.className = 'note';
    li.innerHTML = '<button class="delete-note">Удалить</button>' + note.text;
    noteList.appendChild(li);
    noNotesMessage.style.display = 'none';
    // Сохраняем массив заметок в localStorage
    localStorage.setItem('notes', JSON.stringify(notes));
    // Очищаем поле ввода
    noteText.value = '';
  }
  
  // Функция удаления заметки из списка и из localStorage
  function deleteNote() {
    const li = this.parentNode;
    const timestamp = li.dataset.timestamp;
    notes = notes.filter(note => note.timestamp !== parseInt(timestamp));
    localStorage.setItem('notes', JSON.stringify(notes));
    li.remove();
    if (notes.length === 0) {
      noNotesMessage.style.display = 'block';
    }
  }
  
  // Добавляем обработчик события клика на кнопку добавления заметки
  addNoteButton.addEventListener('click', addNote);
  
  // Выводим сохраненные заметки на экран
  if (notes.length > 0) {
    noNotesMessage.style.display = 'none';
    notes.forEach(note => {
      const li = document.createElement('li');
      li.className = 'note';
      li.dataset.timestamp = note.timestamp;
      li.innerHTML = '<button class="delete-note">Удалить</button>' + note.text;
      noteList.appendChild(li);
    });
  }
  
  // Добавляем обработчик события клика на кнопки удаления заметок
  const deleteNoteButtons = document.querySelectorAll('.delete-note');
  deleteNoteButtons.forEach(button => {
    button.addEventListener('click', deleteNote);
  });
  