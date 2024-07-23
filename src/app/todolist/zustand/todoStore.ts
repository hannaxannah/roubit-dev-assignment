import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Todo } from "../page";

interface TodoInput {
  id: string;
  title: string;
  completed: boolean;
  isEditing: boolean;
}

type State = {
  todos: Todo[];
  todo: TodoInput;
  titleInput: string;
};

type Actions = {
  addTodo: (newTodo: Todo) => void;
  addTodoInput: (title: string) => void;
  toggle: (id: string, isEditing: boolean) => void;
  checkTodo: (checkedTodo: Todo) => void;
  updateTodo: (updatedTodo: Todo) => void;
  updateTodoInput: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
  clearTodoInput: () => void;
};

const useTodoStore = create<State & Actions>()(
  immer((set) => ({
    todos: [],
    todo: {
      id: "",
      title: "",
      completed: false,
      isEditing: false,
    },
    titleInput: "",
    addTodo: (newTodo: Todo) =>
      set((state) => {
        state.todos.push(newTodo);
        state.titleInput = "";
      }),
    addTodoInput: (title: string) =>
      set((state) => {
        state.titleInput = title;
      }),
    toggle: (id: string, isEditing: boolean) =>
      set((state) => {
        state.todo.id = id;
        state.todo.isEditing = isEditing;
      }),
    checkTodo: (checkedTodo: Todo) =>
      set((state) => {
        const todo = state.todos.find((t) => t.id === checkedTodo.id);
        if (todo) {
          todo.completed = checkedTodo.completed;
        }
      }),
    updateTodo: (updatedTodo: Todo) =>
      set((state) => {
        const todo = state.todos.find((t) => t.id === updatedTodo.id);
        if (todo) {
          todo.title = updatedTodo.title;
        }
      }),
    updateTodoInput: (id: string, title: string) =>
      set((state) => {
        state.todo.id = id;
        state.todo.title = title;
      }),
    deleteTodo: (id: string) =>
      set((state) => {
        state.todos = state.todos.filter((todo) => todo.id !== id);
      }),
    clearTodoInput: () =>
      set((state) => {
        state.todo = {
          id: "",
          title: "",
          completed: false,
          isEditing: false,
        };
      }),
  }))
);

export default useTodoStore;
