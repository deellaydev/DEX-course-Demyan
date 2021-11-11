// Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
// Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
// Если объект salaries пуст, то результат должен быть 0.

// Например:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

const sumSalaries = salaries => {

  let sum_salaries = 0;
  for (let el of Object.values(salaries)){
    sum_salaries += el;
  }

  return sum_salaries;

}


console.log( sumSalaries(salaries) ); // 650