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
    mutationFn: fetchCreateTodo,
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
    mutationFn: fetchCheckTodo,
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
    mutationFn: fetchUpdateTodo,
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
    mutationFn: fetchDeleteTodo,
    onSuccess: (data: string) => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
    onError: (error: Error) => {
      console.error("deleteTodo failed:", error.message);
    },
  });
  return { mutateAsync, isSuccess, isError };
};
