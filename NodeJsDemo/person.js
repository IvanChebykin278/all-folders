
//Функция обработки модуля
// (function (exports, requir, module, __filename, __dirname) {

// })


//__dirname имя директории, ___filename поленое имя файла т.е +путь
//console.log(__dirname, __filename);

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        console.log('My name is ' + this.name + ', I am ' + this.age);
    }
}


//module.exports функция которая возвращает результат для reqire
module.exports = Person;