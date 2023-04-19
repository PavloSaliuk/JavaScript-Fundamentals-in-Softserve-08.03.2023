// 1 
// function getPromise(message, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(message);
//         }, delay);
//     })
// }

// getPromise("test promise", 2000).then(function (data) {
//     console.log(data);
// });

// 2
// function calcArrProduct(arr) {
//     return new Promise((resolve, reject) => {
//         const allNumeric = arr.every(val => typeof val === 'number');
//         if (arr.length === 0 || !allNumeric) {
//             reject('Error! Incorect array!');
//         } else {
//             const product = arr.reduce((acc, val) => acc * val, 1);
//             resolve(product);
//         }
//     });
// }

// calcArrProduct([3, 4, 5]).then(result => console.log(result));
// calcArrProduct([5, 'user2', 7, 12]).then(result => console.log(result));

// 3
// new Promise(function (resolve, reject) {
//     const number = prompt('Enter a number:')
//     if (isNaN(number)) {
//         reject(new Error('You write not a number =('))
//     } else {
//         resolve(Number(number))
//     }
// }).catch(function (error) {
//     console.log(error);
//     return new Promise(function (resolve, reject) {
//         function askNumber() {
//             const number = prompt('Enter a number:')
//             if (isNaN(number)) {
//                 askNumber();
//             } else {
//                 resolve(Number(number))
//             }
//         }
//         askNumber();
//     });
// }).then(function (result) {
//     console.log(result);
// });

// function askNumber2() {
//     return new Promise(function (resolve, reject) {
//         const number = prompt('Enter a number');
//         if (isNaN(number)) {
//             reject(new Error('You write not a number'))
//         } else {
//             resolve(Number(number));
//         }
//     }).catch(function (error) {
//         console.error(error);
//         return askNumber2();
//     })
// }
// askNumber2().then(function (result) {
//     console.log(result);
// })

// 4

// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
// async function showNumbers() {
//     for (let i = 0; i <= 10; i++) {
//         console.log(await delay(i, Math.random() * 3000));
//     } 
// }
// showNumbers();