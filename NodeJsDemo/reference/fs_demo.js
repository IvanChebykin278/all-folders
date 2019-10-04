const fs = require('fs');
const path = require('path');

//Создание папки
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if(err) throw err;
//     console.log('Folder created...');
// });

//Создание и запись файла
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello world!', err => {
    if(err) throw err;
    console.log('File wrtten to...');
});