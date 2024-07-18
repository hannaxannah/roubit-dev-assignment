"use client";

import { RootState } from "../../../redux/reducers";
import { useSelector, useDispatch } from "react-redux";
import { logInInput } from "../../../redux/actions/userAction";

// interface LogInFormProps {
//   formData: {
//     phoneNumberOrEmail: string;
//     password: string;
//   };
//   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// }

const LoginForm = () => {
  const { loginFormData } = useSelector((state: RootState) => ({
    loginFormData: state.user.loginFormData,
  }));

  // console.log("login", login);
  const dispatch = useDispatch();

  const formFields = [
    {
      name: "phoneNumberOrEmail",
      label: "Phone number or Email",
      type: "text",
      placeholder: "Phone number or Email",
      value: loginFormData?.phoneNumberOrEmail,
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      value: loginFormData?.password,
    },
  ];

  // 폼 입력 상태 업데이트
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // console.log(name, value);
    dispatch(logInInput({ ...loginFormData, [name]: value }));
  };

  return (
    <>
      <form className="w-[327px] mt-[28px] flex flex-col m-auto gap-[16px]">
        {formFields.map((field, index) => (
          <input
            className="w-full h-[52px] px-[16px] py-[10px] ring-[1px] ring-[#CCCCCE] rounded-[12px] placeholder:font-pretendard font-medium text-[14px] color-[#B6B6B8] focus:ring-[0.125rem] focus:ring-[#26BD81] focus:outline-none focus:text-[#161617]"
            type={field.type}
            placeholder={field.placeholder}
            name={field.name}
            value={field.value}
            onChange={onChange}
            key={index}
          />
        ))}
      </form>
    </>
  );
};

export default LoginForm;
