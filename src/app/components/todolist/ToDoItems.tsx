import ToDoDelete from "./ToDoDelete";
import ToDoCheck from "./ToDoCheck";

export default function ToDoItems() {
  return (
    <>
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
    </>
  );
}
