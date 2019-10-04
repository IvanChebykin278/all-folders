
// const Person = require('./person'); //requre функция которая забирает то что возвращает модуль. Параматры: ссылка на модуль (string)

// const secondPeson = new Person('Ivan', 21);

// secondPeson.greeting();

// const Logger = require('./logger');

// const logger = new Logger();

// logger.on('message', (data) => console.log('Colled Listener', data));

// logger.log('hello world!');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if(req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' }); 
    //         res.end(content);
    //     });
    // }

    // if(req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if(err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' }); 
    //         res.end(content);
    //     });
    // }

    // if(req.url === '/api/users') {
    //     const users = [
    //         {name: 'Ivan', age: 21},
    //         {name: 'Pupa', age: 50},
    //         {name: 'Z***pa', age: 44},
    //         {name: 'Buzer', age: 56},
    //         {name: 'Petyn', age: 24}
    //     ];

    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }

    //Создание path файла
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

    console.log(filePath);
    let extname = path.extname(filePath);

    let contentType = 'text/html';

    switch(extname) {
        case '.js':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    //Чтение файла
    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                //Страница не найдена
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, {'Content-Type': 'application/json'});
                    res.end(content, 'utf8');
                })
            } else {
                //Если ошибка сервера
                res.writeHead(500);
                res.end('Server error: ' + err.code);
            }
        } else {
            //Все по кайфу
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content, 'utf8');
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('Server running on port ' + PORT));