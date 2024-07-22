"use client";

import useTodoListQuery from "@/app/todolist/tanstack-query/todoQuery";
import ToDoItems from "./todo/ToDoItems";
import ToDoProgress from "./todo/ToDoPrgress";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const ToDo = () => {
  const { isTodoListLoading } = useTodoListQuery();
  if (isTodoListLoading) {
    return <></>;
  }
  return (
    <>
      <ToDoItems />
      <ToDoProgress />
    </>
  );
};

export default ToDo;
