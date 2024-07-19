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

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem = ({ todo }: TodoListItemProps) => {
  const todoInput = useTodoStore((state) => state.todo);
  const toggle = useTodoStore((state) => state.toggle);
  const updateTodoInput = useTodoStore((state) => state.updateTodoInput);

  const checkMutation = useCheckTodoMutation();
  const updateMutation = useUpdateTodoMutation();
  const deleteMutation = useDeleteTodoMutation();

  // todo check 클릭
  const handleCheckClick = () => {
    checkMutation.mutate({ id: todo.id, completed: !todo.completed });
  };

  // 수정 버튼 클릭
  const handleUpdateClick = () => {
    if (!todoInput.isEditing) {
      console.log("toggle2", todoInput);
      updateTodoInput(todo.id, todo.title);
      console.log("updateTodoInput", todoInput);
      toggle(todo.id, true);
    } else {
      updateMutation.mutate({ id: todo.id, title: todoInput.title });
    }
  };

  // title 수정
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateTodoInput(todo.id, e.target.value);
  };

  // 삭제 버튼 클릭
  const handleDeleteClick = () => {
    deleteMutation.mutate(todo.id);
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
