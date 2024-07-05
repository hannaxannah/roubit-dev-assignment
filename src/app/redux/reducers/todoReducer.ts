import {
  ADD_TODO,
  CHECK_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from "../actions/todoAction";
import { Todo } from "@/app/todolist/page";

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [
    { id: "1", title: "Learn JavaScript project", completed: false },
    { id: "2", title: "Make a to do list app", completed: true },
  ],
};

type Action =
  | { type: typeof ADD_TODO; todo: Todo }
  | { type: typeof CHECK_TODO; id: string }
  | { type: typeof UPDATE_TODO; id: string; title: string }
  | { type: typeof DELETE_TODO; id: string };

const todoReducer = (state = initialState, action: Action): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, title: action.title } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
};

export default todoReducer;
