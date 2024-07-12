import Header from "../components/Header";
import SignUpTitle from "../components/signup/SignUpTitle";
import SignUpSubmit from "../components/signup/SignUpSubmit";

export type signUpFormData = {
  phoneNumberOrEmail: string;
  fullName: string;
  username: string;
  password: string;
};

const SignUp = () => {
  return (
    <>
      <Header />
      <SignUpTitle />
      <SignUpSubmit />
    </>
  );
};

export default SignUp;
