import ToDoDelete from "./ToDoDelete";
import ToDoCheck from "./ToDoCheck";
import Image from "next/image";
import line from "../../../../public/Vector 815.svg";

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
          <Image src={line} alt={line} width={327} height={2} />
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
