"use client";

import ToDoTitle from "../components/todolist/ToDoTitle";
import ToDoAdd from "../components/todolist/ToDoAdd";
import ToDo from "../components/todolist/ToDo";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const ToDoList = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToDoTitle />
        <ToDoAdd />
        <ToDo />
      </QueryClientProvider>
    </>
  );
};

export default ToDoList;
