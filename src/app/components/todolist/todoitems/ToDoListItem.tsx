import React, { useState } from "react";
import Image from "next/image";
import { Todo } from "../../../redux/actions/todoAction";
import checked from "../../../../../public/checked.svg";
import unchecked from "../../../../../public/unchecked.svg";
import deleteButton from "../../../../../public/trash-2.svg";
import { useDispatch } from "react-redux";
import { toggleEditing, setNewTitle } from "../../../redux/actions/todoAction";

interface TodoListItemProps {
  todo: Todo;
  handler: {
    onCheck: (id: string) => void;
    onDelete: (id: string) => void;
    onUpdate: (id: string, title: string) => void;
  };
}

const TodoListItem = ({ todo, handler }: TodoListItemProps) => {
  const dispatch = useDispatch();

  // 수정 버튼 클릭
  const handleUpdateClick = () => {
    console.log(todo.isEditing);
    console.log(todo);

    todo.newTitle === ""
      ? dispatch(setNewTitle(todo.id, todo.title)) &&
        dispatch(toggleEditing(todo.id, todo.isEditing))
      : dispatch(toggleEditing(todo.id, todo.isEditing));

    todo.isEditing &&
      todo.title !== todo.newTitle &&
      handler.onUpdate(todo.id, todo.newTitle);
  };

  // input에서 title 수정
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setNewTitle(todo.id, e.target.value));
  };

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
      {/* todo label or todo update */}
      {todo.isEditing ? (
        <input
          type="text"
          onChange={handleInputChange}
          value={todo.newTitle}
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
      <button
        className="w-[24px] h-[24px]"
        onClick={() => {
          handler.onDelete(todo.id);
        }}
      >
        <Image src={deleteButton} alt="deleteButton" width={24} height={24} />
      </button>
    </li>
  );
};

export default TodoListItem;
