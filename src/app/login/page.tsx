import Image from "next/image";
import roubitLogo from "../../../public/logo_splash.svg";

export default function LogIn() {
  return (
    <>
      {/* Log In */}
      <div className="w-[327px] h-[346px] mt-[189px] flex flex-col items-center m-auto">
        {/* Roubit Logo */}
        <div className="w-[180px] h-[90px] flex flex-col items-center m-auto gap-[21.355px] pt-[6.682px] pb-[11.693px] py-[2.968px]">
          <Image src={roubitLogo} alt="roubitLogo" width={180} height={90} />
        </div>
        {/* LogIn Form */}
        <div className="w-full mt-[28px] flex flex-col gap-[16px]">
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
        </div>
        {/* Log in Button */}
        <div className="mt-[20px] w-full h-[51px] bg-[#209C6A] rounded-[12px]">
          <button className="w-full h-[48px] bg-[#26BD81] rounded-[12px] font-pretendard font-semibold text-[#FFFFFF] text-[1rem] leading-[1.5rem]">
            Log in
          </button>
        </div>
        {/* Forget password? */}
        <button className="mt-[17px] font-pretendard font-semibold text-[#929294] text-[13px]">
          Forget password?
        </button>
      </div>
      {/* Create new account */}
      <div className="w-[327px] h-[52px] mt-[141px] px-[1px] pt-[1px] pb-[2px] m-auto bg-[#DBDBDE] rounded-[12px]">
        <button className="w-full h-[49px] px-[24px] py-[12px] rounded-[12px] bg-[#FFFFFF] font-pretendard font-semibold text-[16px] text-[#26BD81]">
          Create new account
        </button>
      </div>
    </>
  );
}
