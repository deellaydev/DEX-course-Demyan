import { compareText } from "./data";

// Написать 2 функции,
// первая обработает ответ от compareText (положительный и отрицательный)
// TODO: первая функция использует then и catch
const getData = (str) => {
  return new Promise(function(resolve, reject){
    compareText(str).then(result => resolve(result)).catch(err => reject(err))
  })
};
// TODO: вторая использует try и catch
// TODO: Если ответ положительный вывести в консоль: "Success: ..."
// TODO: Если ответ отрицательный вывести в консоль: "Error: ..." (тескт ошибки)
const processingData = async (str) => {
  try{
    let answer = await getData(str);
    console.log(`Success: ${answer}`);
  }
  catch (e){
    console.log(`Error: ${e.message}`)
  }
};
processingData("короткий текст");
processingData("длинный тексттттттттттт");

// Используя конструкции then catch
// к положительному ответу добавьте " :)"
// к ответу с ошибкой добавьте " :("
// Если длина ответа меньше 20 символов, то нужно добавить "(" или ")" в зависимости от ответа,
// скобочки нужно добавлять пока длинна не станет равна 20
// TODO: на каждое действи должна быть отдельная конструкция then или catch
// Например первый then для добавления " :)", второй для подсчёта количества символов и добавления недостающих
const getResponse = async (str) => {
  getData(str)
  .then(item => {
    let tempItem = item + ' :)';
    return tempItem
  })
  .then(item => {
    while(item.length!==20){
      item+=')'
    }
    console.log(item)
  })
  .catch(e => {
    throw new Error(e.message += ' :(')
  })
  .catch(e => {
    while(e.message.length!==20){
      e.message += '('
    }
    console.log(e.message)
  })
};

getResponse("короткий текст");
getResponse("Длинный текстттт");

// Написать функцию, которая принимает url и выводит в консоль ответ
// TODO: обработать ошибки и вывести в консоль "Ошибка"
// TODO: ошибка если тстатус меньше 200 и больше 299
const getDataFromAPI = async (url) => {
  try{
    let responce = await fetch(url);
    if (responce.status < 200 || responce.status > 299){
      throw new Error(`Responce status is ${responce.status}`);
    }
    let data = await responce;
    console.log(data);
  }
  catch(e){
    console.log(`Ошибка: ${e.message}`)
  }
};

getDataFromAPI("https://randomuser.me/api");
getDataFromAPI("https://randomuser123.me/api");
getDataFromAPI("https://randomuser.me/api123");
