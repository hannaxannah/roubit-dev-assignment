import LoginForm from "./loginsubmit/LoginForm";
import LoginButton from "./loginsubmit/LoginButton";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { fetchSignIn } from "../../APIs/userAPI";

export interface logInFormData {
  phoneNumberOrEmail: string;
  password: string;
}

const LogInSubmit = () => {
  // 폼 입력 상태
  const [formData, setFormData] = useState({
    phoneNumberOrEmail: "",
    password: "",
  });

  // 폼 입력 상태 업데이트
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // router 객체
  const router = useRouter();

  // 폼 제출 핸들러
  const onSubmit = async (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();

    const logInInfo = await fetchSignIn(formData);
    if (logInInfo) {
      // console.log("Submitted data:", formData);
      // console.log("logInInfo", logInInfo.accessToken);
      localStorage.setItem("accessToken", logInInfo.accessToken);

      // 폼 제출 성공 후 폼 입력 상태 초기화
      setFormData({
        phoneNumberOrEmail: "",
        password: "",
      });

      // 폼 제출 투두리스트 페이지로 이동
      router.push("/todolist");
    } else {
      console.error("로그인 에러 발생");
    }
  };

  return (
    <>
      <LoginForm formData={formData} onChange={onChange} />
      <LoginButton onSubmit={onSubmit} />
    </>
  );
};

export default LogInSubmit;
