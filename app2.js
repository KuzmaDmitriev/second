//result = a || b;

//alert(true || true); //true
//alert(true || false); //true
//alert(false || true); //true
//alert(false || false); //false

/*if (1 || 0) {
  alert("truthy!");
}*/

//1 - true
//0 - false

/*let hour = 9;

if (hour < 10 || hour > 18) {
  alert("Офис закрыт");
}*/

/*let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 19 || isWeekend) {
  alert("Офис закрыт");
}

result = value1 || value2 || value3;

alert(1 || 0); //1
alert(true || "no matter what"); // true
alert(null || 1); //1
alert(null || 0 || 1); //1
alert(undefined || null || 0); //0*/

/*let currentUser = null;
let defaultUser = "John";

let name = currentUser || defaultUser || "unnamed";
alert(name);
*/

/*let x;

true || (x = 1);

alert(x);

let y;

false || (y = 1);

alert(y);*/

/*result = a && b;

alert(true && true); //true
alert(true && false); //false
alert(false && true); //false
alert(false && false); //false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert("The time is 12:30");
}*/

/*if (1 && 0) {
  alert("не срабатывает, так как условие не даст true");
}

result = value1 && value2 && value3;

alert(1 && 0); //0
alert(1 && 5); //5
alert(null && 5); //null
alert(0 && "no matters"); //0*/

//alert(1 && 2 && null && 3); //null
//alert(1 && 2 && 3); //3

//a && b || c && d;

//let x = 1;
//(x > 0) && alert("Greater than zero!");

/*let x = 1;
if (x > 0) {
  alert("Greater than zero!");
}*/

//result = !value;

//alert(!true); //false
//alert(!0); //true

//alert(!!"non-empty"); //true
//alert(!!null); //false

//alert(Boolean("non-empty"));
//alert(Boolean(null));

//let age = 13;

/*if (age < 14 || age > 90) {
  alert("Right");
}*/

/*if (!(age >= 14 && age <= 90)) {
  alert("Right");
}*/

/*if (-1 || 0) {
  alert("first");
}*/

/*if (-1 && 0) {
  alert("second");
}*/

/*if (null || -1 && 1) {
  alert("third");
}*/
/*
let name = prompt("Кто там?", "");

if (name == "admin") {
  password = prompt("Ведите пароль", "");
} else if (name == null || name == "") {
  alert("Отмена");
} else {
  alert("Я не знаю Вас");
}

if (password == "Я главный") {
  alert("Здравствуйте");
} else if (password == null || password == "") {
  alert("Отмена");
} else {
  alert("Неверный пароль");
}
*/
// Оператор объединения с null

//let user = "Иван";

//alert(user ?? "Аноним"); //Аноним
/*
let firstName = null;
let lastName = null;
let nickName = "Суперкодер";

alert(firstName ?? lastName ?? nickName ?? "Аноним");
*/
/*
let height = 0;

alert(height || 100);
alert(height ?? 100);
*/
/*
let height = null;
let width = null;

let area = (height ?? 100) * (width ?? 50);

alert(area);

let area2 = height ?? 100 * width ?? 50;

alert(area2);
*/

let x = (1 && 2) ?? 3;

alert(x);

let height;

height = height ?? 100;

alert(height);
