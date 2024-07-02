"use client";

import { useState } from "react";
import Header from "../components/Header";
import SignUpTitle from "../components/signup/SignUpTitle";
import SignUpForm from "../components/signup/SignUpForm";
import SignUpButton from "../components/signup/SignUpButton";

export default function SignUp() {
  // 폼 입력 상태
  const [formData, setFormData] = useState({
    phoneNumberOrEmail: "",
    fullName: "",
    username: "",
    password: "",
  });

  // 입력 필드 유효성 상태
  const [validationErrors, setValidationErrors] = useState({
    phoneNumberOrEmail: "",
    fullName: "",
    username: "",
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
      fullName: "",
      username: "",
      password: "",
    };

    if (!formData.phoneNumberOrEmail) {
      errors.phoneNumberOrEmail = "Phone number or email을 입력해주세요";
      isValid = false;
    }

    if (!formData.fullName) {
      errors.fullName = "Full name을 입력해주세요";
      isValid = false;
    }

    if (!formData.username) {
      errors.fullName = "username을 입력해주세요";
      isValid = false;
    } else if (formData.username.length < 2 || formData.username.length > 12) {
      errors.username = "Username은 2글자 이상 12글자 이하로 입력해주세요";
      isValid = false;
    }

    if (!formData.password) {
      errors.fullName = "password를 입력해주세요";
      isValid = false;
    } else if (formData.password.length < 6 || formData.password.length > 12) {
      errors.password = "Password는 6글자 이상 12글자 이하로 입력해주세요";
      isValid = false;
    }

    setValidationErrors(errors);
    return isValid;
  };

  // 폼 제출 핸들러
  const handleSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();

    if (validate()) {
      console.log("Submitted data:", formData);

      // 폼 제출 후 폼 입력 상태 초기화
      setFormData({
        phoneNumberOrEmail: "",
        fullName: "",
        username: "",
        password: "",
      });

      setValidationErrors({
        phoneNumberOrEmail: "",
        fullName: "",
        username: "",
        password: "",
      });

      // 폼 제출 후 로그인 페이지로 이동
      window.location.href = "/login";
    }
  };

  return (
    <>
      <Header /> {/* 헤더 컴포넌트 */}
      <SignUpTitle /> {/* 회원가입 타이틀 컴포넌트 */}
      <SignUpForm
        formData={formData}
        validationErrors={validationErrors}
        handleChange={handleChange}
      />
      {/* 회원가입 폼 컴포넌트 */}
      <SignUpButton handleSubmit={handleSubmit} />
      {/* 회원가입 버튼 컴포넌트 */}
    </>
  );
}
