"use client";

import { useRouter } from "next/navigation";
import SignUpForm from "./signupsubmit/SignUpForm";
import SignUpButton from "./signupsubmit/SignUpButton";
import { RootState } from "../../redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import { signUp, signUpInput } from "../../redux/actions/userAction";

export type signUpFormData = {
  phoneNumberOrEmail: string;
  fullName: string;
  username: string;
  password: string;
};

const SignUpSubmit = () => {
  const { signup } = useSelector((state: RootState) => ({
    signup: state.user.signup,
  }));

  const dispatch = useDispatch();

  // 폼 입력 상태 업데이트
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    dispatch(signUpInput({ ...signup, [name]: value }));
  };

  // router 객체
  const router = useRouter();

  // 폼 제출 핸들러
  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();

    // console.log("Submitted data:", signup);

    // 폼 제출 후 폼 입력 상태 초기화
    dispatch(
      signUpInput({
        phoneNumberOrEmail: "",
        fullName: "",
        username: "",
        password: "",
      })
    );
    dispatch(signUp(signup));

    // 폼 제출 후 로그인 페이지로 이동
    router.push("/login");
  };

  return (
    <>
      <SignUpForm formData={signup} handleChange={handleChange} />
      <SignUpButton handleSubmit={handleSubmit} />
    </>
  );
};

export default SignUpSubmit;
