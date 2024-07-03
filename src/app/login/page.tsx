"use client";
import RoubitLogo from "../components/login/RoubitLogo";
import LoginForm from "../components/login/LoginForm";
import LoginButton from "../components/login/LoginButton";
import FindPassword from "../components/login/FindPassword";
import CreateNewAccount from "../components/login/CreateNewAccount";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LogIn() {
  // 폼 입력 상태
  const [formData, setFormData] = useState({
    phoneNumberOrEmail: "",
    password: "",
  });

  // 입력 필드 유효성 상태
  const [validationErrors, setValidationErrors] = useState({
    phoneNumberOrEmail: "",
    password: "",
  });

  // 폼 입력 상태 업데이트
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 유효성 검사
  const validate = (): boolean => {
    let isValid = true;
    const errors = {
      phoneNumberOrEmail: "",
      password: "",
    };

    if (!formData.phoneNumberOrEmail) {
      errors.phoneNumberOrEmail = "Phone number or email을 입력해주세요";
      isValid = false;
    }

    if (!formData.password) {
      errors.password = "Password를 입력해주세요";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  // router 객체
  const router = useRouter();

  // 폼 제출 핸들러
  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();

    if (validate()) {
      console.log("Submitted data:", formData);

      // 폼 제출 후 폼 입력 상태 초기화
      setFormData({
        phoneNumberOrEmail: "",
        password: "",
      });

      setValidationErrors({
        phoneNumberOrEmail: "",
        password: "",
      });

      // 폼 제출 투두리스트 페이지로 이동
      router.push("/todolist");
    }
  };

  return (
    <>
      <RoubitLogo /> {/* 루빗 로고 컴포넌트 */}
      <LoginForm
        formData={formData}
        validationErrors={validationErrors}
        handleChange={handleChange}
      />{" "}
      {/* 로그인 폼 컴포넌트 */}
      <LoginButton handleSubmit={handleSubmit} /> {/* 로그인 버튼 컴포넌트 */}
      <FindPassword /> {/* 비밀번호 찾기 버튼 컴포넌트 */}
      <CreateNewAccount /> {/* 새 계정 생성 버튼 컴포넌트 */}
    </>
  );
}
