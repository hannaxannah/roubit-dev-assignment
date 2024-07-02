export default function ToDoAdd() {
  return (
    <>
      {/* To-Do Add */}
      <form className="mx-[24px] mt-[18px] flex items-center">
        <input
          className="w-[273px] h-[48px] px-[16px] py[10px] ring-[#B6B6B8] ring-[1px] rounded-[12px] placeholder:font-pretendard font-medium text-[14px] text-[#B6B6B8]"
          type="text"
          placeholder="Add your task"
        />
        <div className="w-[42px] h-[42px] ml-[12px] pb-[3px] rounded-[777.7px] bg-[#209C6A]">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="39"
              viewBox="0 0 42 39"
              fill="none"
            >
              <rect
                x="42"
                width="39"
                height="42"
                rx="19.5"
                transform="rotate(90 42 0)"
                fill="#26BD81"
              />
              <path
                d="M13 18.5H29"
                stroke="white"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 11L21 26"
                stroke="white"
                stroke-width="2.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </form>
    </>
  );
}
