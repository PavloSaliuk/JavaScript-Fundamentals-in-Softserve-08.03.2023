// 1
// const voteBtn = document.getElementById('vote-btn');

// const { Password } = require("@mui/icons-material");

// voteBtn.addEventListener('click', () => {
//     fetch('/vote')
//     .then(response => response.text())
//     .then(text => {
//         const date = new Date();
//         const dateString = date.toLocaleString();
//         voteBtn.textContent = `Your vote is accepted: ${dateString}`;
//     })
//     .catch(error => {
//         console.log(error);
//     });
// });

//2

// const loadBooksBtn = document.getElementById('load-books-btn');
// const booksList = document.getElementById('books-list');

// loadBooksBtn.addEventListener('click', async () => {
//     try {
//         const response = await fetch('books.json');
//         const data = await response.json();
//         const authors = data.map(({ author }) => author);

//         for (const author of authors) {
//             const li = document.createElement('li');
//             li.textContent = author;
//             booksList.appendChild(li);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// });

//2
// const loadBooksBtn = document.getElementById('load-books-btn');
// const booksList = document.getElementById('books-list');

// loadBooksBtn.addEventListener('click', async () => {
//     try {
//         const response = await fetch('books.json');

//         if (!response.ok) {
//             throw new Error('Network response was not ok')
//         }
//         const data = await response.json();
//         const authors = data.map(({ author }) => author);

//         for (const author of authors) {
//             const li = document.createElement('li');
//             li.textContent = author;
//             booksList.appendChild(li);
//         }
//     } catch (error) {
//         console.error(error);
//     }
// });

//3

// const avatarEl = document.getElementById('avatar');
// const nameEl = document.getElementById('name');
// const ageEl = document.getElementById('age');
// const genderEl = document.getElementById('gender');
// const countryEl = document.getElementById('country');
// const usernameEl = document.getElementById('username');
// const passwordEl = document.getElementById('password');
// const emailEl = document.getElementById('email');

// fetch('https://randomuser.me/api/')
//     .then(response => response.json())
//     .then(data => {
//         const userData = data.results[0];
//         const avatar = userData.picture.large;
//         const name = `${userData.name.first} ${userData.name.last}`;
//         const age = userData.dob.age;
//         const gender = userData.gender;
//         const country = userData.location.country;
//         const username = userData.login.username;
//         const password = userData.login.password;
//         const email = userData.email;

//         avatarEl.src = avatar;
//         nameEl.textContent = name;
//         ageEl.textContent = age;
//         genderEl.textContent = gender;
//         countryEl.textContent = country;
//         usernameEl.textContent = username;
//         passwordEl.textContent = password;
//         emailEl.textContent = email;
//     })
//     .catch(error => console.error('Error:', error));