"use client";

import { useMutation } from "@tanstack/react-query";
import {
  fetchCreateTodo,
  fetchCheckTodo,
  fetchUpdateTodo,
  fetchDeleteTodo,
} from "@/app/APIs/todoAPI";
import { Todo, queryClient } from "../page";

export const useAddTodoMutation = () => {
  const { mutateAsync, isSuccess, isError } = useMutation({
    mutationFn: (title: string) => fetchCreateTodo(title),
    onSuccess: (newTodo: Todo) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error: Error) => {
      console.error("addTodo failed:", error.message);
    },
  });
  return { mutateAsync, isSuccess, isError };
};

export const useCheckTodoMutation = () => {
  const { mutateAsync, isSuccess, isError } = useMutation({
    mutationFn: ({ id, completed }: { id: string; completed: boolean }) =>
      fetchCheckTodo(id, completed),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error: Error) => {
      console.error("checkTodo failed:", error.message);
    },
  });
  return { mutateAsync, isSuccess, isError };
};

export const useUpdateTodoMutation = () => {
  const { mutateAsync, isSuccess, isError, isPending } = useMutation({
    mutationFn: ({ id, title }: { id: string; title: string }) =>
      fetchUpdateTodo(id, title),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error: Error) => {
      console.error("updateTodo failed:", error.message);
    },
  });
  return { mutateAsync, isSuccess, isError, isPending };
};

export const useDeleteTodoMutation = () => {
  const { mutateAsync, isSuccess, isError } = useMutation({
    mutationFn: (id: string) => fetchDeleteTodo(id),
    onSuccess: (data: string) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error: Error) => {
      console.error("deleteTodo failed:", error.message);
    },
  });
  return { mutateAsync, isSuccess, isError };
};
