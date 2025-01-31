"use client";

import { useRouter } from "next/navigation";

const CreateNewAccount = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/signup");
  };

  return (
    <>
      <div className="w-[327px] h-[52px] mt-[141px] px-[1px] pt-[1px] pb-[2px] m-auto bg-[#DBDBDE] rounded-[12px]">
        <button
          className="w-full h-[49px] px-[24px] py-[12px] rounded-[12px] bg-[#FFFFFF] font-pretendard font-semibold text-[16px] text-[#26BD81]"
          onClick={handleClick}
        >
          Create new account
        </button>
      </div>
    </>
  );
};

export default CreateNewAccount;
