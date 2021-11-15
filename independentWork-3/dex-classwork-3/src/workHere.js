// const workerExample = {
//   name: "Igor",
//   age: 34,
//   address: {
//     street: "Lenin",
//     house: 23,
//     apartments: 16
//   },
//   userBonuses: {
//     2019: 700,
//     2020: 750,
//     2021: 100
//   },
//   wage: 500,
//   hobby: ["chess", "basketball"]
// };

// TODO: Отсортировать пользователей по уровню зп
// Вывод: отсортированные зп через запятую
export const getSortWage = (data) => {

  return data.map(item => item.wage).sort((a,b)=> a-b).join(';')

};

// TODO: Вывести зп всех пользователей
// Число (сумма всех зп)
export const getWageSum = (data) => {
  return data.map(item => item.wage).reduce((sum,el) => sum+el, 0)
};

// TODO: Вывести пользователя с женским именем, знаем, что имя Ekaterina
export const getWomenName = (data) => {

  // return data.map(item => item.name).find(name => name =='Ekaterina')
  return data.map(item => item.name).find(name => name.slice(-1) == 'a')
  
  // let nameInd = data.findIndex(item => item.name == 'Ekaterina')
  // return data[nameInd].name;
};

// TODO: Вывести самого молодого и самого старшего пользователя
// Вывод: "Самого младшего пользователя зовут {...} и ему ${age}.
// Самого старшего пользователя зовут {...} и ему ${age}."
export const getMinMaxUserAge = (data) => {



};

// TODO: Вывести кол-во пользователей, играющих в баскетбол
// Элемент выглядит как "basketball"
// Вывод: "В баскетбол играют {число} пользователей"
export const getBasketPlayers = (data) => {
  return data.filter(item => item.hobby.includes('basketball')).length
};

//TODO: Вывести  пользователей, у которых в адресе есть число, к примеру
// {street: "8 March"}
// Вывод: "По адресу {...} живут пользователи {...}"
export const getUsersAddress = (data) => {
  let adress_list = data.filter(el => parseInt(el.address.street, 10));
  let street_list = adress_list.map(el=>el.address.street);
  let name_list = adress_list.map(el=>el.name);
  return `По адрессам ${street_list} живут ${name_list}`;
};

//TODO: Вывести имена пользователей и количество их бонусов за все года, удвоить их
// Вывод: "Пользователи {...} получат соответственно {...} бонусов
export const getDoubleUserBonuses = (data) => {
  let userBon = data.map(item => {
    let sum = 0;
    for (let value of Object.values(item.userBonuses)){
      sum+=value;
    }
    return sum*2;
  })
  return `Пользователи ${data.map(el=> el.name)} получат соответственно ${userBon}`
  
};
