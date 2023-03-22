// 1 Написав двома способами =)

// const arr = [5, 3, 4, 5, 6, 7, 3];
// function compact(arr) {
//     return arr.filter((value, index, array) => {
//         return array.indexOf(value) === index;
//     });
// }
// const arr2 = compact(arr);
// console.log(arr2);

// // або 

// function compact2(arr) {
//     return Array.from(new Set(arr));
// }
// const arr3 = compact2(arr);
// console.log(arr3);

// 2 Додатково задав щоб числа start i end користувач сам вводив і перевірку
// let start = parseInt(prompt("Введіть початкове число масиву"));
// if (isNaN(start)) {
//     console.log("Введіть коректно початкове число");
// }
// let end = parseInt(prompt("Введіть кінцеве число масиву"));
// if (isNaN(end)) {
//     console.log("Введіть коректно кінцеве число")
// } else if (start > end) {
//     console.log("Число start має бути менше за end");
// }
// function creteArray() {
//     let arr = [];
//     for (let i = start; i <= end; i++) {
//         arr.push(i)
//     }
//     return arr;
// }

// let arr = creteArray(0, 10);
// console.log(arr);

// 3 Додатково перевірив числа вводимо

// let a = parseInt(prompt("Введіть  число a"));
// if (isNaN(a)) {
//     console.log("Введіть коректно число");
// }
// let b = parseInt(prompt("Введіть  число b"));
// if (isNaN(b)) {
//     console.log("Введіть коректно число")
// }
// else if (a >= b) {
//     console.log("Число a має бути менше за b");
// }

// for (let i = a; i <= b; i++) {
//     for (let c = 0; c < i - a + 1; c++) {
//         console.log(i);
//     }
// }

// 4 використав prompt щоб користувач сам вводив скільки чисел хоче отримати
// let k = parseInt(prompt("Введіть  число яке = кількість випадкових чисел від 0 до 500"));
// if (isNaN(k)) {
//     console.log("Введіть коректно число");
// }
// function randArray(k) {
//     let arr = [];
//     for (let i = 0; i < k; i++) {
//         arr.push(Math.floor(Math.random() * 500) + 1);
//     } return arr;
// }
// let arr = randArray(k);
// console.log(arr);

// 5

// function funcName(arr) {
//     let arrNumber = [];
//     let arrString = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === "number") {
//             arrNumber.push(arr[i]);
//         } else if (typeof arr[i] === "string") {
//             arrString.push(arr[i]);
//         } else if (Array.isArray(arr[i])) {
//             for (let j = 0; j < arr[i].length; j++) {
//                 if (typeof arr[i][j] === "number") {
//                     arrNumber.push(arr[i][j]);
//                 } else if (typeof arr[i][j] === "string") {
//                     arrString.push(arr[i][j]);
//                 }
//             }
//         }
//     }
//     return [arrNumber, arrString];
// }
// let arr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
// let arrNew = funcName(arr);
// console.log(arrNew);

// Або

// let arr2 = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
// function funcName2(arr2) {
//     let newArr2 = arr2.flat(2);
//     let arrNumbers2 = newArr2.filter((elem) => {
//         return typeof elem === "number";
//     });
//     let arrString2 = newArr2.filter((elem) => {
//         return typeof elem === "string";
//     });
//     return [arrNumbers2, arrString2]
// }
// let arrNew2 = funcName2(arr2);
// console.log(arrNew2);

// 6 всі числа вводяться черезе prompt і перевіряються на коректність

// let a = parseInt(prompt("Введіть перше число"));
// if (isNaN(a)) {
//     console.log("Введіть коректно перше число");
// }
// let b = parseInt(prompt("Введіть друге число"));
// if (isNaN(b)) {
//     console.log("Введіть коректно друге число");
// }
// let op = parseInt(prompt("Введіть третє число"));
// if (isNaN(op)) {
//     console.log("Введіть коректно третє число");
// }
// function calc(a, b, op) {
//     switch (op) {
//         case 1:
//             return a - b;
//         case 2:
//             return a * b;
//         case 3:
//             return a / b;
//         default:
//             return a + b;
//     }
// } console.log(calc(a, b, op));

// 7

// function findUnique(arr) {
//     const uniqueSet = new Set(arr);
//     return uniqueSet.size === arr.length;
// }
// console.log(findUnique([1, 2, 3, 4, 5, 6]));
// console.log(findUnique([1, 2, 3, 4, 5, 5]));

// 8
    
// function create(password) {
//     return function (input) {
//         return input === password;
//     }
// }

// const tom = create("pass_for_Tom");
// console.log(tom("pass_for_Tom"));