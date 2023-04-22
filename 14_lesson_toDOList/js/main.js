import { displayTodos } from "./display.js";
import { getTodo } from "./todo.js";
// Додаємо подію на завантаження сторінки
window.addEventListener('load', () => {
    // Підписуємося на подію кліку на кнопку видалення всіх тасків
    subscribeOnDeleteAll();
    // Отримуємо всі таски з localstorage
    let todos = getTodo();

    // Отримуємо інпут з іменем користувача
    const nameInput = document.querySelector('#name');
    // Отримуємо форму для створення нового таска
    const newToDoForm = document.querySelector('#new-todo-form');
    // Отримуємо ім'я користувача з localstorage, або пустий рядок
    const username = localStorage.getItem('username') || '';
    // Встановлюємо значення в інпут імені користувача
    nameInput.value = username;
    // Додаємо подію на зміну імені користувача
    nameInput.addEventListener('change', event => {
        // Зберігаємо нове ім'я користувача в localstorage
        localStorage.setItem('username', event.target.value);
    })

    // Відображаємо всі таски
    displayTodos();
    // Підписуємось на подію submit на формі створення нового таска
    subscribeOnAdd(newToDoForm);
})
// функція яка видаляє всі туду
// оголошує функцію для підписки на подію видалення всіх елементів зі списку.
function subscribeOnDeleteAll() {
    //знаходить кнопку видалення всіх елементів.
    const deleteAllButton = document.querySelector('.delete-all');
    //додає обробник події для кнопки видалення всіх елементів.
    deleteAllButton.addEventListener('click', () => {
        //показує підтвердження для видалення всіх елементів.
        const confirmed = confirm('Are you sure you want to delete all todos?');
        //перевіряє, чи підтверджено видалення всіх елементів.
        if (confirmed) {
            //видаляє всі елементи зі списку з local storage.
            localStorage.removeItem('todos');
            //відображає оновлений список.
            displayTodos();
        }
    });
}
// добавляє нову туду
//оголошує функцію для підписки на подію додавання нового елемента в список.
function subscribeOnAdd(form) {
    //додає обробник події для форми додавання нового елемента.
    form.addEventListener('submit', event => {
        // запобігає стандартній поведінці браузера (наприклад, перезавантаженню сторінки після відправки форми).
        event.preventDefault();
        // отримує список елементів з local storage.
        const todos = getTodo();
        //отримує значення поля вводу тексту та категорії з форми.
        const { content, category } = event.target.elements;
        //створює новий об'єкт todo зі значеннями з форми та додатковими полями.
        const todo = {
            content: content.value,
            category: category.value,
            done: false,
            createAdt: new Date().getTime()
        }
        // додає новий елемент в список на початок.
        todos.unshift(todo);
        //оновлює список елементів в local storage.
        localStorage.setItem('todos', JSON.stringify(todos));
        // очищує форму введення.
        event.target.reset();
        //відображає оновлений список.
        displayTodos();
    })
}