import { createStore } from "redux";
// Определить тип для экшона

const InitialState = {
  greetings: `Hello, world`
};

interface IAction {
  type: string;
}

// создать экшены FirstAction, SecondAction, AsyncAction

const FirstAction: IAction = { type: `FIRST_ACTION` };
const SecondAction: IAction = { type: `SECOND_ACTION` };
const AsyncAction: IAction = { type: `ASYNC_ACTION` };

// создать редьюсер, который обрабатывает экшены: первый, второй, асинхронный

const reducer = (state = InitialState, action: IAction): any => {
  switch (action.type) {
    case "FIRST_ACTION":
      return { ...state, greetings: `Hello, I'm FirstAction` };
    case "SECOND_ACTION":
      return { ...state, greetings: `Hello, I'm SecondAction` };
    case "ASYNC_ACTION":
      return { ...state, greetings: `Hello, I'm AsyncAction` };
    default:
      return state;
  }
};

// создать стор

const store = createStore(reducer);

// TODO подписаться на изменения сторы

const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Вызвать каждый экшон по одному разу

store.dispatch(FirstAction);
store.dispatch(SecondAction);
store.dispatch(AsyncAction);

// отписаться от изменений сторы

unsubscribe();

// Вызвать первый экшон ещё раз

store.dispatch(FirstAction);

// Вывести в консоль текущее состояние сторы

// console.log(store.getState());
