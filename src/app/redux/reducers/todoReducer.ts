import { Reducer } from "redux";

import {
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
  TODO_LIST_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_INPUT,
  CHECK_TODO_REQUEST,
  CHECK_TODO_SUCCESS,
  CHECK_TODO_FAILURE,
  TOGGLE_EDITING,
  UPDATE_TODO_SETTING,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_INPUT,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  Todo,
  TodoInput,
} from "../actions/todoAction";

interface TodoState {
  todos: Todo[];
  todo: TodoInput;
  message: string;
  loading: boolean;
}

const initialState: TodoState = {
  todos: [],
  todo: {
    id: "",
    title: "",
    completed: false,
    isEditing: false,
    newTitle: "",
  },
  message: "",
  loading: false,
};

export type Action =
  | { type: typeof TODO_LIST_REQUEST }
  | { type: typeof TODO_LIST_SUCCESS; todos: Todo[] }
  | { type: typeof TODO_LIST_FAILURE; message: string }
  | { type: typeof ADD_TODO_REQUEST; title: string }
  | { type: typeof ADD_TODO_SUCCESS; addTodo: Todo }
  | { type: typeof ADD_TODO_FAILURE; message: string }
  | { type: typeof ADD_TODO_INPUT; title: string }
  | { type: typeof CHECK_TODO_REQUEST; id: string; completed: boolean }
  | { type: typeof CHECK_TODO_SUCCESS; updateTodo: Todo }
  | { type: typeof CHECK_TODO_FAILURE; message: string }
  | { type: typeof TOGGLE_EDITING; id: string; isEditing: boolean }
  | { type: typeof UPDATE_TODO_SETTING; updateTodo: Todo }
  | { type: typeof UPDATE_TODO_REQUEST; id: string; title: string }
  | { type: typeof UPDATE_TODO_SUCCESS; updateTodo: Todo }
  | { type: typeof UPDATE_TODO_FAILURE; message: string }
  | {
      type: typeof UPDATE_TODO_INPUT;
      id: string;
      title: string;
    }
  | { type: typeof DELETE_TODO_REQUEST; id: string }
  | { type: typeof DELETE_TODO_SUCCESS; id: string }
  | { type: typeof DELETE_TODO_FAILURE; message: string };

const todoReducer: Reducer<TodoState, Action> = (
  state = initialState,
  action: Action
): TodoState => {
  switch (action.type) {
    case TODO_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        message: "todo list requested",
      };
    case TODO_LIST_SUCCESS:
      return {
        ...state,
        todos: action.todos,
        loading: false,
        message: "todo list success",
      };
    case TODO_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.message,
      };
    case ADD_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        message: "add todo requested",
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "add todo success",
        todo: {
          id: "",
          title: "",
          completed: false,
          isEditing: false,
          newTitle: "",
        },
        todos: [...state.todos, action.addTodo],
      };
    case ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.message,
        todo: {
          id: "",
          title: "",
          completed: false,
          isEditing: false,
          newTitle: "",
        },
      };
    case ADD_TODO_INPUT:
      return {
        ...state,
        todo: {
          ...state.todo,
          title: action.title,
        },
      };
    case CHECK_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        message: "check todo requested",
      };
    case CHECK_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "check todo success",
        todos: state.todos.map((todo) =>
          todo.id === action.updateTodo.id
            ? { ...todo, ...action.updateTodo }
            : todo
        ),
      };
    case CHECK_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.message,
      };
    case TOGGLE_EDITING:
      return {
        ...state,
        todo: {
          ...state.todo,
          id: action.id,
          isEditing: action.isEditing,
        },
      };
    case UPDATE_TODO_SETTING:
      return {
        ...state,
        todo: {
          ...state.todo,
          id: action.updateTodo.id,
          title: action.updateTodo.title,
          completed: action.updateTodo.completed,
          isEditing: false,
        },
      };
    case UPDATE_TODO_REQUEST:
      return {
        ...state,
        loading: true,
        message: "update todo requested",
      };
    case UPDATE_TODO_SUCCESS:
      return {
        ...state,
        loading: false,
        message: "update todo success",
        todo: {
          id: "",
          title: "",
          completed: false,
          isEditing: false,
          newTitle: "",
        },
        todos: state.todos.map((todo) =>
          todo.id === action.updateTodo.id
            ? { ...todo, ...action.updateTodo }
            : todo
        ),
      };
    case UPDATE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        message: action.message,
        todo: {
          id: "",
          title: "",
          completed: false,
          isEditing: false,
          newTitle: "",
        },
      };
    case UPDATE_TODO_INPUT:
      return {
        ...state,
        todo: {
          ...state.todo,
          id: action.id,
          newTitle: action.title,
        },
      };
    case DELETE_TODO_REQUEST:
      return {
        ...state,
        todo: {
          ...state.todo,
          id: action.id,
        },
        loading: true,
        message: "delete todo requested",
      };
    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todo: {
          ...state.todo,
          id: "",
        },
        todos: state.todos.filter((todo) => todo.id !== action.id),
        loading: false,
        message: "delete todo success",
      };
    case DELETE_TODO_FAILURE:
      return {
        ...state,
        loading: false,
        message: "delete todo failure",
      };
    default:
      return state;
  }
};

export default todoReducer;
export type ToDoState = ReturnType<typeof todoReducer>;
