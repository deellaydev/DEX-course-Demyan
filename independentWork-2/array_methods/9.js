// Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// Например:

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

const sortByAge = arr => {
  arr.sort((a,b)=> a.age>b.age?1:-1);
}

sortByAge(arr);

// // теперь: [vasya, masha, petya]
console.log(arr[0].name); // Вася
console.log(arr[1].name); // Маша
console.log(arr[2].name); // Петя