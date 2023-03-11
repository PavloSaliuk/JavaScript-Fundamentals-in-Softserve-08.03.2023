// 4. 
// Створіть об’єкт з 5-ма наступними властивостями: “String”, “Number”, “Boolean”, “Undefined”, “Null”. Значення кожної властивості повинно відповідати відповідному примітивному типу даних.

// const firstObject = {
//     String: "first",
//     Number: 2,
//     Boolean: true,
//     Undefined: undefined,
//     Null: null,
// }

// 5. 
// Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult і виведіть в консоль.


// let isAdult = confirm("if you adult?");
// console.log(isAdult);

// 6. 
// В зовнішньому файлі напишіть скрипт , в якому оголосіть змінні, для збереження таких даних:
//         - ваше ім’я
//         - ваше прізвище
//         - навчальна група
//         - ваш рік народження.
// Присвойте змінним відповідні значення. 
// Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
// Визначте тип кожної змінної.
// Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
// Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.

// const userName = "Pavlo";
// const userSurname = "Saliuk";
// const userGroup = 749;
// const userDateOfBirthday = 1992;
// const userMarried = true;

// typeof(userName);
// typeof(userSurname);
// typeof(userGroup);
// typeof(userDateOfBirthday);
// typeof(userMarried);

// console.log(userGroup);
// console.log(userDateOfBirthday);
// console.log(userMarried);
// console.log(userName);
// console.log(userSurname);

// const userSalary = null;
// const userHobby = undefined;
// console.log(typeof userSalary );
// console.log(typeof userHobby );

// 7. 
// За допомогою функції prompt() напишіть скрипт , який послідовно запитує в користувача логін, імейл та пароль, і виводить на екран повідомлення із введеними даними. Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.

// const userLogin = prompt("Write your login : ")
// const userEmail = prompt("Write your email :");
// const userPassword = prompt("Write your password :");
// alert(`Dear User, your login is : ${userLogin} , your email is : ${userEmail} , your password is : ${userPassword} `);

// 8. 
// Напишіть скрипт, який вираховує кількість секунд в годині, в добі, в місяці, записує результати в відповідні змінні, і виводить їх значення на екран

const secondsInHour = 60*60;
const secondsInDay = secondsInHour * 24;
const secondsInMonth = secondsInDay * 30;
alert(secondsInHour + " seconds in a hour");
alert(secondsInDay + " seconds in a day");
alert(secondsInMonth + " seconds in a month");