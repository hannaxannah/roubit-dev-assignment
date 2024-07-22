import React from "react";
import Image from "next/image";
import checked from "../../../../../public/checked.svg";
import unchecked from "../../../../../public/unchecked.svg";
import deleteButton from "../../../../../public/trash-2.svg";
import { Todo } from "@/app/todolist/page";
import useTodoStore from "@/app/todolist/zustand/todoStore";
import {
  useCheckTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "@/app/todolist/tanstack-query/todoMutation";
import { useQueryClient } from "@tanstack/react-query";
interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem = ({ todo }: TodoListItemProps) => {
  const todoInput = useTodoStore((state) => state.todo);
  const toggle = useTodoStore((state) => state.toggle);
  const updateTodoInput = useTodoStore((state) => state.updateTodoInput);
  const updateTodo = useTodoStore((state) => state.updateTodo);
  const clearTodoInput = useTodoStore((state) => state.clearTodoInput);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  const checkMutation = useCheckTodoMutation();
  const updateMutation = useUpdateTodoMutation();
  const deleteMutation = useDeleteTodoMutation();

  const queryClient = useQueryClient();

  // todo check 클릭
  const handleCheckClick = async () => {
    await checkMutation.mutateAsync({
      id: todo.id,
      completed: !todo.completed,
    });
  };

  // 수정 버튼 클릭
  const handleUpdateClick = async () => {
    if (!todoInput.isEditing) {
      updateTodoInput(todo.id, todo.title);
      toggle(todo.id, true);
    } else {
      if (todo.title === todoInput.title) {
        toggle(todo.id, false);
      } else {
        const previousTodos = queryClient.getQueryData(["todos"]);

        queryClient.setQueryData(["todos"], (oldTodos: Todo[]) =>
          oldTodos.map((t) =>
            t.id === todo.id ? { ...t, title: todoInput.title } : t
          )
        );
        try {
          const updatedTodo = await updateMutation.mutateAsync({
            id: todo.id,
            title: todoInput.title,
          });
          updateTodo(updatedTodo);
        } catch (error) {
          queryClient.setQueryData(["todos"], previousTodos);
          console.error("updateTodo failed:", error);
        } finally {
          clearTodoInput();
        }
      }
    }
  };

  // title 수정
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTodoInput(todo.id, e.target.value);
  };

  // 삭제 버튼 클릭
  const handleDeleteClick = async () => {
    const deletedTodo = await deleteMutation.mutateAsync(todo.id);
    deleteTodo(deletedTodo);
  };

  return (
    <li className="w-full h-[24px] flex items-center gap-[10px] my-[20px]">
      {/* todo check button */}
      <button onClick={handleCheckClick}>
        {todo.completed ? (
          <Image src={checked} alt={checked} width={24} height={24} />
        ) : (
          <Image src={unchecked} alt={unchecked} width={24} height={24} />
        )}
      </button>
      {/* todo label or todo update */}
      {todo.id == todoInput.id && todoInput.isEditing ? (
        <input
          type="text"
          onChange={handleInputChange}
          value={todoInput.title}
          className="w-full font-pretendard font-medium text-[16px] text-[#323233] leading-[24px] tracking-tight"
        />
      ) : (
        <label
          className={`w-full font-pretendard font-medium text-[16px] text-[#323233] leading-[24px] tracking-tight ${
            todo.completed ? "text-[#929294] line-through" : "none"
          }`}
        >
          {todo.title}
        </label>
      )}
      {/* todo update button */}
      <button className="w-[24px] h-[24px]" onClick={handleUpdateClick}>
        <Image src={deleteButton} alt="deleteButton" width={24} height={24} />
      </button>
      {/* todo delete button */}
      <button className="w-[24px] h-[24px]" onClick={handleDeleteClick}>
        <Image src={deleteButton} alt="deleteButton" width={24} height={24} />
      </button>
    </li>
  );
};

export default TodoListItem;
