import {
  ADD_TODO,
  ADD_TODO_INPUT,
  CHECK_TODO,
  UPDATE_TODO,
  TOGGLE_EDITING,
  SET_NEW_TITLE,
  DELETE_TODO,
  Todo,
} from "../actions/todoAction";

interface TodoState {
  todos: Todo[];
  addInputValue: string;
}

const initialState: TodoState = {
  todos: [
    {
      id: "1",
      title: "Learn JavaScript project",
      completed: false,
      isEditing: false,
      newTitle: "",
    },
    {
      id: "2",
      title: "Make a to do list app",
      completed: true,
      isEditing: false,
      newTitle: "",
    },
  ],
  addInputValue: "",
};

type Action =
  | { type: typeof ADD_TODO; todo: Todo }
  | { type: typeof ADD_TODO_INPUT; addInputValue: string }
  | { type: typeof CHECK_TODO; id: string }
  | { type: typeof UPDATE_TODO; id: string; title: string }
  | { type: typeof TOGGLE_EDITING; id: string; isEditing: boolean }
  | { type: typeof SET_NEW_TITLE; id: string; newTitle: string }
  | { type: typeof DELETE_TODO; id: string };

const todoReducer = (state = initialState, action: Action): TodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo],
      };
    case ADD_TODO_INPUT:
      return {
        ...state,
        addInputValue: action.addInputValue,
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
          todo.id === action.id
            ? { ...todo, title: action.title, isEditing: false }
            : todo
        ),
      };
    case TOGGLE_EDITING:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id
            ? {
                ...todo,
                isEditing: !action.isEditing,
              }
            : todo
        ),
      };
    case SET_NEW_TITLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, newTitle: action.newTitle } : todo
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
