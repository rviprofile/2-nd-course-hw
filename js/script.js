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
function countNumber (number) {
    if (number % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число не четное';
    }
}
countNumber(7);

// Задание 3
function square (num) {
    console.log(num ** 2);
}

function squareAlt (num) {
    return num ** 2;
}

square(8);
squareAlt(9);

// Задание 4
function verifyAge () {
    let userAge = Number(prompt('Сколько Вам лет?'));
    if (isNaN(userAge) || userAge == '') {
        alert('Вы ничего не ввели');
    } else if (userAge >= 13) {
        alert('Добро пожаловать!');
    } else if (userAge <= 12 && userAge >= 0) {
        alert('Привет, друг!');
    }
}
verifyAge();

// Задание 5
function multiply (a, b) {
    if (isNaN(a) || isNaN(b) || a == '' || b == '') { 
        alert('Одно или оба значения не являются числом');
    } else {
        return a * b;
    }
}
multiply(7, "P");

// Задание 6
function cube () {
    let a = Number(prompt('Введите число'));
    if (isNaN(a) || a == '') {
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

function season () {
    let monthNumber = Number(prompt("Введите номер месяца"));
    switch (monthNumber) {
        case 12:
        case 1:
        case 2:
            alert('Зима');
            break;
        case 3:
        case 4:
        case 5:
            alert('Весна');
            break;
        case 6:
        case 7:
        case 8:
            alert('Лето');
            break;
        case 9:
        case 10:
        case 11:
            alert('Осень');
            break;
        default: 
            alert('Такого месяца пока нет');
            break;
    }
}