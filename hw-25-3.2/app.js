// Получаем ссылки на HTML-элементы
const form = document.querySelector('form');
const noteList = document.querySelector('#note-list');

// Обработчик отправки формы
form.addEventListener('submit', e => {
  e.preventDefault(); // Предотвращаем отправку формы
  const noteText = form.elements.note.value.trim(); // Получаем текст заметки из поля ввода
  if (noteText) {
    addNoteToList(noteText); // Добавляем заметку в список
    form.reset(); // Очищаем поле ввода
  }
});

// Обработчик клика на кнопке удаления заметки
noteList.addEventListener('click', e => {
  if (e.target.matches('.delete-note')) {
    const note = e.target.closest('.note'); // Находим элемент заметки
    deleteNoteFromList(note); // Удаляем заметку из списка
  }
});

// Функция добавления заметки в список
function addNoteToList(noteText) {
  const note = createNoteElement(noteText); // Создаем новый элемент заметки
  noteList.appendChild(note); // Добавляем элемент заметки в список
  saveNotesToLocalStorage(); // Сохраняем заметки в localStorage
}

// Функция создания элемента заметки
function createNoteElement(noteText) {
  const note = document.createElement('li'); // Создаем новый элемент списка
  note.classList.add('note'); // Добавляем класс "note" для стилизации
  const noteTextElement = document.createElement('span'); // Создаем новый элемент для текста заметки
  noteTextElement.textContent = noteText;
} // Задаем текст зам
