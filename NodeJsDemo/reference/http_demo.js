const http = require('http');


//Создание обьекта сервера
http.createServer((req, res) => {
    res.write('Hello World!');
    res.end();
}).listen(5000, () => console.log('Server running...'));