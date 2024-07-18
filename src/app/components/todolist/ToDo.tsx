"use client";

import ToDoItems from "./todo/ToDoItems";
import ToDoProgress from "./todo/ToDoPrgress";
import { useDispatch } from "react-redux";
import { todoListRequest } from "../../redux/actions/todoAction";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const ToDo = () => {
  const dispatch = useDispatch();

  dispatch(todoListRequest());

  return (
    <>
      <ToDoItems />
      <ToDoProgress />
    </>
  );
};

export default ToDo;
