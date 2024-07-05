export const LOG_IN = "LOG_IN";
export const SIGN_UP = "SIGN_UP";

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

export const signUp = (signupFormData: signupFormData) => ({
  type: SIGN_UP,
  signupFormData,
});
