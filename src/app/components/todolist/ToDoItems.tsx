import React from "react";
import Outline from "./todoitems/Outline";
import TodoListItem from "./todoitems/ToDoListItem";
import { Todo } from "../../redux/actions/todoAction";

interface ToDoItemProps {
  todos: Todo[];
  onCheck: (id: string) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, title: string) => void;
}

const ToDoItems = ({ todos, onCheck, onDelete, onUpdate }: ToDoItemProps) => {
  return (
    <>
      <ul className="w-[327px] h-[408px] mx-[24px] mt-[32px]">
        {todos.map((todo, index) => (
          <React.Fragment key={todo.id}>
            <TodoListItem
              todo={todo}
              handler={{
                onCheck,
                onDelete,
                onUpdate,
              }}
            />
            <Outline index={index} todoLength={todos.length} />
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default ToDoItems;
