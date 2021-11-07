//УСЛОВНЫЕ ВЕТВЛЕНИЯ

// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let answer = prompt("Какое 'официальное' название JavaScript?","");

// Способ с конструкцией if..else
if (answer=="ECMAScript"){
  alert("Верно!");
} else{
  alert("Не знаете? ECMAScript!");
}

// Способ с тернарным оператором
(answer=="ECMAScript")?alert("Верно!"):alert("Не знаете? ECMAScript");



// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
// 1, если значение больше нуля,
// -1, если значение меньше нуля,
// 0, если значение равно нулю.
// Предполагается, что пользователь вводит только числа.

let num = prompt("Введите число","");

// Способ с конструкцией if..else
if (num>0){
  alert(1);
} else if (num<0){
  alert(-1);
} else{
  alert(0);
}

// Способ с тернарным оператором
(num>0)?alert(1):
  (num<0)?alert(-1):
  alert(0);

// Перепишите if..else с использованием нескольких операторов '?'.
// Для читаемости рекомендуется разбить код на несколько строк.
  
// let message;
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
let login=prompt("Введите login","");
let message = (login=="Сотрудник")?"Привет":
  (login=="Директор")?"Здравствуйте":
  (login=="")?"Нет логина":
  "";
alert(message);





// ТИПЫ ДАННЫХ

// Что выведет этот скрипт?

let name = "Ilya";
console.log( `hello ${1}` ); // hello 1, так как внутри конструкции ${} задано число
console.log( `hello ${"name"}` ); // hello name, так как внутри конструкции ${} задана строка
console.log( `hello ${name}` ); // hello Ilya, так как внутри конструкции ${} задано значение переменной name = "Ilya"


// Проверил разные типы данных
let user = {};
let val;

console.log(typeof 12);
console.log(typeof 12n);
console.log(typeof "String");
console.log(typeof true);
console.log(typeof null);
console.log(typeof user);
console.log(typeof Symbol("id"));
console.log(typeof val);





// ПРЕОБРАЗОВАНИЕ ТИПОВ

// Строковые преобразования
let digit = 15;

console.log(typeof digit);
digit = String(digit);
console.log(typeof digit);

// Числовые преобразования
let str = "257";

console.log(typeof str);
str = Number(str);
console.log(typeof str);

console.log("15"/"5"); // Преобразует строки в числа

console.log(Number("Строка")); // NaN
console.log(Number(true)); // 1, если false, то 0
console.log(Number("")); // 0
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0

// Логические преобразования
console.log(Boolean(NaN)); // false
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean("")); // false

console.log(Boolean(" ")) // true
console.log(Boolean("0")) // true





// ЧИСЛА

// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
let num1 = Number(prompt("Введите первое число", "")); // Преобразование в число через метод Number()
let num2 = +prompt("Введите второе число", ""); // Преобразование в число через унарный оператор +

alert(num1 + num2);


// Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

// Например:

// alert( 1.35.toFixed(1) ); // 1.4
// Но почему в примере ниже 6.35 округляется до 6.3?

// alert( 6.35.toFixed(1) ); // 6.3
// Как правильно округлить 6.35?

console.log(6.35.toFixed(25)); // Видим, что происходит потеря точночти и на самом деле число округляется в меньшую сторону
console.log(Math.round(6.35 * 10) / 10); // Данным способом можно избежать проблему и правильно округлить число


// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
// Функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.

const readNumber = () =>{
  let isNumber;

  do{
    isNumber = +prompt("Введте число", "");
  } while(!isFinite(isNumber));

  if (isNumber == null || isNumber == "") {
    return null;
  }

  return isNumber;
}

console.log(readNumber());


// Этот цикл – бесконечный. Он никогда не завершится, почему?

// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }

console.log(0.2.toFixed(25)); // При проверке виден хвост в конце данной дроби => мы НЕ получим значение 10, складывая данные дроби


// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
// Пример работы функции:

// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

const random = (min,max) => {
  return Math.random()*(max-min) + min; // Воспользовался формулой - [0,1) * (max-min) + min
}

console.log(random(1,5));


// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
// Пример работы функции:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

const randomInteger = (min,max) => {
  return Math.floor(Math.random()*((max+1)-min) + min); // Делаю генерацию чисел в интервале от min (1) включительно до max+1 (6), не включительно.
}                                                       // И округляю число в меньшую сторону => каждое число в заданном интервале будет иметь одинаковый шанс

console.log(randomInteger(1,5));





// СТРОКИ

// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// ucFirst("вася") == "Вася";

const ucFirst = str =>{
  if (!str) {
    return str;
  }
  return str = str[0].toUpperCase() + str.slice(1); // Делаю первую букву заглавное и соединяю строку со словом, без учёта 1 буквы
}

console.log(ucFirst('строка'));


// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

const checkSpam = checkStr =>{
  return (checkStr.toLowerCase().includes('viagra') || checkStr.toLowerCase().includes('xxx')); // Привожу строку к нижнему регистру и проверяю наличие фраз
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit"));


// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…",
// так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.

// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"

const truncate = (str, maxLenght) => {
  if (str.length > (maxLenght)){
    return str.slice(0, maxLenght - 1) + '…'; // Если длина строки больше максимальной, то оставляю нужную часть и прибавляю символ
  }
  else{
    return str;
  }
}

 console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
 console.log(truncate("Всем привет!", 20));


// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.

// Например:
// alert( extractCurrencyValue('$120') === 120 ); // true

const extractCurrencyValue = str => {
  // return +str.slice(1);
  return Number(str.slice(1)); // Если цена всегда задаётся форматом $число, то данная ф-ция подходит для этой цели (Просто отбрасываю знако доллара)
}

console.log(extractCurrencyValue("$120") === 120);





// ДАТА И ВРЕМЯ

// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
// Для вывода используйте alert.

let firstDate = new Date(2012, 1, 20, 3, 12); // 2012  год, 1 - февраль, 20 - день, 3 - час, 12 - минуты
alert(firstDate);


// Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

// Например:
// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getWeekDay(date) );        // нужно вывести "ВТ"

const getWeekDay = date => {
  return (date.getDay() == 0)?'ВС':
    (date.getDay() == 1)?'ПН':
    (date.getDay() == 2)?'ВТ':
    (date.getDay() == 3)?'СР':
    (date.getDay() == 4)?'ЧТ':
    (date.getDay() == 5)?'ПТ':
    (date.getDay() == 6)?'СБ':
    ''
}

let secondDate = new Date(2012, 0, 3);
console.log(getWeekDay(secondDate));


// В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7).
// Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.

// let date = new Date(2012, 0, 3);  // 3 января 2012 года
// alert( getLocalDay(date) );       // вторник, нужно показать 2

const getLocalDay = date => (date.getDay()==0)?7:date.getDay(); // Если день нулевой - ВС, то просто возвращаю 7

let thirdDate = new Date(2012, 0, 3);
console.log(getLocalDay(thirdDate));



// Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

// let date = new Date(2015, 0, 2);
// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
// P.S. Функция не должна изменять переданный ей объект date.

const getDateAgo = (date, days) => {
  let tempDate = new Date(date); // Ввёл временную переменную, чтобы не изменять внешюю дату
  return tempDate.getDate(tempDate.setDate((tempDate.getDate() - days))); // Получаю число, из изменившейся даты
}

let date = new Date(2015, 0, 2);
console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)


// Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.
// Параметры
// year – год из четырёх цифр, например, 2012.
// month – месяц от 0 до 11.
// К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).

const getLastDayOfMonth = (year, month) => {
  let tempDate = new Date(year, month+1, 0); // Беру следующий месяц от переданного и возвращаю на 1 день назад 
  return tempDate.getDate();
}

console.log(getLastDayOfMonth(2012,1));


// Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.
// Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

// getSecondsToday() == 36000 // (3600 * 10)

const getSecondsToday = () =>{
  let dateNow = new Date(); // Получаю время прямо сейчас
  let dateMidnight = new Date (dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate()); // Получаю дату со времени 00:00 - полуночь

  return (dateNow-dateMidnight)/1000;
}

console.log(getSecondsToday());



// Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.
// Например, если сейчас 23:00, то:

// getSecondsToTomorrow() == 3600
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.

const getSecondsToTomorrow = () =>{
  let dateNow = new Date(); // Получаю время прямо сейчас
  let dateMidnight = new Date (dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate()+1); // Получаю дату со времени 00:00 - полуночь

  return (dateMidnight-dateNow)/1000;
}

console.log(getSecondsToTomorrow());



// Напишите функцию formatDate(date), форматирующую date по следующему принципу:

// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
// В противном случае, если меньше часа, вывести "m мин. назад".
// В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.
// Например:

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

const formatDate = date => {

  let difference = new Date() - date; // Узнаю разницу в мс
  if (difference < 1000){
    return 'Прямо сейчас';
  }

  let seconds = Math.floor(difference/1000); //Узнаю разницу в с
  if (seconds < 60) {
    return `${seconds} сек.назад`;
  }

  let minutes = Math.floor(seconds/60); // Узнаю разницу в м
  if (minutes < 60){
    return `${minutes} мин.назад`;
  }

  let newYear = '0' + date.getFullYear(); // Формирую строку в формате 0год
  let newMonth = '0' + (date.getMonth()+1); // Формирую строку в формате 0месяц
  let newDay = '0' + date.getDate(); // Формирую строку в формате 0число
  let newHour = '0' + date.getHours(); // Формирую строку в формате 0час
  let newMinutes = '0' + date.getMinutes(); // Формирую строку в формате 0минут

  return `${newYear.slice(-2)}.${newMonth.slice(-2)}.${newDay.slice(-2)}, ${newHour.slice(-2)}:${newMinutes.slice(-2)}` // Делаю вывод в нужном формате, считывая последние 2 символа строки

}

console.log( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"
console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"
console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"
console.log( formatDate(new Date(new Date - 86400 * 1000)) );






// БАЗОВЫЕ ОПЕРАТОРЫ


// Чему будут равны переменные a, b, c и d в примере ниже?

// let a = 1, b = 1;
// let c = ++a; // a = 2 -> c = 2
// let d = b++; // d = 1 -> b = 2



// Чему будут равны переменные a и x после исполнения кода в примере ниже?

// let a = 2;
// let x = 1 + (a *= 2); a = 4 -> x = 5



// Какой результат будет у выражений ниже?

// "" + 1 + 0 -> "10"
// "" - 1 + 0 -> -1
// true + false -> 1
// 6 / "3" -> 2
// "2" * "3" -> 6
// 4 + 5 + "px" -> "9px"
// "$" + 4 + 5 -> "$45" 
// "4" - 2 -> 2
// "4px" - 2 - > NaN
// 7 / 0 - > Infinity
// "  -9  " + 5 -> "  -9  5"
// "  -9  " - 5 -> -14
// null + 1 -> 1
// undefined + 1 -> NaN 
// " \t \n" - 2 -> -2



// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
// В чём ошибка? Исправьте её. Результат должен быть 3.

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);
// alert(a + b); // 12

let a = +prompt("Первое число?", 1); // Привожу переменную к типу number
let b = +prompt("Второе число?", 2); // Привожу переменную к типу number
 
alert(a+b);





// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ

// Что выведет код ниже?
console.log( null || 2 || undefined ); // Выведет 2


// Что выведет код ниже?
alert( alert(1) || 2 || alert(3) ); // 1 и 2


// Что выведет код ниже?
console.log( 1 && null && 2 ); // null


// Что выведет код ниже?
alert( alert(1) && alert(2) ); // 1 и undefined


// Что выведет код ниже?
alert( null || 2 && 3 || 4 ); // 3


// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
let age = 90;

if (age>=14 && age<=90){
  console.log(true);
} else console.log(false);


// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
let age_new = 91;

// Первый вариант
if (!(age_new>=14 && age_new<=90)){
  console.log(true);
} else console.log(false);

// Второй вариант
if (age_new<14 || age_new>90){
  console.log(true);
} else console.log(false);



// Какие из перечисленных ниже alert выполнятся?
// Какие конкретно значения будут результатами выражений в условиях if(...)?
if (-1 || 0) console.log( 'first' ); // Выполнится
if (-1 && 0) console.log( 'second' ); // Не выполнится
if (null || -1 && 1) console.log( 'third' ); // Выполнится



// Напишите код, который будет спрашивать логин с помощью prompt.
// Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не введено или нажата клавиша Esc – показать «Отменено», в противном случае отобразить «Я вас не знаю».

// Пароль проверять так:
// Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// Иначе – «Неверный пароль»,
// При отмене – «Отменено».


let userName = prompt("Введите логин","");

if (userName == "Админ"){
  let password = prompt("Введите пароль", "");

  if (password=="Я главный"){
    alert("Здравствуйте!");
  } else if (password=='' || password == null){
    alert("Отменено");
  } else {
    alert("Неверный пароль");
  }
} else if (userName == '' || userName == null){
  alert("Отменено");
} else{
  alert("Я Вас не знаю");   
}






// ОПЕРАТОР СРАВНЕНИЯ

// Каким будет результат этих выражений?
// 5 > 4 -> true
// "ананас" > "яблоко" -> false
// "2" > "12" -> true
// undefined == null -> true
// undefined === null -> false
// null == "\n0\n" -> false
// null === +"\n0\n" -> false