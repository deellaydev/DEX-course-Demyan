// Пусть arr – массив строк.
// Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.


const unique = arr => {
  let temp_arr = [];

  for (let i = 0, j=0; i<arr.length;i++){
    if (!temp_arr.includes(arr[i])){
      temp_arr[j] = arr[i];
      j++; 
    }
  }
  return temp_arr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log( unique(strings) ); // кришна, харе, :-O