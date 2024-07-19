"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchGetTodos } from "@/app/APIs/todoAPI";
import { Todo } from "../page";

const useTodoListQuery = () => {
  const {
    data: todos,
    error,
    isLoading,
  } = useQuery<Todo[]>({
    queryKey: ["todos"],
    queryFn: fetchGetTodos,
  });
  return { data: todos, error, isLoading };
};

export default useTodoListQuery;
