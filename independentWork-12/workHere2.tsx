import { combineReducers, createStore } from "redux";

interface IState {
  departments: Array<string>;
  emloees: Array<{ name: string; age: number }>;
}

const InitialState: IState = {
  departments: [],
  emloees: []
};

interface IAction {
  type: string;
  payload: string
    | {name: string;departments: string;};
}


interface IActionDepartments {
  type: string;
  payload: string;
}

interface IActionEmloees {
  type: string;
  payload: {
    name: string;
    departments?: string;
  };
}

const DepartmentsAdd: IActionDepartments = {
  type: "departments/add",
  payload: "Mobile"
};
const DepartmentsDelete: IActionDepartments = {
  type: "departments/delete",
  payload: "Mobile"
};

const departmentsReducer = (
  state = InitialState.departments,
  action: IActionDepartments
): Array<string> => {
  switch (action.type) {
    case "departments/add":
      return [action.payload, ...state];
    case "departments/delete":
      return state.filter((el) => action.payload !== el);
    default:
      return state;
  }
};

// Создать редюсер с экшонами "emloees/add" и "emploees/delete"

const EmloeesAdd: IActionEmloees = {
  type: "emloees/add",
  payload: { name: "John", departments: "Mobile" }
};
const EmloeesDelete: IActionEmloees = {
  type: "emploees/delete",
  payload: { name: "John" }
};

const emloeesReducer = (
  state = InitialState.emloees,
  action: IActionEmloees
): Array<{}> => {
  switch (action.type) {
    case "emloees/add":
      return [action.payload, ...state];
    case "emploees/delete":
      return state.filter((user) => user.name !== action.payload.name);
    default:
      return state;
  }
};

// Создать рут редюсер

// const rootReducer = combineReducers({departments: departmentsReducer, emloees: emloeesReducer})

const rootReducer = (state = InitialState, action: IAction): any => {
  return {
    departments: departmentsReducer(state.departments, action),
    emloees: emloeesReducer(state.emloees, action)
  };
};
// создать стор

const store = createStore(rootReducer);

// вызвать каждый экшон

store.dispatch(DepartmentsAdd);
console.log(store.getState());
store.dispatch(DepartmentsDelete);
console.log(store.getState());
store.dispatch(EmloeesAdd);
console.log(store.getState());
store.dispatch(EmloeesDelete);
console.log(store.getState());

// законсолить изменения стейта
