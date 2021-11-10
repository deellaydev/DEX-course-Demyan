// Что выведет следующий код?

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// alert( fruits.length ); // ?

//  Он выведет 4. Так как yе создаётся новый массив, а всего лишь создаётся ссылка на него. И в первоначальный массив записыается ещё один элемент

let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Бананы");
console.log(fruits.length);