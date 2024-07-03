import React from "react";
import Image from "next/image";
import line from "../../../../public/Vector 815.svg";
import checked from "../../../../public/checked.svg";
import unchecked from "../../../../public/unchecked.svg";
import button from "../../../../public/trash-2.svg";

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

interface ToDoItemProps {
  todos: Todo[];
  onCheck: (id: string) => void;
  onDelete: (id: string) => void;
}

const ToDoItem = ({ todos, onCheck, onDelete }: ToDoItemProps) => {
  return (
    <>
      <ul className="w-[327px] h-[408px] mx-[24px] mt-[32px]">
        {todos.map((todo, index) => (
          <React.Fragment key={todo.id}>
            <li className="w-full h-[24px] flex items-center gap-[10px] my-[20px]">
              {/* todo check button */}
              <button
                onClick={() => {
                  onCheck(todo.id);
                }}
              >
                {todo.completed ? (
                  <Image src={checked} alt={checked} width={24} height={24} />
                ) : (
                  <Image
                    src={unchecked}
                    alt={unchecked}
                    width={24}
                    height={24}
                  />
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
                  onDelete(todo.id);
                }}
              >
                <Image src={button} alt={button} width={24} height={24} />
              </button>
            </li>
            {/* dividing line */}
            {index < todos.length - 1 && (
              <Image
                src={line}
                alt={line}
                width={327}
                height={2}
                className="my-[20px]"
              />
            )}
          </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default ToDoItem;
