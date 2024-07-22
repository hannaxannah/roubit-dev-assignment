import React from "react";
import Outline from "../todoitems/Outline";
import TodoListItem from "../todoitems/ToDoListItem";
import useTodoListQuery from "@/app/todolist/tanstack-query/todoQuery";

const ToDoItems = () => {
  const { todos } = useTodoListQuery();

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
