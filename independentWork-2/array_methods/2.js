// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)


// Сначала понял, что должен отдаваться массив, индексы эллементов которого находятся между a и b. Посмотрев после решение понял, что сами числа
// Должны быть больше а и меньше b
// const filterRange = (arr, a, b) => {

//   let new_arr = [];

//   if (a>b){
//     let temp = a;
//     a = b;
//     b = temp;
//   }



//   for (let i = a, f = 0;i<b-1;i++,f++){
//     new_arr[f] = arr[i];
//   }

//   return new_arr;
// }

// Решил по задумке условия

const filterRange = (arr, a, b) => {
  if (a>b){
    let temp = a;
    a = b;
    b = temp;
  }
  return arr.filter(el => el>=a && el<=b);
}

let arr = [5,3,8,1];
let filtered = filterRange(arr, 4, 1);
console.log(filtered);
console.log(arr);