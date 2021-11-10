export const sum = (f, s) => {

  //TODO: Должны складываться только строки и числа
  // Постарайтесь сложить как можно больше пар и обойти NaN случаи

  // Первое решение, после него нашёл более корткое и не привязанное к порядку
  // let a = f;
  // let b = s;
  // let num_a = typeof a === 'number';
  // let num_b = typeof b === 'number';
  // let str_a = typeof a === 'string';
  // let str_b = typeof b === 'string';

  // if (num_a && num_b){
  //   return a+b;
  // } 
  // else if(num_a){
  //   if (str_b && !isNaN(parseInt(b,10))){
  //     return a+parseInt(b,10);
  //   }
  //   else {
  //     return a;
  //   }
  // }
  // else if(num_b){
  //   if (str_a && !isNaN(parseInt(a,10))){
  //     return b+parseInt(a,10);
  //   }
  //   else{
  //     return b;
  //   }
  // }
  // else{
  //   return 0;
  // }

  // Второй способ
  let a = parseInt(f);
  let b = parseInt(s);

  if (+a && +b){
    return a+b;
  }
  if (+a){
    return a;
  }
  if(+b){
    return b;
  }
  else{
    return 0;
  }
};

export const showPrice = (price, discount) => {

  //TODO: Привести цену к виду: 10.00 р.
  // округлять до копеек в сторону магазина

  const discountedPrice = price - (price * discount) / 100;
  return `${(Math.ceil(discountedPrice*10)/10).toFixed(2)} р.`;
};

export const findSuccess = (bankResponse) => {

  //TODO: Проверьте что в строке есть 'Success' без учёта регистра

  return bankResponse.toLowerCase().includes('success') ? "Yes" : "No";
};

export const dateToString = (date) => {

  //TODO: Преобразовать дату к Вчера/Сегодня/Завтра или год:месяц:день

  let date_tooday = new Date();
  let date_list = new Date(date);
  let difference = date_tooday.getDate() - date_list.getDate();
  switch (difference){
    case -1:
      return 'Завтра';
    case 1:
      return 'Вчера';
    case 0:
      return 'Сегодня';
    default:
      return `${date_list.getFullYear()}:${('0' + (date_list.getMonth()+1)).slice(-2)}:${('0' + date_list.getDate()).slice(-2)}`
  }
};

export const sort = (data) => {

  // TODO: Отсортируйте массив строк по алфавиту

  const collatore = new Intl.Collator('ru-RU');
  return data.sort(collatore.compare);
};
