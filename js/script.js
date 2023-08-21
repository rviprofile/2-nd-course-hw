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

// 2.8 Callback, setTimeout, setInterval
// Задание 1
const peoplee = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 console.log(peoplee.sort((a, b) => a.age < b.age ? -1 : 1));

//Задание 2
function isPositive(int) {
    let result = int > 0 ? true : false;
    return result;
}
function isMale(obj) {
    let result = obj.gender === 'male' ? true : false;
    return result;
}
function filter (arr, callback) {
    const output = [];
    arr.forEach(element => {
        if (callback(element)) {
            output.push(element)
        };
    });
    return output;
}
    
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

//Задание 3
function timer() {
    const interval = setInterval(() => {console.log(new Date)}, 3000);
    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }, 30000);
}
timer();

//Задание 4
function delayForSecond(callback) {
    setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//Задание 5
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя
// Нужно изменить код ниже:
function sayHiName() {sayHi('Глеб')};
delayForSecond(sayHiName);