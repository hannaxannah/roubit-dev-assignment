"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { RootState } from "../../../redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import { signUpRequest } from "../../../redux/actions/userAction";

const SignUpButton = () => {
  const { signupFormData } = useSelector((state: RootState) => ({
    signupFormData: state.user.signupFormData,
  }));

  const { route } = useSelector((state: RootState) => ({
    route: state.user.route,
  }));

  const dispatch = useDispatch();

  // router 객체
  const router = useRouter();

  // 폼 제출 핸들러
  const handleSubmit = (event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) event.preventDefault();

    dispatch(signUpRequest(signupFormData));
  };

  // 폼 제출 로그인 페이지로 이동
  useEffect(() => {
    if (route != "") {
      // console.log(route);
      router.push(route);
    }
  }, [route, router]);

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
