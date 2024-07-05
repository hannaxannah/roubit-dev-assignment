import { Todo } from "@/app/todolist/page";

export const ADD_TODO = "ADD_TODO";
export const CHECK_TODO = "CHECK_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  todo,
});

export const checkTodo = (id: string) => ({
  type: CHECK_TODO,
  id,
});

export const updateTodo = (id: string, title: string) => ({
  type: UPDATE_TODO,
  id,
  title,
});

export const deleteTodo = (id: string) => ({
  type: DELETE_TODO,
  id,
});
