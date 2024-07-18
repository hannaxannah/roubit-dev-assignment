import React from "react";
import Outline from "../todoitems/Outline";
import TodoListItem from "../todoitems/ToDoListItem";
import { RootState } from "../../../redux/reducers/index";
import { useSelector } from "react-redux";
const ToDoItems = () => {
  const { todos } = useSelector((state: RootState) => ({
    todos: state.todos.todos,
  }));
  // console.log("todos", todos);

  return (
    <>
      <ul className="w-[327px] h-[408px] mx-[24px] mt-[32px]">
        {todos != null &&
          todos.map((todo, index) => (
            <React.Fragment key={todo.id}>
              <TodoListItem todo={todo} />
              <Outline index={index} todoLength={todos.length} />
            </React.Fragment>
          ))}
      </ul>
    </>
  );
};

export default ToDoItems;
