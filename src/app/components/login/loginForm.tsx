export default function LoginForm() {
  return (
    <>
      <form className="w-[327px] mt-[28px] flex flex-col m-auto gap-[16px]">
        <input
          className="w-full h-[52px] px-[16px] py-[10px] ring-[1px] ring-[#CCCCCE] rounded-[12px] placeholder:font-pretendard font-medium text-[14px] color-[#B6B6B8]"
          type="text"
          placeholder="Phone number or Email"
        />
        <input
          className="w-full h-[52px] px-[16px] py-[10px] ring-[1px] ring-[#CCCCCE] rounded-[12px] placeholder:font-pretendard font-medium text-[14px] color-[#B6B6B8]"
          type="text"
          placeholder="Password"
        />
      </form>
    </>
  );
}
