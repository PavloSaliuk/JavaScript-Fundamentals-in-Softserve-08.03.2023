// 1

// function firstLetter(str) {
//     if (/^[A-Z]/.test(str)) {
//         return "String's starts with uppercase character"
//     } else {
//         return "String's not starts with uppercase character"
//     }
// }

// console.log(firstLetter('regexp'));
// console.log(firstLetter('RegExp'));

// 2
// function emailCheck1(email) {
//     const check1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return check1.test(email);
// }
// function emailCheck2(email) {
//     const check2 = /^[a-zA-z0-9._-]+@[a-zA-z0-9._-]+.[a-zA-z]{2,}$/;
//     return check2.test(email);
// }
// function emailCheck3(email) {
//     const check3 = /^\S+@\S+\.\S+$/;
//     return check3.test(email);
// }

// console.log(emailCheck1("Qmail2@gmail.com"));
// console.log(emailCheck1("13.com"));
// console.log(emailCheck2("Qmail2@gmail.com"));
// console.log(emailCheck2("13.com"));
// console.log(emailCheck3("Qmail2@gmail.com"));
// console.log(emailCheck3("13.com"));

// 3
// let expression = "Java Script";
// expression = expression.replace(/(\w+)\s+(\w+)/, "$2, $1");
// console.log(`Вихід "${expression}"`);

// 4
// function validate(input) {
//     const numberCard = /^(\d{4}-)(\d{4}-)(\d{4}-)(\d{4})$/;
//     return numberCard.test(input)
// }
// console.log(validate("9999-9999-9999-9999"));
// console.log(validate("1234-4567-8901-123a"));
// console.log(validate("1234-4567-8901-12312"));
// console.log(validate("1234-4567-8901-123"));
// console.log(validate("1234-4567-8901-123"));
// console.log(validate("1234-4567-890111123"));

// 5
// function checkEmail(email) {
//     const details = /^[A-Za-z0-9][A-aZ-z0-9_\-\.]*[A-aZ-z0-9]([_\-\.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([\.-][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;

//     if (details.test(email)) {
//         return "Email is correct!"
//     } else {
//         return "Email is not correct!"
//     }
// }

// console.log(checkEmail('my_mail@gmail.com'));
// console.log(checkEmail('#my_mail@gmail.com'));
// console.log(checkEmail('my_ma--il@gmail.com'));

// 6
// const checkLogin = (login) => {
//     const numbers = login.match(/[\d.]+/g);
//     const loginRegex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/;
//     if(!loginRegex.test(login)){
//         return `false\n //${numbers ? numbers.join(", ") : ""}`
//     }
//     return `true\n //${numbers ? numbers.join(", ") : ""}`;
// }

// console.log(checkLogin("ee1.1ret3"));
// console.log(checkLogin("ee1*1ret3"));
// console.log(checkLogin("ee1r2et3"));

// 7
