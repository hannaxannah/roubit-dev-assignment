"use client";

import useSignupStore from "@/app/signup/zustand/signupStore";
import { useSignupMutation } from "@/app/signup/tanstack-query/signupMutation";
import { useRouter } from "next/navigation";

const SignUpButton = () => {
  const signupFormData = useSignupStore((state) => state.signupFormData);
  const signupMutation = useSignupMutation();

  const router = useRouter();

  // 폼 제출 핸들러
  const handleSubmit = (event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) event.preventDefault();
    const { phoneNumberOrEmail, password, fullName, username } = signupFormData;
    signupMutation.mutateAsync({
      phoneNumberOrEmail,
      password,
      fullName,
      username,
    });
    router.push("/login");
    signupMutation.isSignUpPending ? console.log("회원가입 로딩") : null;
  };

  return (
    <>
      <div className="mx-[1.5rem] mt-[7.625rem] w-[20.438rem] h-[3.25rem] bg-[#E8E8EA] rounded-t-xl rounded-b-xl hover:bg-[#209C6A]">
        <button
          className="w-[20.438rem] h-[3.063rem] bg-[#E8E8EA] rounded-t-xl rounded-b-xl font-pretendard font-semibold text-[#CCCCCE] text-[1rem] leading-[1.5rem]  hover:bg-[#26BD81] hover:text-white"
          onClick={handleSubmit}
        >
          Sign up
        </button>
      </div>
    </>
  );
};

export default SignUpButton;
