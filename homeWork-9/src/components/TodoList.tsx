import { FC } from "react";
import { ITodo } from "../types";
import { TodoCard } from "./TodoCard";

interface ITodoListProps {
  todos: ITodo[];
  deleteCallback: (id: number) => void;
}

//TODO: сделать TodoList компонент

export const TodoList: FC<ITodoListProps> = ({ todos, deleteCallback }) => {
  return (
    <div>
      <p style={{ margin: "15px 15px 5px", fontSize: "18px" }}>
        {todos.length ? "Список:" : "Пусто"}
      </p>
      {todos.map((todo) => (
        <TodoCard todo={todo} deleteCallback={deleteCallback} id={todo.id} />
      ))}
    </div>
  );
};
