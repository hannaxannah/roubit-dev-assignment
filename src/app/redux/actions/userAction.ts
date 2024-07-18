export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";
export const LOG_IN_INPUT = "LOG_IN_INPUT";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const SIGN_UP_INPUT = "SIGN_UP_INPUT";

export interface LoginFormData {
  phoneNumberOrEmail: string;
  password: string;
}

export interface SignupFormData {
  phoneNumberOrEmail: string;
  fullName: string;
  username: string;
  password: string;
}

export const logInRequest = (loginFormData: LoginFormData) => ({
  type: LOG_IN_REQUEST,
  loginFormData,
});

export const logInSuccess = (accessToken: string) => ({
  type: LOG_IN_SUCCESS,
  accessToken,
});

export const logInFailure = (message: string) => ({
  type: LOG_IN_FAILURE,
  message,
});

export const logInInput = (loginFormData: LoginFormData) => {
  return {
    type: LOG_IN_INPUT,
    loginFormData,
  };
};

export const signUpRequest = (signupFormData: SignupFormData) => ({
  type: SIGN_UP_REQUEST,
  signupFormData,
});

export const signUpSuccess = (message: string) => ({
  type: SIGN_UP_SUCCESS,
  message,
});

export const signUpFailure = (message: string) => ({
  type: SIGN_UP_FAILURE,
  message,
});

export const signUpInput = (signupFormData: SignupFormData) => {
  return {
    type: SIGN_UP_INPUT,
    signupFormData,
  };
};
