export const TODO_LIST_REQUEST = "TODO_LIST_REQUEST";
export const TODO_LIST_SUCCESS = "TODO_LIST_SUCCESS";
export const TODO_LIST_FAILURE = "TODO_LIST_FAILURE";

export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST";
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE";
export const ADD_TODO_INPUT = "ADD_TODO_INPUT";

export const CHECK_TODO_REQUEST = "CHECK_TODO_REQUEST";
export const CHECK_TODO_SUCCESS = "CHECK_TODO_SUCCESS";
export const CHECK_TODO_FAILURE = "CHECK_TODO_FAILURE";

export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TODO_SETTING = "UPDATE_TODO_SETTING";
export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST";
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS";
export const UPDATE_TODO_FAILURE = "UPDATE_TODO_FAILURE";
export const UPDATE_TODO_INPUT = "UPDATE_TODO_INPUT";

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoInput {
  id: string;
  title: string;
  completed: boolean;
  isEditing: boolean;
  newTitle: string;
}

// Todo List
export const todoListRequest = () => ({
  type: TODO_LIST_REQUEST,
});

export const todoListSuccess = (todos: Todo[]) => ({
  type: TODO_LIST_SUCCESS,
  todos,
});

export const todoListFailure = (message: string) => ({
  type: TODO_LIST_FAILURE,
  message,
});

// Add Todo
export const addTodoRequest = (title: string) => ({
  type: ADD_TODO_REQUEST,
  title,
});

export const addTodoSuccess = (addTodo: Todo) => ({
  type: ADD_TODO_SUCCESS,
  addTodo,
});

export const addTodoFailure = (message: string) => ({
  type: ADD_TODO_FAILURE,
  message,
});

export const addTodoInput = (title: string) => ({
  type: ADD_TODO_INPUT,
  title,
});

// Check Todo
export const checkTodoRequest = (id: string, completed: boolean) => ({
  type: CHECK_TODO_REQUEST,
  id,
  completed,
});

export const checkTodoSuccess = (updateTodo: Todo) => ({
  type: CHECK_TODO_SUCCESS,
  updateTodo,
});

export const checkTodoFailure = (message: string) => ({
  type: CHECK_TODO_FAILURE,
  message,
});

// Update Todo
export const toggleEditing = (id: string, isEditing: boolean) => ({
  type: TOGGLE_EDITING,
  id,
  isEditing,
});

export const updateTodoSetting = (updateTodo: Todo) => ({
  type: UPDATE_TODO_SETTING,
  updateTodo,
});

export const updateTodoRequest = (id: string, title: string) => ({
  type: UPDATE_TODO_REQUEST,
  id,
  title,
});

export const updateTodoSuccess = (updateTodo: Todo) => ({
  type: UPDATE_TODO_SUCCESS,
  updateTodo,
});

export const updateTodoFailure = (message: string) => ({
  type: UPDATE_TODO_FAILURE,
  message,
});

export const updateTodoInput = (id: string, title: string) => ({
  type: UPDATE_TODO_INPUT,
  id,
  title,
});

// Delete Todo
export const deleteTodoRequest = (id: string) => ({
  type: DELETE_TODO_REQUEST,
  id,
});

export const deleteTodoSuccess = (id: string) => ({
  type: DELETE_TODO_SUCCESS,
  id,
});

export const deleteTodoFailure = (message: string) => ({
  type: DELETE_TODO_FAILURE,
  message,
});
