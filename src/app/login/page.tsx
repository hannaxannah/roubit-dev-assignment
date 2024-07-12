"use client";
import RoubitLogo from "../components/login/RoubitLogo";
import LoginForm from "../components/login/LoginForm";
import LoginButton from "../components/login/LoginButton";
import FindPassword from "../components/login/FindPassword";
import CreateNewAccount from "../components/login/CreateNewAccount";
import { useRouter } from "next/navigation";
import { RootState } from "../redux/reducers/index";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logInInput } from "../redux/actions/userAction";

export interface logInFormData {
  phoneNumberOrEmail: string;
  password: string;
}

const LogIn = () => {
  const { login } = useSelector((state: RootState) => ({
    login: state.user.login,
  }));
  // console.log("login", login);
  const dispatch = useDispatch();

  // 폼 입력 상태 업데이트
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    // console.log(login);
    dispatch(logInInput({ ...login, [name]: value }));
  };

  // router 객체
  const router = useRouter();

  // 폼 제출 핸들러
  const onSubmit = (event?: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();

    // console.log("Submitted data:", login);

    dispatch(logIn(login));
    dispatch(
      logInInput({
        phoneNumberOrEmail: "",
        password: "",
      })
    );

    // 폼 제출 투두리스트 페이지로 이동
    router.push("/todolist");
  };

  return (
    <>
      <RoubitLogo /> {/* 루빗 로고 컴포ㄴ넌트 */}
      <LoginForm formData={login} onChange={onChange} />
      <LoginButton onSubmit={onSubmit} />
      <FindPassword />
      <CreateNewAccount />
    </>
  );
};

export default LogIn;
