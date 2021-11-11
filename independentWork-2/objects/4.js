// У нас есть объект, в котором хранятся зарплаты нашей команды:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

const sum = obj => {

  let salary_list = Object.values(obj);
  return salary_list.reduce((salary_sum, el) => salary_sum+=el, 0);

}

console.log(sum(salaries));

// Если объект salaries пуст, то результат должен быть 0.