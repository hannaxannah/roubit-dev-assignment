import Header from "../components/Header";
import SignUpTitle from "../components/signup/signupTitle";
import SignUpForm from "../components/signup/signupForm";
import SignUpButton from "../components/signup/signupButton";

export default function SignUp() {
  return (
    <>
      <Header /> {/* 헤더 컴포넌트 */}
      <SignUpTitle /> {/* 회원가입 타이틀 컴포넌트 */}
      <SignUpForm /> {/* 회원가입 폼 컴포넌트 */}
      <SignUpButton /> {/* 회원가입 버튼 컴포넌트 */}
    </>
  );
}
