"use client";

import ToDoItems from "./todo/ToDoItems";
import ToDoProgress from "./todo/ToDoPrgress";
import { RootState } from "../../redux/reducers/index";
import { useSelector, useDispatch } from "react-redux";
import {
  checkTodo,
  updateTodo,
  deleteTodo,
} from "../../redux/actions/todoAction";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const ToDo = () => {
  // const todos = useSelector((state: RootState) => state.todos.todos);
  const { todos } = useSelector((state: RootState) => ({
    todos: state.todos.todos,
  }));

  const dispatch = useDispatch();

  const onCheck = (id: string) => {
    dispatch(checkTodo(id));
  };

  const onDelete = (id: string) => {
    // graphql로 지우는 쿼리 날리기
    dispatch(deleteTodo(id));
  };

  const onUpdate = (id: string, title: string) => {
    // graphql로 수정하는 쿼리 날리기
    dispatch(updateTodo(id, title));
  };

  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <>
      <ToDoItems
        todos={todos}
        onCheck={onCheck}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
      <ToDoProgress todos={todos.length} completedTodos={completedTodos} />
    </>
  );
};

export default ToDo;
