"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import ToDoTitle from "../components/todolist/ToDoTitle";
import ToDoAdd from "../components/todolist/ToDoAdd";
import ToDoItems from "../components/todolist/ToDoItems";
import ToDoProgress from "../components/todolist/ToDoPrgress";
import {
  fetchGetTodos,
  fetchCreateTodo,
  fetchDeleteTodo,
  fetchCheckTodo,
  fetchUpdateTodo,
} from "../APIs/todoAPI";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const ToDoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const fetchedTodos = await fetchGetTodos();
        if (fetchedTodos) {
          setTodos(fetchedTodos);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getTodos();
  }, []);

  const onAdd = async (todo: string) => {
    const newTodo = await fetchCreateTodo(todo);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const onCheck = async (id: string, completed: boolean) => {
    const checkedTodo = await fetchCheckTodo(id, completed);
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === checkedTodo.id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const onDelete = async (id: string) => {
    const deleteTodo = await fetchDeleteTodo(id);
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== deleteTodo.id)
    );
  };

  const onUpdate = async (id: string, title: string) => {
    const updateTodo = await fetchUpdateTodo(id, title);
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === updateTodo.id ? { ...todo, title: updateTodo.title } : todo
      )
    );
  };

  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <>
      <ToDoTitle />
      <ToDoAdd onAdd={onAdd} />
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

export default ToDoList;
