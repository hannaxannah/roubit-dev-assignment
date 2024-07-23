"use client";

import useAuthStore from "@/app/login/zustand/authStore";
import { useLoginMutation } from "@/app/login/tanstack-query/loginMutation";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const loginFormData = useAuthStore((state) => state.loginFormData);
  const loginMutation = useLoginMutation();

  const router = useRouter();

  // 폼 제출 핸들러
  const onSubmit = async (event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) event.preventDefault();
    const { phoneNumberOrEmail, password } = loginFormData;
    const data = await loginMutation.mutateAsync({
      phoneNumberOrEmail,
      password,
    });
    loginMutation.isSignInPending ? console.log("로그인 로딩") : null;
    localStorage.setItem("accessToken", data.data.accessToken);
    router.push("/todolist");
  };

  return (
    <>
      <div className="w-[327px] mt-[20px] h-[51px] m-auto bg-[#209C6A] rounded-[12px]">
        <button
          className="w-full h-[48px] bg-[#26BD81] rounded-[12px] font-pretendard font-semibold text-[#FFFFFF] text-[1rem] leading-[1.5rem]"
          onClick={onSubmit}
        >
          Log in
        </button>
      </div>
    </>
  );
};

export default LoginButton;
