import RoubitLogo from "../components/login/RoubitLogo";
import LoginSubmit from "../components/login/LoginSubmit";
import FindPassword from "../components/login/FindPassword";
import CreateNewAccount from "../components/login/CreateNewAccount";

export interface logInFormData {
  phoneNumberOrEmail: string;
  password: string;
}

const LogIn = () => {
  return (
    <>
      <RoubitLogo />
      <LoginSubmit />
      <FindPassword />
      <CreateNewAccount />
    </>
  );
};

export default LogIn;
