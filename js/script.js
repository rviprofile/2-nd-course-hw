// Задание 1
function minNumber (a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
console.log(minNumber(1, 2));

// Задание 2
let number = Number(prompt('Введите число'));
function countNumber () {
    if (number % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число не четное';
    }
}
console.log(countNumber());

// Задание 3
let num = Number(prompt('Введите число'));

function square () {
    console.log(num ** 2);
}

function squareAlt () {
    return num ** 2;
}

square();
squareAlt();

// Задание 4
function verifyAge () {
    let userAge = Number(prompt('Сколько Вам лет?'))
    if (userAge < 0) {
        alert('Вы ввели неправильное значение');
    } else if (userAge < 12) {
        alert('Привет, друг!');
    } else {
        alert('Добро пожаловать!');
    }
}
verifyAge();

// Задание 5
function multiply () {
    let a = Number(prompt('Первое число'));
    let b = Number(prompt('Второе число'));
    if (isNaN(a)) { 
        alert('Одно или оба значения не являются числом');
    } else if (isNaN(b)) {
        alert('Одно или оба значения не являются числом');
    } else {
        return a * b;
    }
}
multiply();

// Задание 6
function cube () {
    let a = Number(prompt('Введите число'));
    if (isNaN(a)) {
        return 'Переданный параметр не является числом';
    } else { 
        let result = a ** 3;
        console.log(`${a} в кубе равняется ${result}`);
    }
}

cube();

// Задание 7
function getArea () {
    return Math.PI * this.radius ** 2;
}
function getPerimeter () {
    return Math.PI * this.radius * 2;
}
let circle1 = {
    radius: 10,
    area: getArea,
    perimeter: getPerimeter
}
let circle2 = {
    radius: 15,
    area: getArea,
    perimeter: getPerimeter
}

