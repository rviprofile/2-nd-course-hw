// Задание 1
let password = 'November1961';
let userPassword = prompt('Введите пароль')
if (password === userPassword) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен не верно");
}

// Задание 2
let c = 3;
(c > 0 && c < 10) ? console.log('Верно') : console.log('Не верно');

// Задание 3
let d = 6;
let e = 55;
(d > 100 || e > 100) ? console.log('Верно') : console.log('Не верно');

// Задание 4
let a = '2';
let b = '3';
let result = Number(a) + Number(b);
alert(result);

// Задание 5
let monthNumber = 11;
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default: 
        console.log('Такого месяца пока нет');
        break;
}


