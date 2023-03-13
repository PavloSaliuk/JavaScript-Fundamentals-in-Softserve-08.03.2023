//  1.
// Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:
//  a < b < c 

// let a;
// let b;
// let c;
// let statements  = (a < b && b < c)  ? console.log("is true") : console.log("is false");

// 2. 
// Є такий код:

// let x = 1;
// let y = 2;

// let res1 = String(x) + String(y); // Допишіть код, необхідно використовувати змінні x і y
// console.log(res1); // ""12""
// console.log(typeof res1); // ""string""

// let res2 = String(x < y) + y; // Допишіть код, необхідно використовувати змінні x і y
// console.log(res2); // ""true2""
// console.log(typeof res2); // ""string""

// let res3 = y > x // Допишіть код, необхідно використовувати змінні x і y
// console.log(res3); // true
// console.log(typeof res3); // ""boolean""

// let res4 = "Pavlo" / x * y; // Допишіть код, необхідно використовувати змінні x і y
// console.log(res4); // NaN
// console.log(typeof res4); // ""number""

// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.

// 3. 
// Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”, 

// let isAdult = prompt("How old are you?") 
// if (isAdult  >= 18) {
//     prompt("You is adult =)")
// }else {
//     prompt("You are to young =(")
// }

// 4.
// Задано масив чисел, знайти число яке найбільш часто входить в масив, занести це число в новий масив і видалити всі входження цього числа із поточного масиву.
// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]
// let data = ... // 5
// ...
// console.log(arr) // [4, 2, 1, 6, 3, 2]


// let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5]

// let countMap = {};
// let maxCount = 0;
// let data = null;

// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     countMap[num] = (countMap[num] || 0) + 1;
//     if (countMap[num] > maxCount) {
//         maxCount = countMap[num];
//         data = num;
//     }
// }

// arr = arr.filter(num => num !== data);
// console.log(`The number that is most often in the array: ${data}`);
// console.log(`New array is: ${arr}`);

// 5. 
// Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно 
//     a) визначити і вивести в консоль площу трикутника 
//     b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
// Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).

// let lengthOne = parseFloat(prompt("Enter length of 1 side"));
// let lengthTwo = parseFloat(prompt("Enter length of 2 side"));
// let lengthThird = parseFloat(prompt("Enter length of 3 side"));
// let perimeter = (lengthOne + lengthTwo + lengthThird) / 2;
// let areaTriangle = Math.sqrt(perimeter * (perimeter - lengthOne) * (perimeter - lengthTwo) * (perimeter - lengthThird));
// if (isNaN(lengthOne) || isNaN(lengthTwo) || isNaN(lengthThird) ||
//     lengthOne <= 0 || lengthTwo <= 0 || lengthThird <= 0) {
//     console.log("Incorrect data")
// } 
// if (lengthOne * lengthOne + lengthTwo * lengthTwo === lengthThird * lengthThird ||
//     lengthOne * lengthOne + lengthThird * lengthThird === lengthTwo * lengthTwo ||
//     lengthTwo * lengthTwo + lengthThird * lengthThird === lengthOne * lengthOne) {
//     console.log("This triangle is rectangular")
// }
// else { console.log(areaTriangle.toFixed(3)) }

// 6. 
// Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.

// let dateNow = new Date();
// let hour = dateNow.getHours();
// if (hour >= 23 || hour < 5) {
//     console.log("Доброї ночі");
// } else if (hour >= 5 && hour < 11) {
//     console.log("Доброго ранку");
// }
// else if (hour >= 11 && hour < 17) {
//     console.log("Доброго дня");
// }
// else {
//     console.log("Доброго вечора");
// }

// let dateNow = new Date();
// let hour = dateNow.getHours();

// switch (true) {
//     case (hour >= 23 && hour < 5):
//         console.log("Доброї ночі");
//         break;
//     case (hour >= 23 && hour < 5):
//         console.log("Доброго ранку");
//         break;
//     case (hour >= 5 && hour < 11):
//         console.log("Доброї ночі");
//         break;
//     case (hour >= 11 && hour < 17):
//         console.log("Доброго дня");
//         break;
//     case (hour >= 17 && hour < 23):
//         console.log("Доброго вечора");
//         break;
//     default:
//         console.log();
//         break;
// }

// (Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
// Вася працює програмістом і отримує 50$ за кожні 100 рядків коду(99 рядків - 0$, 199 рядків - 50$). За кожне третє запізнення Васю штрафують на 20$. Реалізувати меню :
// 1) користувач вводить бажаний дохід Васі і кількість запізнень, порахувати, скільки рядків коду йому треба написати
// 2) користувач вводить кількість рядків коду, написану Васею, і бажаний обсяг Порахувати, скільки разів Вася може запізнитися.
// 3) користувач вводить кількість рядків коду і кількість запізнень, визначити, скільки грошей заплатять Васі і чи заплатять взагалі. 


// let desiredIncome = parseFloat(prompt("Введіть бажаний дохід Васі"));
// if (desiredIncome < 50) {
//     console.log(`Вася не буде писати код`);
// } else {
//     let numDelays = parseInt(prompt("Введіть кількість запізнень"));

//     if (numDelays >= 3) {
//         desiredIncome += (Math.floor(numDelays / 3)) * 20;
//     }
//     let linesOfCode = (Math.ceil(desiredIncome / 50) * 100)

//     console.log(`Васі потрібно написати ${linesOfCode} рядків коду`);
// }

// let linesOfCode = parseFloat(prompt("Введіть кількість рядків коду написаного Василем"));
// if (linesOfCode < 100) {
//     console.log(`Вася не буде писати отримувати кошти`);
// }
// let desiredIncome = parseFloat(prompt("Введіть бажаний дохід Васі"));
// if (desiredIncome < 50) {
//     console.log(`Може не писати код. Мінімальний дохід від написання буде 50$, не враховувючи запізнення`);
// }

// let fullBlockOfCod = Math.floor(linesOfCode / 100);
// let income = fullBlockOfCod * 50;

// let lateCount = 0;
// for ( let i = 1; i <= fullBlockOfCod; i++) {
//     if (i % 3 === 0) {
//         lateCount++;
//     }
// }


// console.log(`Вася може запізнитися ${} разів`);