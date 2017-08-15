let http = require('http');

let fs = require('fs');

let server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url + ', ' + __dirname);
    res.writeHead(200, {'Content-Type': 'text/plain'});

    let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
 
    myReadStream.pipe(res);
});

server.listen(3000, '127.0.0.1');

console.log('yo dawgs, now listening to port 3000');
