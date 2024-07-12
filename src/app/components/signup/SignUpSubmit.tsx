import { useState } from "react";
import { useRouter } from "next/navigation";
import SignUpForm from "./signup/SignUpForm";
import SignUpButton from "./signup/SignUpButton";
import { fetchSignUp } from "../../APIs/userAPI";

export type signUpFormData = {
  phoneNumberOrEmail: string;
  fullName: string;
  username: string;
  password: string;
};

const SignUpSubmit = () => {
  // 폼 입력 상태
  const [formData, setFormData] = useState({
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

  // router 객체
  const router = useRouter();

  // 폼 제출 핸들러
  const handleSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();

    const fetchedSignUp = await fetchSignUp(formData);

    if (fetchedSignUp.status === 200) {
      // console.log("Submitted data:", fetchedSignUp.data);

      // 폼 제출 성공 후 폼 입력 상태 초기화
      setFormData({
        phoneNumberOrEmail: "",
        fullName: "",
        username: "",
        password: "",
      });

      // 폼 제출 후 로그인 페이지로 이동
      router.push("/login");
    } else {
      console.error(fetchedSignUp.message);
    }
  };

  return (
    <>
      <SignUpForm formData={formData} handleChange={handleChange} />
      <SignUpButton handleSubmit={handleSubmit} />
    </>
  );
};

export default SignUpSubmit;
