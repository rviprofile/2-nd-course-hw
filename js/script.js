// // Задание 1
// let password = 'November1961';
// let userPassword = prompt('Введите пароль')
// if (password === userPassword) {
//     alert("Пароль введен верно");
// } else {
//     alert("Пароль введен не верно");
// }

// // Задание 2
// let c = 3;
// (c > 0 && c < 10) ? console.log('Верно') : console.log('Не верно');

// // Задание 3
// let d = 6;
// let e = 55;
// (d > 100 || e > 100) ? console.log('Верно') : console.log('Не верно');

// // Задание 4
// let a = '2';
// let b = '3';
// let result = Number(a) + Number(b);
// alert(result);

// // Задание 5
// let monthNumber = 11;
// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2:
//         console.log('Зима');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Весна');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Лето');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Осень');
//         break;
//     default: 
//         console.log('Такого месяца пока нет');
//         break;
// }

// // Задание 7
// let userNumber = Number(prompt("Введите любое число"));
// if (userNumber % 2 === 0) {
//     alert("Число четное");
// } else {
//     alert("Число не четное");
// };


// hw-4
// Задание 1
let i = 1;
while (i < 3) {
    console.log("Привет");
    i++
}

//Задание 2 
let a = 1;
while (a <= 5) {
    console.log(a);
    a++
}

//Задание 3
let c = 7;
do {
    console.log(c);
    c++
} while (c <= 22);

//Задание 4
const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400,
}
for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]} долларов.`);
}

//Задание 5
let n = 1000;
let num = 0;
do {
    n /= 2;
    num++
} while (n > 50);
console.log(`Получилось число ${n}.`);
console.log(`Потребовалось ${num} итераций.`)

//Задание 6
let firstFriday = Number(prompt("Число первой пятницы."));
for (let day = firstFriday; day <= 31; day+=7) console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
