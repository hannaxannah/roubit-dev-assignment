export default function ToDoProgress() {
  return (
    <>
      {/* Tasks Done */}
      <div className="w-[327px] mx-[24px] flex flex-col items-center fixed top-[706px]">
        <div className="font-pretendard font-semibold text-[14px] text-[#26BD81] tracking-tight">
          3 of 7 tasks done
        </div>
        <div className="w-full h-[20px] mt-[10px] px-[16px] py-[5px] flex bg-[#26BD81] rounded-[12px]">
          <div className="w-full h-[4px] bg-[#FFFFFF] bg-opacity-30 rounded-[111px]"></div>
        </div>
      </div>
    </>
  );
}
