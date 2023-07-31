let a = 10;
alert(a);
a = 20;
alert(a);
let firstIphone = 2007;
alert(firstIphone);
let creatorJs = "Брендан Эйх";
alert(creatorJs);

let firstNumber = 10;
let secondNumber = 2;
let sum = (firstNumber + secondNumber);
let dif = (firstNumber - secondNumber);
let comp = (firstNumber * secondNumber);
let quot = (firstNumber / secondNumber);
alert(`${sum}, ${dif}, ${comp}, ${quot}`);

let result = (2 ** 5);
alert(result);

a = 9;
let b = 2;
alert(a % b);

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num = num++;
num = num--;
alert(num);

let age = Number(prompt("Сколько вам лет?"));
alert(age);

let user = {
    name: "John",
    age: 25,
    isAdmin: false,
};
user.cityOfResidence = "Washington";
user.age = 40;
delete user.cityOfResidence;
alert(user.age)

let info = prompt("Какую информацию хотите узнать о пользователе?", 'name');
alert(user[info]);

let yourName = prompt("Как Вас зовут?");
alert(`Привет, ${yourName}!`)
