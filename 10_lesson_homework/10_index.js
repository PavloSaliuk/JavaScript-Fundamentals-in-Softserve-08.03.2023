// 1
// let names = {
//     first: "Tom",
//     second: "Sam",
//     third: "Ray",
//     fourth: "Bob",
// };
// let { first: f, third: x, fifth = "Name №5" } = names;
// console.log(f); // "Tom"
// console.log(x); // "Ray"
// console.log(fifth); // "Name №5"

// 2
// let data = {
//     names: ["Sam", "Tom", "Ray", "Bob"],
//     ages: [20, 24, 22, 26],
// };

// let { names: [, name2, , name4], ages: [, age2, , age4] } = data;

// console.log(name2); // "Tom"
// console.log(age2); // 24
// console.log(name4); // "Bob"
// console.log(age4); // 26

// 3
// function mul(...args) {
//     const numbers = args.filter(arg => typeof arg === "number");
//     return numbers.length ? numbers.reduce((acc, curr) => acc * curr) : 0;
// }

// console.log(mul(1, "str", 2, 3, true)); // 6
// console.log(mul(null, "str", false, true)); // 0

// 4
// let server = {
//     data: 0,
//     convertToString: function (callback) {
//         callback(() => {
//             return this.data + "";
//         });
//     }
// }
// let client = {
//     server: server,
//     result: "",
//     calc: function (data) {
//         this.server.data = data;
//         this.server.convertToString(this.notification());
//     },
//     notification: function () {
//         return (callback) => {
//             this.result = callback();
//         }
//     }
// }
// client.calc(123);
// console.log(client.result);
// console.log(typeof client.result);

// 5
// const mapBuilder = (keysArray, valuesArray) => {
//     const map = new Map();
//     keysArray.forEach((key, index) => {
//         map.set(key, valuesArray[index]);
//     });
//     return map;
// }
// let keys = [1, 2, 3, 4];
// let values = ["div", "span", "b", "i"];
// let map = mapBuilder(keys, values);
// console.log(map.size);
// console.log(map.get(2));
    
// 6

// let arr = [];
// for (let i = 0; i <= 2; i++) {
//     arr[i] = (() => {
//         const j = i
//         return () => console.log(i);
//     })();
// }
// arr[0]();
// arr[arr.length - 1]();