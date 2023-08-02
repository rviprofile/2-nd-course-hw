let password = 'November1961';
let userPassword = String(prompt('Введите пароль'))

if (password = userPassword) {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен не верно");
}

let c = 3;
(c >= 0 && c <= 10) ? console.log('Верно') : console.log('Не верно');

let d = 6;
let e = 55;
(d >= 100 || e >= 100) ? console.log('Верно') : console.log('Не верно');

let a = '2';
let b = '3';
let result = Number(a) + Number(b);
alert(result);

let monthNumber = 12;
switch (monthNumber) {
    case 12 || 1 || 2:
        console.log('Зима');
        break;
    case 3 || 4 || 5:
        console.log('Весна');
        break;
    case 6 || 7 || 8:
        console.log('Лето');
        break;
    case 9 || 10 || 11:
        console.log('Осень');
        break;
    default: console.log('Такого месяца пока нет');
        break;
}


