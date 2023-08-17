// Задание 1
let str = 'js';
str = str.toUpperCase();
console.log(str);

// Задание 2
let newArray = [];
function searchString (arrayStrings, startString) {
    arrayStrings.forEach((arrayStrings) => {
        if (arrayStrings.toLowerCase().startsWith(startString.toLowerCase())) {
            newArray.push(arrayStrings);
        }
    })
}
let nouns = ['Комод','Кошка','Рельсы','Шпалы','Кирпичи','Вопрос','Очередь','Кофта',];
let filter = 'Ко';
searchString(nouns, filter);
console.log(newArray);

// Задание 3
let numb = 32.58884;
console.log(Math.floor(numb));
console.log(Math.ceil(numb));
console.log(Math.round(numb));

// Задание 4
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5
function getRandomInt(minValue, maxValue) {
    return Math.round(Math.random() * maxValue);
}
console.log(getRandomInt(0, 10));

// Задание 6
let arrRandom = [];
function forArrRandom (number) {
    while (arrRandom.length < Math.floor(number / 2)) {
        arrRandom.push(Math.round(Math.random() * number));
    }
}
forArrRandom(14);
console.log(arrRandom);

// Задание 7
function randomInt (a, b) {
    return Math.round(Math.random() * (b - a)) + a;
}
console.log(randomInt(3,9));

// Задание 8
console.log(new Date());

// Задание 9
let currentDate = new Date();
console.log(currentDate.setDate(currentDate.getDate() + 73));

// Задание 10


// Задание 11
const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function shuffle (array) {
    let currentIndex = array.length, randomIndex; 
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function wordsGame() {
    let newWords = shuffle(words); // создал новый массив из перемешанных слов
    alert(newWords); 
    let score = 0; // присвоил игроку счёт равный нулю
    let firstUserAnswer = prompt('Чему равнялся первый элемент массива?');
    let secondUserAnswer = prompt('Чему равнялся последний элемент массива?');

    // Проверка первого слова и увеличение счёта
    if (firstUserAnswer.toLowerCase() === newWords[0].toLowerCase()) {
        score++;
    };

    // Проверка второго слова и увеличение счёта
    if (secondUserAnswer.toLowerCase() === newWords[newWords.length - 1].toLowerCase()) {
        score++;
    };

    // Подведение итогов
    switch (score) {
        case 0:
            alert('Вы ответили не верно');
            break;
        case 1:
            alert('Вы были близки к победе');
            break;
        case 2:
            alert('Поздравляю, вы вспомнили оба слова!');
            break;
    }
}


// Игра из 2.5
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
