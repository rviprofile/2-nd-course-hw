//Задание 1
const arr = [1, 5, 4, 10, 0, 3];
for (let elem of arr) {
    if (elem == 10) {
    console.log(elem);
    break; }
}

//Задание 2
const arr2 = [1, 5, 4, 10, 0, 3];
console.log(arr2.indexOf(4));

//Задание 3
const arr3 = [1, 3, 5, 10, 20];
let arrJoin = arr3.join(' ');
console.log(arrJoin);

//Задание 4
let arr4 = [];
for (let i = 0; i < 3; i++) {
    let list = [];
    for (let i = 0; i < 3; i++) {
        list.push(1);
    }
    arr4.push(list);
}
console.log(arr4);

//Задание 5
let arr5 = [1, 1, 1];
for (let i = 0; i < 3; i++) {
    arr5.push(2)
}
console.log(arr5);

//Задание 6
let arr6 = [9, 8, 7, 'a', 6, 5];
arr6.sort();
arr6.pop();
console.log(arr6);

//Задание 7
let arr7 = [9, 8, 7, 6, 5];
let shance = Number(prompt('Угадай число'))
if (arr7.includes(shance)) {
    alert(`Угадал, здесь есть ${shance}`)
} else {
    alert(`Не угадал, здесь нет ${shance}`)
}

//Задание 8
let str = 'abcdef';
let strRev = str.split('').reverse().join('');
console.log(strRev);

//Задание 9
let arr8 = [[1, 2, 3,],[4, 5, 6]];
let arr9 = arr8[0].concat(arr8[1]);
console.log(arr9);

//Задание 10
let arr10 = [4, 4, 9, 2, 3, 7, 9];
for (let i = 0; i < arr10.length-1; i++) {
    let result = arr10[i] + arr10[i+1];
    console.log(result);
}

//Задание 11
let square = arr10.map(item => item ** 2);
console.log(square);

//Задание 12
let words = ['услуга', 'защищать', 'помолчать', 'производство', 'терпеть', 'особенность', ];
let wordslen = words.map(item => item.length);
console.log(wordslen);

//Задание 13
function filterPositive(array) {
    let result = array.filter(item => item < 0)
    return result;
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));

