import useTodoListQuery from "@/app/todolist/tanstack-query/todoQuery";

const ToDoProgress = () => {
  const { todos } = useTodoListQuery();

  const completedTodos = (todos?.filter((todo) => todo.completed) ?? []).length;

  // 진행률 바 길이
  const progressWidth =
    (todos ?? []).length > 0
      ? (completedTodos / (todos ?? []).length) * 100
      : 0;

  return (
    <>
      {/* Tasks Done */}
      <div className="w-[327px] mx-[24px] flex flex-col items-center fixed top-[706px]">
        <div className="font-pretendard font-semibold text-[14px] text-[#26BD81] tracking-tight">
          {completedTodos} of {todos?.length} tasks done
        </div>
        {/* 진행 바 배경 */}
        <div className="w-full h-[20px] mt-[10px] px-[16px] py-[5px] flex bg-[#26BD81] rounded-[12px]">
          <div className="w-full h-[4px] bg-[#FFFFFF] bg-opacity-30 rounded-[111px] relative">
            {/* 진행률(완료 비율) */}
            <div
              className="absolute top-0 left-0 h-full bg-[#FFFFFF] rounded-[111px] transition-[width] duration-300 ease-in-out"
              style={{ width: `${progressWidth}%`, transform: "translateZ(0)" }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToDoProgress;
