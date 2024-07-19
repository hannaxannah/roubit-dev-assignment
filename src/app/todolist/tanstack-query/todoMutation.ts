"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  fetchCreateTodo,
  fetchCheckTodo,
  fetchUpdateTodo,
  fetchDeleteTodo,
} from "@/app/APIs/todoAPI";
import { Todo, queryClient } from "../page";
import useTodoStore from "@/app/todolist/zustand/todoStore";

export const useAddTodoMutation = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  return useMutation({
    mutationFn: (title: string) => fetchCreateTodo(title),
    onSuccess: (newTodo: Todo) => {
      addTodo(newTodo);
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error: Error) => {
      console.error("addTodo failed:", error.message);
    },
  });
};

export const useCheckTodoMutation = () => {
  const checkTodo = useTodoStore((state) => state.checkTodo);
  return useMutation({
    mutationFn: ({ id, completed }: { id: string; completed: boolean }) =>
      fetchCheckTodo(id, completed),
    onSuccess: (data) => {
      checkTodo(data);
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error: Error) => {
      console.error("checkTodo failed:", error.message);
    },
  });
};

export const useUpdateTodoMutation = () => {
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const clearTodoInput = useTodoStore((state) => state.clearTodoInput);
  return useMutation({
    mutationFn: ({ id, title }: { id: string; title: string }) =>
      fetchUpdateTodo(id, title),
    onSuccess: (data) => {
      console.log("tanstack updateTodo", data);
      updateTodo(data);
      clearTodoInput();
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error: Error) => {
      console.error("updateTodo failed:", error.message);
    },
  });
};

export const useDeleteTodoMutation = () => {
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  return useMutation({
    mutationFn: (id: string) => fetchDeleteTodo(id),
    onSuccess: (data: string) => {
      console.log("tanstack deleteTodo", data);
      deleteTodo(data);
      queryClient.invalidateQueries(["todos"]);
    },
    onError: (error: Error) => {
      console.error("deleteTodo failed:", error.message);
    },
  });
};
