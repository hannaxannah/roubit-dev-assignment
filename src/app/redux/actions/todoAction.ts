export const ADD_TODO = "ADD_TODO";
export const ADD_TODO_INPUT = "ADD_TODO_INPUT";
export const CHECK_TODO = "CHECK_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const SET_NEW_TITLE = "SET_NEW_TITLE";
export const DELETE_TODO = "DELETE_TODO";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  isEditing: boolean;
  newTitle: string;
}

export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  todo,
});

export const addTodoInput = (addInputValue: string) => ({
  type: ADD_TODO_INPUT,
  addInputValue,
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

export const toggleEditing = (id: string, isEditing: boolean) => ({
  type: TOGGLE_EDITING,
  id,
  isEditing,
});

export const setNewTitle = (id: string, newTitle: string) => ({
  type: SET_NEW_TITLE,
  id,
  newTitle,
});

export const deleteTodo = (id: string) => ({
  type: DELETE_TODO,
  id,
});
