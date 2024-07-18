import React, { useState } from "react";
import Image from "next/image";
import checked from "../../../../../public/checked.svg";
import unchecked from "../../../../../public/unchecked.svg";
import deleteButton from "../../../../../public/trash-2.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  Todo,
  checkTodoRequest,
  toggleEditing,
  updateTodoSetting,
  updateTodoRequest,
  updateTodoInput,
  deleteTodoRequest,
} from "../../../redux/actions/todoAction";
import { RootState } from "@/app/redux/reducers";

interface TodoListItemProps {
  todo: Todo;
}

const TodoListItem = ({ todo }: TodoListItemProps) => {
  const dispatch = useDispatch();

  const { updateTodo } = useSelector((state: RootState) => ({
    updateTodo: state.todos.todo,
  }));
  // console.log(updateTodo);

  // todo check 클릭
  const handleCheckClick = () => {
    // console.log("check click,", todo.id, todo.completed);
    dispatch(checkTodoRequest(todo.id, !todo.completed));
  };

  // 수정 버튼 클릭
  const handleUpdateClick = () => {
    // console.log("update click,", todo.id, todo.title);

    if (!updateTodo.isEditing) {
      dispatch(updateTodoInput(todo.id, todo.title));
      dispatch(toggleEditing(todo.id, true));
    } else {
      dispatch(updateTodoRequest(todo.id, updateTodo.newTitle));
    }
  };

  // title 수정
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateTodoInput(todo.id, e.target.value));
  };

  const handleDeleteClick = () => {
    dispatch(deleteTodoRequest(todo.id));
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
      {todo.id == updateTodo.id && updateTodo.isEditing ? (
        <input
          type="text"
          onChange={handleInputChange}
          value={updateTodo.newTitle}
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
