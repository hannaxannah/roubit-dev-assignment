import Image from "next/image";
import button from "../../../../public/Frame 6110.svg";
import useTodoStore from "@/app/todolist/zustand/todoStore";
import { useShallow } from "zustand/react/shallow";
import { useAddTodoMutation } from "@/app/todolist/tanstack-query/todoMutation";
import { Todo } from "@/app/todolist/page";

const ToDoAdd = () => {
  const { title } = useTodoStore(
    useShallow((state) => ({ title: state.titleInput }))
  );
  const { addTodoInput } = useTodoStore(
    useShallow((state) => ({ addTodoInput: state.addTodoInput }))
  );
  const { addTodo } = useTodoStore(
    useShallow((state) => ({ addTodo: state.addTodo }))
  );
  const addTodoMutation = useAddTodoMutation();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    addTodoInput(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (title && title.trim()) {
      try {
        const newTodo: Todo = await addTodoMutation.mutateAsync(title);
        addTodo(newTodo);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {/* To-Do Add */}
      <form
        className="mx-[24px] mt-[18px] flex items-center"
        onSubmit={handleSubmit}
      >
        <input
          className="w-[273px] h-[48px] px-[16px] py[10px] ring-[#B6B6B8] ring-[1px] rounded-[12px] placeholder:font-pretendard font-medium text-[14px] text-[#B6B6B8] focus:ring-[#26BD81] focus:outline-none focus:text-[#161617]"
          type="text"
          placeholder="Add your task"
          value={title}
          onChange={handleChange}
        />
        <div className="w-[42px] h-[42px] ml-[12px] pb-[3px] rounded-[777.7px] bg-[#209C6A]">
          <button type="submit">
            <Image src={button} alt={button} width={42} height={39} />
          </button>
        </div>
      </form>
    </>
  );
};

export default ToDoAdd;
