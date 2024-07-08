import Image from "next/image";
import button from "../../../../public/Frame 6110.svg";
import { RootState } from "../../redux/reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { addTodoInput } from "@/app/redux/actions/todoAction";

interface AddTodoFormProps {
  onAdd: (todo: string) => void;
}

const ToDoAdd = ({ onAdd }: AddTodoFormProps) => {
  const inputValue = useSelector(
    (state: RootState) => state.todos.addInputValue
  );
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addTodoInput(event.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue && inputValue.trim()) {
      onAdd(inputValue);
      dispatch(addTodoInput(""));
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
          value={inputValue}
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
