// 1 Написав двома способами =)

// const arr = [5, 3, 4, 5, 6, 7, 3];
// function compact(arr) {
//     return arr.filter((value, index, array) => {
//         return array.indexOf(value) === index;
//     });
// }
// const arr2 = compact(arr);
// console.log(arr2);

// function compact2(arr) {
//     return Array.from(new Set(arr));
// }
// const arr3 = compact2(arr);
// console.log(arr3);

// 2 Додатково задав щоб числа start i end користувач сам вводив і перевірку

// function creteArray() {
//     let start = parseInt(prompt("Введіть початкове число масиву"));
//     if (isNaN(start)) {
//         console.log("Введіть коректно початкове число");
//     }
//     let end = parseInt(prompt("Введіть кінцеве число масиву"));
//     if (isNaN(end)) {
//         console.log("Введіть коректно кінцеве число")
//     } else if (start > end) {
//         console.log("Число start має бути менше за end");
//     }

//     let arr = [];
//     for (let i = start; i <= end; i++) {
//         arr.push(i)
//     }
//     return arr;
// }

// let arr = creteArray(0, 10);
// console.log(arr);

//3 Додатково перевірив числа вводимо

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

//4 використав promp щоб користувач сам вводив скільки чисел хоче отримати

// function randArray(k) {
//     let arr = [];
//     for (let i = 0; i < k; i++) {
//         arr.push(Math.floor(Math.random() * 500) +1);        
//     } return arr;
// }
// let k = parseInt(prompt("Введіть  число яке = кількість випадкових чисел від 0 до 500"));
// if (isNaN(k)) {
//     console.log("Введіть коректно число");
// }
// let arr = randArray(k);
// console.log(arr);