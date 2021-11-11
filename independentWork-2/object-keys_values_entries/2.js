// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
  name: 'John',
  age: 30,
};

const count = obj => {

  let counter = 0;
  for (let el in Object.keys(obj)){
    counter++;
  }
  return counter;

}

console.log( count(user) ); // 2
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».