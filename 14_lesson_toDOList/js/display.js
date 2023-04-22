import { getTodo } from "./todo.js";
const displayTodos = (todos) => {
    cleanTodo();
    //// Отримуємо список туду з localStorage
    todos = getTodo();

    const todoList = document.querySelector('#todo-list');
    // Очищаємо вміст списку туду на сторінці
    todoList.innerHTML = '';
    // Проходимо циклом по кожному елементу туду і створюємо HTML-елементи
    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item')

        const label = document.createElement('label');
        const input = document.createElement('input');
        const span = document.createElement('span');
        const content = document.createElement('div');
        const actions = document.createElement('div');
        const edit = document.createElement('button');
        const deleteButton = document.createElement('button');
        // Додаємо атрибути і класи для створених елементів
        input.type = 'checkbox';
        input.checked = todo.done;
        span.classList.add('bubble');

        switch (todo.category) {
            case 'personal':
                span.classList.add('personal');
                break;
            case 'family':
                span.classList.add('family');
                break;
            case 'work':
                span.classList.add('work');
                break;
            default:
                span.classList.add('business');
        }

        content.classList.add('todo-content');
        actions.classList.add('actions')
        edit.classList.add('edit');
        deleteButton.classList.add('delete');
        // Додаємо вміст для елементів
        content.innerHTML = `<input type ='text' value='${todo.content}' readonly>`;
        edit.innerHTML = 'Correct';
        deleteButton.innerHTML = 'Delete';
        // Додаємо створені елементи до todoItem і todoList
        label.appendChild(input);
        label.appendChild(span);
        actions.appendChild(edit);
        actions.appendChild(deleteButton);
        todoItem.appendChild(label);
        todoItem.appendChild(content);
        todoItem.appendChild(actions);
        todoList.appendChild(todoItem);
        // Якщо туду виконано, то додаємо клас done
        if (todo.done) {
            todoItem.classList.add('done');
        }
        // Підписуємося на події для кожного елементу туду
        subscribeOnDone(todo, input, todoItem, todos)
        subscribeOnEdit(todo, edit, content, todos);
        subscribeOnDelete(todo, deleteButton, todos);
    })
}
// delete todo елементи зі сторінки по одному
function cleanTodo() {
    const todos = document.querySelectorAll('.todo-item');
    todos.forEach(todo => {
        todo.remove();
    });
}
// фуккція яка дозволяє видалити туду
//Функція subscribeOnDelete(currentToDo, deleteButton, todos) підписується на клік по кнопці видалення конкретного todo. При підтвердженні користувачем щодо видалення, функція видаляє цей елемент з масиву todos, оновлює його у localStorage, і викликає displayTodos() для оновлення списку.
function subscribeOnDelete(currentToDo, deleteButton, todos) {
    deleteButton.addEventListener('click', (e) => {
        const confirmed = confirm('Are you sure you want to delete this todo?');
        if (confirmed) {
            todos = todos.filter(t => t != currentToDo);
            localStorage.setItem('todos', JSON.stringify(todos));
            displayTodos();
        }
    })
}
// фуккція яка дозволяє коригувати туду
//Функція subscribeOnEdit(currentToDo, editButton, content, todos) підписується на клік по кнопці редагування конкретного todo. При кліку, текстове поле для введення нового тексту відключає атрибут readonly, фокусується на цьому полі, тому користувач може ввести новий текст, а після зміни тексту викликається displayTodos() для оновлення списку.
function subscribeOnEdit(currentToDo, editButton, content, todos) {
    editButton.addEventListener('click', e => {
        const input = content.querySelector('input');
        input.removeAttribute('readonly');
        input.focus();
        input.addEventListener('blur', e => {
            input.setAttribute('readonly', true);
            currentToDo.content = e.target.value;
            localStorage.setItem('todos', JSON.stringify(todos));
            displayTodos();
        })
    })
}
// фуккція яка дозволяє позначити зроблений
//Функція subscribeOnDone(currentToDo, input, todoItem, todos) підписується на зміну стану галочки відмітки зробленої задачі. При зміні стану галочки, функція оновлює поле done для цього todo в localStorage і відповідно оновлює стиль todo в списку.
function subscribeOnDone(currentToDo, input, todoItem, todos) {
    input.addEventListener('click', e => {
        currentToDo.done = e.target.checked;
        localStorage.setItem('todos', JSON.stringify(todos));
        todoItem.classList.toggle('done', currentToDo.done);
        displayTodos();
    })
}
//Функція displayTodos(todos) відображає список todo на сторінці. Вона очищає список, потім для кожного елемента todo, створює HTML структуру та додає в список. Також підписується на редагування, видалення та зміну стану todo.
export { displayTodos };