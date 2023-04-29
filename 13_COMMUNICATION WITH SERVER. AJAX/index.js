const $buttonVote = $('#vote')
$buttonVote.on('click', () => {
    $.ajax({
        url: 'http://localhost:5000/vote',
        success: (resp) => {
            $buttonVote.text(resp);
        },
    });
});

const $buttonBooks = $('#books');

$buttonBooks.on('click', () => {
    fetch('http://localhost:5000/books')
        .then((resp) => resp.json())
        .then((data) => {
            const books = JSON.parse(data);
            const $table = $('#table-books');
            $table.find('tbody tr:gt(0)').remove();
            books.forEach((book) => {
                const $row = $('<tr>').appendTo($table)
                $('<td>').text(book.author).appendTo($row)
                $('<td>').text(book.title).appendTo($row)
                $('<td>').text(book.$pages).appendTo($row)
            });
        });
});

const $buttonUser = $('#user');

$buttonUser.on('click', () => {
    $.ajax({
        url: 'http://randomuser.me/api',
        dataType: 'json',
        success: (data) => {
            const user = data.results[0];
            const name = Object.values(user.name).reduce(
                (prev, current) => prev + current + ' ',
                ''
            );
            const $avatar = $('<img>').attr('src', user.picture.medium);
            const $table = $('#table-user');
            const $row = $('<tr>').appendTo($table);
            $('<td>').append($avatar).appendTo($row);
            $('<td>').text(name).appendTo($row);
            $('<td>').text(user.dob.age).appendTo($row);
            $('<td>').text(user.gender).appendTo($row);
            $('<td>').text(user.location.country).appendTo($row);
            $('<td>').text(user.login.username).appendTo($row);
            $('<td>').text(user.login.password).appendTo($row);
            $('<td>').text(user.email).appendTo($row);
        }
    })
})