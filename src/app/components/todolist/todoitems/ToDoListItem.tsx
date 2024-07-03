import React from "react";
import Image from "next/image";
import { Todo } from "../ToDoItems";
import checked from "../../../../../public/checked.svg";
import unchecked from "../../../../../public/unchecked.svg";
import button from "../../../../../public/trash-2.svg";

interface TodoListItemProps {
  todo: Todo;
  handler: {
    onCheck: (id: string) => void;
    onDelete: (id: string) => void;
  };
}

const TodoListItem = ({ todo, handler }: TodoListItemProps) => {
  return (
    <li className="w-full h-[24px] flex items-center gap-[10px] my-[20px]">
      {/* todo check button */}
      <button
        onClick={() => {
          handler.onCheck(todo.id);
        }}
      >
        {todo.completed ? (
          <Image src={checked} alt={checked} width={24} height={24} />
        ) : (
          <Image src={unchecked} alt={unchecked} width={24} height={24} />
        )}
      </button>
      {/* todo label */}
      <label
        className={`w-full font-pretendard font-medium text-[16px] text-[#323233] leading-[24px] tracking-tight ${
          todo.completed ? "text-[#929294] line-through" : "none"
        }`}
      >
        {todo.title}
      </label>
      {/* todo delete */}
      <button
        className="w-[24px] h-[24px]"
        onClick={() => {
          handler.onDelete(todo.id);
        }}
      >
        <Image src={button} alt={button} width={24} height={24} />
      </button>
    </li>
  );
};

export default TodoListItem;
