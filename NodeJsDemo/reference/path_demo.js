const path = require('path');

//Имя базового файла
console.log(path.basename(__filename));

//Имя директории
console.log(path.dirname(__filename));

//Расширение файла (file extention)
console.log(path.extname(__filename)); 

//Создание path объекта
console.log(path.parse(__filename).base);

//Соединение paths
console.log(path.join(__dirname, 'test', 'hellow.html'));