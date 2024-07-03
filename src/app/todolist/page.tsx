"use client";
import { useState } from "react";
import ToDoTitle from "../components/todolist/ToDoTitle";
import ToDoAdd from "../components/todolist/ToDoAdd";
import ToDoItem from "../components/todolist/ToDoItem";
import ToDoProgress from "../components/todolist/ToDoPrgress";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

export default function ToDoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn JavaScript project", completed: false },
    { id: "2", title: "Make a to do list app", completed: true },
  ]); // graphql로 가져오기

  const onAdd = (todo: string) => {
    // 임시, graphql로 input하고 반환된 결과값에서 id,title, completed 뽑아서 저장
    const newTodo = {
      id: "123",
      title: todo,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const onCheck = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const onDelete = (id: string) => {
    // graphql로 지우는 쿼리 날리기
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const completedTodos = todos.filter((todo) => todo.completed).length;

  return (
    <>
      <ToDoTitle /> {/*{ 타이틀 컴포넌트 */}
      <ToDoAdd onAdd={onAdd} /> {/* ToDo 추가 컴포넌트 */}
      <ToDoItem todos={todos} onCheck={onCheck} onDelete={onDelete} />
      {/* ToDo 목록 컴포넌트 */}
      <ToDoProgress todos={todos.length} completedTodos={completedTodos} />
      {/* ToDo 진행률 컴포넌트 */}
    </>
  );
}
