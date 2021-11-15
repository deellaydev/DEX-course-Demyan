export const processCartData = (cartData) => {
  //TODO: Нужно добавить поле discount(oldPrice - price)
  // убрать поле oldPrice
  cartData.forEach((item) => {
    if (isFinite(item.oldPrice - item.price) && item.oldPrice > item.price) {
      let temp = item.oldPrice - item.price;
      item.discount = temp;
    }
    delete item.oldPrice;
  });
  return cartData;
};

export const makeCartItemCopy = (cartItem) => {
  //TODO: сделать копию элемента "Пицца с анчоусами"
  // После увеличить кол-во добавленного ингредиента
  function cloneObject(obj) {
    let clone = {};
    for (let prop in obj) {
      if (typeof obj[prop] === 'object') {
        clone[prop] = cloneObject(obj[prop]);
        continue;
      } else {
        clone[prop] = obj[prop];
      }
    }
    return clone;
  }

  let copy = cloneObject(cartItem.find((item) => item.name === "Пицца с анчоусами"));
  if (copy.addedIngredients?.[0].count){
    copy.addedIngredients[0].count++;
  }
  return copy;
};

export const calcSum = (cartData) => {
  //TODO: посчитать суммы по типам товаров и их цены
  return {
    total: {
      count: cartData.reduce((sum, item) => (sum += item.count), 0),
      sum: cartData.reduce((sum, item) => (sum += item.count * item.price), 0)
    },
    water: {
      count: cartData.reduce(
        (sum, item) => (sum += item.type === "water" ? item.count : 0),
        0
      ),
      sum: cartData.reduce(
        (sum, item) =>
          (sum += item.type === "water" ? item.count * item.price : 0),
        0
      )
    },
    pizza: {
      count: cartData.reduce(
        (sum, item) => (sum += item.type === "pizza" ? item.count : 0),
        0
      ),
      sum: cartData.reduce(
        (sum, item) =>
          (sum += item.type === "pizza" ? item.count * item.price : 0),
        0
      )
    },
    other: {
      count: cartData.reduce(
        (sum, item) => (sum += item.type === "other" ? item.count : 0),
        0
      ),
      sum: cartData.reduce(
        (sum, item) =>
          (sum += item.type === "other" ? item.count * item.price : 0),
        0
      )
    }
  };
};

export const getCartItemsByDate = (cartData, date) => {
  //TODO: выбрать покупки сделанные за выбранную дату
  if (!date){
    return cartData;
  } else{
    return cartData.filter(item => {
      let entered_date = new Date(date);
      let item_date = new Date(item.date);
      item_date.setHours(0,0,0,0);
      entered_date.setHours(0,0,0,0);
      const day = 24 * 60 * 60 * 1000;
      if (((entered_date-item_date)/day) === 0){
        console.log(item)
        console.log(entered_date)
        console.log(item_date)
        return item;
      }
  })
  }
  
};

export const repeatOrder = (cartData, date) => {
  //TODO: нужно повторить заказ за выбранную дату
  // дублиовать соответствующие элементы
  // поставить в начало спиcка
  // дату текущую
  // поменять id на уникальный
  function cloneObject(obj) {
    let clone = {};
    for (let prop in obj) {
      if (typeof obj[prop] === 'object') {
        clone[prop] = cloneObject(obj[prop]);
        continue;
      } else {
        clone[prop] = obj[prop];
      }
    }
    return clone;
  }
  
  let copy = cartData.filter(item=> item.date === date);
  for (let i = 0;i<copy.length;i++){
    copy[i] = cloneObject(copy[i]);
    copy[i].date = new Date().toISOString();
    copy[i].id = String(cartData.length+1);
    cartData.unshift(copy[i]);
  }
  return cartData;
};

export const addItem = (cartData, item) => {
  //TODO: увеличить кол-во товара в полученном элементе
  cartData.forEach(el => (el===item)?el.count++:item);
  return cartData;
};

export const checkPromo = (cartData) => {
  //TODO: нужно проверить корзина подходит под правила промоакции
  // проверить что суммарно в корзине больше 1000р
  // что есть пункт больше чем на 500р
  // что нет скидочных товаров
  return {
    total: cartData.reduce((sum, item) => (sum += item.count * item.price), 0)<1000?false:true,
    oneBigPosition: cartData.find(item => (item.count*item.price)>500),
    notDiscounted: cartData.find(item => item.discount)?false:true
  };
};
