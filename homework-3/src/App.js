import "./styles.css";
import { useState } from "react";
import {
  processCartData,
  calcSum,
  getCartItemsByDate,
  repeatOrder,
  addItem,
  checkPromo,
  makeCartItemCopy
} from "./workHere";

const cartData = [
  {
    id: "0",
    type: "pizza",
    price: 123,
    oldPrice: 150,
    name: "Пицца с анчоусами",
    addedIngredients: [
      {
        id: "12",
        name: "анчоусы",
        count: 1
      }
    ],
    removedIngredients: [
      {
        id: "182",
        name: "лук",
        count: 1
      }
    ],
    count: 2,
    date: "2021-10-31T20:55:15.220Z"
  },
  {
    id: "1",
    type: "pizza",
    price: 132,
    oldPrice: 150,
    name: "Пицца с ананасами",
    count: 1,
    date: "2021-10-31T20:55:15.220Z"
  },
  {
    id: "2",
    type: "pizza",
    price: 100,
    oldPrice: 125,
    name: "Пицца неаполитана",
    count: 1,
    date: "2021-10-30T20:55:15.220Z"
  },
  {
    id: "3",
    type: "other",
    price: 50,
    name: "Баскет с крылышками",
    count: 2,
    date: "2021-10-29T20:55:15.220Z"
  },
  {
    id: "4",
    type: "water",
    price: 10,
    name: "Вода минеральная",
    count: 10,
    date: "2021-10-28T20:55:15.220Z"
  },
  {
    id: "5",
    type: "water",
    price: 10,
    oldPrice: 8,
    name: "Сок яблочный",
    count: 5,
    date: "2021-10-28T20:55:15.220Z"
  }
];

export default function App() {
  const [date, setDate] = useState("");
  const [data, setProcessedData] = useState(
    repeatOrder(processCartData(cartData), "2021-10-28T20:55:15.220Z")
  );
  console.log(
    makeCartItemCopy(data).addedIngredients?.[0].count,
    cartData[0].addedIngredients?.[0].count
  );
  const processedData = getCartItemsByDate(data, date);
  const sum = calcSum(processedData);
  const promo = checkPromo(processedData);

  return (
    <div className="App">
      <input onInput={(event) => setDate(event.target.value)} value={date} />
      {processedData.map((el) => {
        return (
          <div
            className="CartItem"
            onClick={() => setProcessedData([...addItem(processedData, el)])}
          >
            <div
              style={{
                display: "flex",
                width: "50%",
                justifyContent: "space-between"
              }}
            >
              <div>{el.name}</div>
              <div>{el.discount ? "Скидка: " + el.discount : ""}</div>
              <div style={{ color: "#ff0000" }}>
                {el.oldPrice ? "Старая цена: " + el.oldPrice : ""}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100px"
              }}
            >
              <div>{el.count}</div>
              <div>{el.price * el.count}</div>
            </div>
          </div>
        );
      })}
      <p />
      <div>
        Всего пиццы: {sum.pizza.count} шт. {sum.pizza.sum} р.
      </div>
      <div>
        Всего воды: {sum.water.count} шт. {sum.water.sum} р.
      </div>
      <div>
        Всего остального: {sum.other.count} шт. {sum.other.sum} р.
      </div>
      <p />
      <div>
        Итого: {sum.total.count} шт. {sum.total.sum} р.
      </div>
      <p />
      <div>
        {promo.total && promo.oneBigPosition && promo.notDiscounted
          ? "Промокод можно применить"
          : "Промокод нельзя применить:"}
      </div>
      <div style={{ color: "#ff0000" }}>
        <div>{promo.total ? "" : "Корзина меньше 1000"}</div>
        <div>{promo.oneBigPosition ? "" : "Нет большой позиции"}</div>
        <div>{promo.notDiscounted ? "" : "Уже есть товары со скидкой"}</div>
      </div>
    </div>
  );
}
