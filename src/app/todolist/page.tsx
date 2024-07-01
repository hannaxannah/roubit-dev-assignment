import ToDoAdd from "../components/ToDoAdd";
import ToDoProgress from "../components/ToDoPrgress";
import ToDoDelete from "../components/ToDoDelete";
import ToDoCheck from "../components/ToDoCheck";

export default function ToDoList() {
  return (
    <>
      {/* To-Do List Title */}
      <div className="ml-[24px] mt-[32px] font-pretendard font-semibold text-[24px] text-[#323233]">
        To-Do List
      </div>
      {/* To-Do Add */}
      <ToDoAdd />
      {/* To-Do List, Check, Delete */}
      <div className="h-[408px] mx-[24px] mt-[32px]">
        {/* To-Do Item :unchecked */}
        <div className="w-full h-[24px] flex items-center gap-[10px]">
          {/* checkbox */}
          <ToDoCheck checked={false} />
          {/* delete */}
          <ToDoDelete />
        </div>
        {/* line after added */}
        <div className="my-[20px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="327"
            height="2"
            viewBox="0 0 327 2"
            fill="none"
          >
            <path d="M0 1H327" stroke="#F3F3F5" />
          </svg>
        </div>
        {/* To-Do Item :checked, added */}
        <div className="w-full h-[24px] flex items-center gap-[10px]">
          {/* checkbox */}
          <ToDoCheck checked={true} />
          {/* delete */}
          <ToDoDelete />
        </div>
      </div>
      {/* Tasks Done */}
      <ToDoProgress />
    </>
  );
}
