const http = require('http');
const greeting = require('./personalmodule');
const os = require('os');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});

    let userName = os.userInfo().username;

    res.write(`Date of request: ${greeting.date}<br>`);
    res.write(greeting.showMessage(userName));

    res.end();
}).listen(8000);

console.log('Server running at http://127.0.0.1:8000/');