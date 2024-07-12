"use client";
import { useState } from "react";
import ToDoTitle from "../components/todolist/ToDoTitle";
import ToDoAdd from "../components/todolist/ToDoAdd";
import ToDo from "../components/todolist/ToDo";
import { RootState } from "../redux/reducers/index";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  checkTodo,
  updateTodo,
  deleteTodo,
} from "../redux/actions/todoAction";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const ToDoList = () => {
  return (
    <>
      <ToDoTitle />
      <ToDoAdd />
      <ToDo />
    </>
  );
};

export default ToDoList;
