const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 5000;

app.listen(port, () => {
    console.log(`server listen on port ${port} `);
})

app.get('/', (req, res) => {
    res.json('hello123')
})
app.get('/vote', (req, res) => {
    const today = new Date();
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false,
    }
    const date = today.toLocaleString('en-Us', options);
    res.json(`You wote is accepted ${date}`)
})

const books = [
    { author: "Taras Shevchenko", title: "Kobzar", pages: 384 },
    { author: "Ivan Franko", title: "Zahar Berkut", pages: 256 },
    { author: "Lesya Ukrainka", title: "The Forest Song", pages: 208 },
    {
        author: "Oksana Zabuzhko",
        title: "The Museum of Abandoned Secrets",
        pages: 624,
    },
    { author: "Serhiy Zhadan", title: "Voroshilovgrad", pages: 336 },
];

app.get('/books', (req, res) => {
    res.json(JSON.stringify(books));
})