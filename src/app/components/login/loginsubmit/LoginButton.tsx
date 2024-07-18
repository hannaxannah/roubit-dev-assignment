"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { RootState } from "../../../redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import { logInRequest } from "../../../redux/actions/userAction";

const LoginButton = () => {
  const { loginFormData } = useSelector((state: RootState) => ({
    loginFormData: state.user.loginFormData,
  }));

  const { route } = useSelector((state: RootState) => ({
    route: state.user.route,
  }));

  const dispatch = useDispatch();

  // router 객체
  const router = useRouter();

  // 폼 제출 핸들러
  const onSubmit = (event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) event.preventDefault();

    dispatch(logInRequest(loginFormData));
  };

  // 폼 제출 투두리스트 페이지로 이동
  useEffect(() => {
    if (route != "") {
      // console.log(route);
      router.push(route);
    }
  }, [route, router]);

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
