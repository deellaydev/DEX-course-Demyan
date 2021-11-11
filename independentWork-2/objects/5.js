// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

const multiplyNumeric = obj => {

  let all_values = Object.values(obj);
  let new_values = all_values.map(el => (typeof el == 'number')?el*2:el);
  let i = 0;
  for (let key in obj){
    obj[key] = new_values[i];
    i++;
  }

}

multiplyNumeric(menu);
console.log(menu)

// // после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.

// P.S. Используйте typeof для проверки, что значение свойства числовое.