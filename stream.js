let fs = require('fs');

let myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt', 'utf8');

// 읽기 스트림은 data, end, error 의 eventEmitter 를 가지고 있다.
myReadStream.on('data', (data) => {
    myWriteStream.write(data);
});
myReadStream.on('end', () => {
    
});
myReadStream.on('error', (err) => {
    
});


/*
    var fs = require('fs');
    var request = require('request');

    var stream = request('http://i.imgur.com/dmetFjf.jpg');
    var writeStream = fs.createWriteStream('test.jpg')

    stream.on('data', function(data) {
        writeStream.write(data)
    });

    stream.on('end', fucntion () {
        writeStream.end();
    });

    stream.on('error', function(err) {
        console.log('something is wrong :( ');
        writeStream.close();
    });
*/