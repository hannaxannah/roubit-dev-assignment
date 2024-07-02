import RoubitLogo from "../components/login/roubitLogo";
import LoginForm from "../components/login/loginForm";
import LoginButton from "../components/login/loginButton";
import FindPassword from "../components/login/findPassword";
import CreateNewAccount from "../components/login/createNewAccout";

export default function LogIn() {
  return (
    <>
      <RoubitLogo /> {/* 루빗 로고 컴포넌트 */}
      <LoginForm /> {/* 로그인 폼 컴포넌트 */}
      <LoginButton /> {/* 로그인 버튼 컴포넌트 */}
      <FindPassword /> {/* 비밀번호 찾기 버튼 컴포넌트 */}
      <CreateNewAccount /> {/* 새 계정 생성 버튼 컴포넌트 */}
    </>
  );
}
