// 1

// function sumSliceArray(arr, first, second) {
//     if (!Array.isArray(arr)) {
//         throw new Error("Перший агрумент не є масивом");
//     }
//     if (typeof first !== "number" || typeof second !== "number") {
//         throw new Error("Другий і третій аргумент повинні бути числами");
//     }
//     if (arr.length === 0) {
//         throw new Error("Масив порожній");
//     }
//     if (first < 0 || second < 0 || first >= arr.length || second >= arr.length) {
//         throw new Error("Номер елемента масиву більший за розмір масиву");
//     }
//     return arr[first] + arr[second];
// }
// const arr = [10, 11, 12, 13, 14];
// try {
//     const sum = sumSliceArray(arr, 1, 10);
//     console.log(sum);
// } catch (e) {
//     console.log(e.message);
// }

// 2

// function checkAge() {
//     let name = prompt("Будь ласка введіть своє імя name:");
//     let age = prompt("Будь ласка введіть свій вік:");
//     let status = prompt("Будь ласка введіть свій статус - admin, moderator або user:");

//     try {
//         if (age === "" || age === "" || status === "") {
//             throw new Error("The field is empty!Please enter your age");
//         }
//         if (isNaN(parseInt(age))) {
//             throw new TypeError("Age is not a number");
//         }
//         if (age < 18 || age > 70) {
//             throw new RangeError("Age must be between 18 to 70");
//         }
//         if (status !== "admin" && status !== "moderator" && status !== "user") {
//             throw new EvalError("Статус введено не правильно, має бути: admin, moderator або user");
//         }
//         alert("Ви можете переглянути фільм =)");
//     } catch (error) {
//         alert(`${error.name}:  ${error.message}`);
//     }
// }
// checkAge();

// 3

// let width = parseFloat(prompt("Введіть висоту трикутника:"));
// let height = parseFloat(prompt("Введіть ширину трикутника:"));
// function calcRectangleArea(width, height) {
//     try {
//         if (isNaN(width) || isNaN(height) ||
//             typeof (width) !== "number" || typeof (height) !== "number") {
//             throw new Error("У функцію передано не числові параметри")
//         }
//     } catch (error) {
//         console.log(error.name, error.message);
//     }
//     return width * height;
// }
// const areaRectangle = calcRectangleArea(width, height);
// console.log(`Площа прямокутника зі сторонами ${width} і ${height} = ${areaRectangle}`);

// 4

// class MonthException extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "MonthException";
//     }
// }
// function showNameOfMonth(month) {
//     const months = ["January", "February", "March", "April", "May", "June",
//         "July", "August", "September", "October", "November", "December"];
//     if (month < 1 || month > 12 || typeof month != "number") {
//         throw new MonthException("Inccorect month number");
//     }
//     return months[month - 1];
// }

// try {
//     console.log(showNameOfMonth(1));
//     console.log(showNameOfMonth(100));
// } catch (error) { 
//     console.log(`${error.name}: ${error.message}`);
// }

// 5

// function showUser(id) {
//     if (id < 0) {
//         throw new Error("ID must not be negative:" + id)
//     }
//     return { id }
// }
// function showUsers(ids) {
//     const correctIds = [];
//     for (const id of ids) {
//         try {
//             const user = showUser(id);
//             correctIds.push(user);
//         } catch (error) {
//             console.error(error.message);
//         }
//     }
//     return correctIds;
// }

// const users = showUsers([7, -12, 44, 22]);
// console.log(users);