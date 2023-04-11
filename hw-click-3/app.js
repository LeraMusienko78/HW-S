// Получаем элементы со страницы
const noteText = document.getElementById('note-text');
const addNoteButton = document.getElementById('add-note');
const noteList = document.getElementById('note-list');

// Получаем заметки из localStorage или создаем пустой массив, если они отсутствуют
let notes = JSON.parse(localStorage.getItem('notes')) || [];
// let notes = localStorage.getItem('notes') || [];

// Функция для добавления заметки в список и сохранения в localStorage
function addNote() {

  // Получаем текст заметки из поля ввода
  const text = noteText.value.trim();

  // Если поле ввода пустое, то ничего не делаем
  if (text === '') {
    return;
  }

  // Создаем объект заметки
  const note = { text };

  // Добавляем заметку в список и сохраняем в localStorage
  notes.push(note);
  localStorage.setItem('notes', JSON.stringify(notes));
  
  // localStorage.setItem('notes', String(notes));

  // Добавляем элемент заметки на страницу
  const li = document.createElement('li');
  li.innerText = note.text;
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Удалить';
  deleteButton.addEventListener('click', () => {

    // Удаляем заметку из списка и из localStorage
    const index = notes.indexOf(note);
    notes.splice(index, 1);

    localStorage.setItem('notes', JSON.stringify(notes));
    // localStorage.setItem('notes', String(notes));

    // Удаляем элемент заметки со страницы
    li.remove();
  });
  li.appendChild(deleteButton);
  noteList.appendChild(li);

  // Очищаем поле ввода
  noteText.value = '';
}

// Добавляем обработчик события на кнопку "Добавить"
addNoteButton.addEventListener('click', addNote);

// Добавляем сохраненные заметки на страницу

notes.forEach((note) => {
  const li = document.createElement('li');
  li.innerText = note.text;
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Удалить';
  deleteButton.addEventListener('click', () => {

    // Удаляем заметку из списка и из localStorage
    const index = notes.indexOf(note);
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    // localStorage.setItem('notes', String(notes));

    // Удаляем элемент заметки со страницы
    li.remove();
  });
  li.appendChild(deleteButton);
  noteList.appendChild(li);
});
