import { FC } from "react";
import { ITodo } from "../types";

interface TodoCardProps {
  todo: ITodo;
  deleteCallback: (id: number) => void;
  id: number;
}

//TODO: сделать компонент TodoCard

export const TodoCard: FC<TodoCardProps> = ({ todo, deleteCallback, id }) => {
  return (
    <div className="todoCard">
      {todo.text}
      <div onClick={() => deleteCallback(id)} className="delete_todo">
        х
      </div>
    </div>
  );
};
