import styles from "./todolist.module.css";

export default function ToDoList() {
  return (
    <>
      {/* To-Do List Title */}
      <div className="ml-[24px] mt-[32px] font-pretendard font-semibold text-[24px] text-[#323233]">
        To-Do List
      </div>
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
      {/* To-Do List, Check, Delete */}
      <div className="h-[408px] mx-[24px] mt-[32px]">
        {/* To-Do Item :unchecked */}
        <div className="w-full h-[24px] flex items-center gap-[10px]">
          {/* checkbox */}
          <label>
            {/* <input
              className={styles.checkbox}
              type="checkbox"
              value="Learn JavaScript project"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle
                cx="12"
                cy="12"
                r="11.4"
                stroke="#CCCCCE"
                stroke-width="1.2"
              />
            </svg>
          </label>
          {/* todo label */}
          <label className="w-full font-pretendard font-medium text-[16px] text-[#323233] leadign-[24px] tracking-tight">
            Learn JavaScript project
          </label>
          {/* delete */}
          <button className="w-[21px] h-[21px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M3.125 5.75H4.875H18.875"
                stroke="#929294"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.1243 5.75V18C17.1243 18.4641 16.9399 18.9092 16.6117 19.2374C16.2836 19.5656 15.8384 19.75 15.3743 19.75H6.62431C6.16018 19.75 5.71507 19.5656 5.38688 19.2374C5.05869 18.9092 4.87431 18.4641 4.87431 18V5.75M7.49931 5.75V4C7.49931 3.53587 7.68369 3.09075 8.01188 2.76256C8.34007 2.43437 8.78518 2.25 9.24931 2.25H12.7493C13.2134 2.25 13.6586 2.43437 13.9867 2.76256C14.3149 3.09075 14.4993 3.53587 14.4993 4V5.75"
                stroke="#929294"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.25069 10.125V15.375"
                stroke="#929294"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.7493 10.125V15.375"
                stroke="#929294"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
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
          <label>
            {/* <input
              className={styles.checkbox}
              type="checkbox"
              value="Make a to do list app"
            /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <circle cx="12" cy="12" r="12" fill="#26BD81" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.2419 8.13964C18.7228 8.58922 18.7188 9.31447 18.2331 9.75954L11.5662 15.8686C11.3311 16.0841 11.0126 16.2034 10.6819 16.2C10.3511 16.1966 10.0355 16.0707 9.80566 15.8505L5.74755 11.9629C5.27265 11.508 5.28612 10.7828 5.77762 10.3432C6.26912 9.90366 7.05255 9.91612 7.52745 10.3711L10.7152 13.4249L16.4919 8.13147C16.9776 7.6864 17.7611 7.69006 18.2419 8.13964Z"
                fill="white"
              />
            </svg>
          </label>
          {/* todo label */}
          <label className="w-full font-pretendard font-medium text-[16px] text-[#929294] leadign-[24px] tracking-tight line-through">
            Make a to do list app
          </label>
          {/* delete */}
          <button className="w-[21px] h-[21px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <path
                d="M3.125 5.75H4.875H18.875"
                stroke="#929294"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17.1243 5.75V18C17.1243 18.4641 16.9399 18.9092 16.6117 19.2374C16.2836 19.5656 15.8384 19.75 15.3743 19.75H6.62431C6.16018 19.75 5.71507 19.5656 5.38688 19.2374C5.05869 18.9092 4.87431 18.4641 4.87431 18V5.75M7.49931 5.75V4C7.49931 3.53587 7.68369 3.09075 8.01188 2.76256C8.34007 2.43437 8.78518 2.25 9.24931 2.25H12.7493C13.2134 2.25 13.6586 2.43437 13.9867 2.76256C14.3149 3.09075 14.4993 3.53587 14.4993 4V5.75"
                stroke="#929294"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.25069 10.125V15.375"
                stroke="#929294"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.7493 10.125V15.375"
                stroke="#929294"
                stroke-width="1.4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
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
