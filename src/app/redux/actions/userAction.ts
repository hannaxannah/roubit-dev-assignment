export const LOG_IN = "LOG_IN";
export const LOG_IN_INPUT = "LOG_IN_INPUT";
export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_INPUT = "SIGN_UP_INPUT";

export interface loginFormData {
  phoneNumberOrEmail: string;
  password: string;
}

export interface signupFormData {
  phoneNumberOrEmail: string;
  fullName: string;
  username: string;
  password: string;
}

export const logIn = (loginFormData: loginFormData) => ({
  type: LOG_IN,
  loginFormData,
});

export const logInInput = (loginFormData: loginFormData) => {
  return {
    type: LOG_IN_INPUT,
    loginFormData,
  };
};

export const signUp = (signupFormData: signupFormData) => ({
  type: SIGN_UP,
  signupFormData,
});

export const signUpInput = (signupFormData: signupFormData) => {
  // console.log("useraction: ", signupFormData);
  return {
    type: SIGN_UP_INPUT,
    signupFormData,
  };
};
