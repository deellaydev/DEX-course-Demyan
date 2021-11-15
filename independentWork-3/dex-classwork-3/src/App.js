import "./styles.css";
import {
  getBasketPlayers,
  getDoubleUserBonuses,
  getMinMaxUserAge,
  getSortWage,
  getUsersAddress,
  getWageSum,
  getWomenName
} from "./workHere";

const usersData = [
  {
    name: "Igor",
    age: 34,
    address: {
      street: "Lenin",
      house: 23,
      apartments: 16
    },
    userBonuses: {
      2019: 700,
      2020: 750,
      2021: 100
    },
    wage: 500,
    hobby: ["chess", "basketball"]
  },
  {
    name: "Ekaterina",
    age: 26,
    address: {
      street: "25 October",
      house: 233,
      apartments: 116
    },
    userBonuses: {
      2019: 400,
      2020: 650,
      2021: 300
    },
    wage: 250,
    hobby: ["ping-pong", "fishing"]
  },
  {
    name: "Evgenii",
    age: 37,
    address: {
      street: "9 January",
      house: 3,
      apartments: 59
    },
    userBonuses: {
      2019: 900,
      2020: 750,
      2021: 150
    },
    wage: 1500,
    hobby: ["basketball", "MMA"]
  },
  {
    name: "Ivan",
    age: 29,
    address: {
      street: "Vosstaniya",
      house: 63,
      apartments: 13
    },
    userBonuses: {
      2019: 300,
      2020: 850,
      2021: 200
    },
    wage: 1200,
    hobby: ["basketball", "tennis"]
  }
];

export default function App() {
  return (
    <div className="App">
      Сортировка зп:
      <div>{getSortWage(usersData)}</div>
      <p />
      Сумма зп:
      <div>{getWageSum(usersData)}</div>
      <p />
      Женское имя:
      <div>{getWomenName(usersData)}</div>
      <p />
      Самый младший и самый старший пользователь:
      <div>{getMinMaxUserAge(usersData)}</div>
      <p />
      Игроки в баскетбол:
      <div>{getBasketPlayers(usersData)}</div>
      <p />
      Адрес пользователя:
      <div>{getUsersAddress(usersData)}</div>
      <p />
      Удвоенные бонусы пользователя:
      <div>{getDoubleUserBonuses(usersData)}</div>
      <p />
    </div>
  );
}
