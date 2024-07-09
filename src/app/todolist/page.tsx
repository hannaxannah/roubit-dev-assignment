"use client";
import { useState } from "react";
import ToDoTitle from "../components/todolist/ToDoTitle";
import ToDoAdd from "../components/todolist/ToDoAdd";
import ToDoItems from "../components/todolist/ToDoItems";
import ToDoProgress from "../components/todolist/ToDoPrgress";
import { RootState } from "../redux/reducers/index";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  checkTodo,
  updateTodo,
  deleteTodo,
} from "../redux/actions/todoAction";

const ToDoList = () => {
  // const todos = useSelector((state: RootState) => state.todos.todos);
  const { todos } = useSelector((state: RootState) => ({
    todos: state.todos.todos,
  }));

  const dispatch = useDispatch();

  const onAdd = (todo: string) => {
    // 임시, graphql로 input하고 반환된 결과값에서 id,title, completed 뽑아서 저장
    const newTodo = {
      id: "123",
      title: todo,
      completed: false,
      isEditing: false,
      newTitle: "",
    };
    dispatch(addTodo(newTodo));
  };

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
      <ToDoTitle /> {/*{ 타이틀 컴포넌트 */}
      <ToDoAdd onAdd={onAdd} /> {/* ToDo 추가 컴포넌트 */}
      <ToDoItems
        todos={todos}
        onCheck={onCheck}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
      {/* ToDo 목록 컴포넌트 */}
      <ToDoProgress todos={todos.length} completedTodos={completedTodos} />
      {/* ToDo 진행률 컴포넌트 */}
    </>
  );
};

export default ToDoList;
