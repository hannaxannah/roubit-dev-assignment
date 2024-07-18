"use client";
import { useState } from "react";
import ToDoTitle from "../components/todolist/ToDoTitle";
import ToDoAdd from "../components/todolist/ToDoAdd";
import ToDo from "../components/todolist/ToDo";

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
