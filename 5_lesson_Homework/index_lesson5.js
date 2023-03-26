// 1
// class Circle {
//     constructor(x, y, radius) {
//         this.x = x;
//         this.y = y;
//         this.radius = radius;
//     }
//     getCircleLength() {
//         return 2 * Math.PI * this.radius;
//     }
//     static getCircleLengthFromRadius(radius) {
//         return 2 * Math.PI * radius;
//     }
//     getCopyOfCircle() {
//         return new Circle(this.x, this.y, this.radius);
//     }
//     static createCircle(x, y, radius) {
//         return new Circle(x, y, radius);
//     }
//     pointInCircle(x, y,) {
//         return Math.sqrt(Math.pow((tjis.x - x), 2) + Math.pow((this.y - y), 2)) < this.radius;
//     }
//     toString() {
//         return `Points of circle is: ${this.x} and ${this.y}, and radius: ${this.radius}`;
//     }
// }

// 2  
// function propsCount(currentObject) {
//     let count = 0;
//     for (let prop in currentObject) {
//         count++;
//     }
//     return count;
// }
// let mentor = {
//     course: "JS fundamental",
//     duration: 3,
//     direction: "web-development",
// };

// console.log(propsCount(mentor));

// 3
// class Person {
//     constructor(name, surname) {
//         this.name = name;
//         this.surname = surname;
//     }
//     showFullName() {
//         console.log(`${this.name} ${this.surname}`);
//     }
// }
// class Student extends Person {
//     constructor(name, surname, year) {
//         super(name, surname)
//         this.year = year;
//     }

//     showFullName(middleName) {
//         return `${this.name} ${this.surname} ${middleName}` ;
//     }
//     showCourse() {
//         const currentYear = new Date().getFullYear();
//         return currentYear - this.year;
//     }
// }
// const stud1 = new Student("Petro", "Petrenko", 2019);
// console.log(stud1.showFullName("Petrovych")); 
// console.log("Current course: " + stud1.showCourse());

// 4

// class Marker {
//     constructor(color, inkPersentage) {
//         this.color = color;
//         this.inkPersentage = inkPersentage;
//     }
//     printing(text) {
//         let inkUsage = 0.5;
//         let printedText = "";
//         for (let i = 0; i < text.length; i++) {
//             if (this.inkPersentage >= inkUsage) {
//                 if (text[i] !== " ") {
//                     this.inkPersentage -= inkUsage;
//                 } printedText += text[i];
//             } else {
//                 break;
//             }
//         }
//         console.log("%c" + printedText, "color:" + this.color);
//     }
// }

// class RefillableMarker extends Marker {
//     constructor(color, inkPersentage, refueling) {
//         super(color, inkPersentage);
//         this.refueling = refueling;
//     }
//     refill () {
//         this.inkPersentage = this.refueling;
//     }
// }
// let marker1 = new Marker("red", 10);
// marker1.printing("Hello, from Lviv!It's a best sity in the world");
// let refillableMarker = new RefillableMarker("green", 10, 20);
// refillableMarker.printing("Hello, from Lviv!It's a best sity in the world");
// refillableMarker.refill();
// refillableMarker.printing("Hello, from Lviv!It's a best sity in the world");

// 5 
// class Worker {
//     #experience = 1.2;

//     constructor(fullName, dayRate, workingDays) {
//         this.fullName = fullName;
//         this.dayRate = dayRate;
//         this.workingDays = workingDays;
//     }
//     showSalary() {
//         let salary = this.dayRate * this.workingDays;
//         console.log(`${this.fullName} salary: ${salary}`);
//     }
//     showSalaryWithExperience() {
//         let salaryWihtExp = this.dayRate * this.workingDays * this.#experience;
//         console.log(`${this.fullName} salary: ${salaryWihtExp}`);
//     }
//     get showExp() {
//         return this.#experience
//     }
//     set setExp(value) {
//         this.#experience = value;
//     }
//     static compareWorkerSalary(worker1, worker2) {
//         return worker1.dayRate * worker1.workingDays * worker1.#experience - worker2.dayRate * worker2.workingDays * worker2.#experience
//     }
// }

// let worker1 = new Worker("John Johnson", 20, 23);

// console.log(worker1.fullName);
// worker1.showSalary();
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();
// worker1.setExp = 1.5;
// console.log("New experience: " + worker1.showExp);
// worker1.showSalaryWithExperience();

// let worker2 = new Worker("Tom Tomson", 48, 22);
// console.log(worker2.fullName);
// worker2.showSalary();
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();
// worker2.setExp = 1.5;
// console.log("New experience: " + worker2.showExp);
// worker2.showSalaryWithExperience();

// let worker3 = new Worker("Andy Ander", 29, 23);
// console.log(worker3.fullName);
// worker3.showSalary();
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();
// worker3.setExp = 1.5;
// console.log("New experience: " + worker3.showExp);
// worker3.showSalaryWithExperience();

// let workers = [worker1, worker2, worker3];
// workers.sort((a, b) => {
//     return (a.dayRate * a.workingDays * a.showExp) - (b.dayRate * b.workingDays * b.showExp);
// });
// console.log("Sorted salary: ");
// workers.forEach(worker => {
//     console.log(`${worker.fullName}: ${worker.dayRate * worker.workingDays * worker.showExp}`);
// });