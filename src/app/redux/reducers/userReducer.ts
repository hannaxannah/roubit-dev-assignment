import { Reducer } from "redux";

import {
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_INPUT,
  LoginFormData,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_INPUT,
  SignupFormData,
} from "../actions/userAction";

type Response = {
  message: string;
  loading: boolean;
};

interface UserState {
  loginFormData: LoginFormData;
  signupFormData: SignupFormData;
  response: Response;
  accessToken: string;
  route: string;
}

const initialState: UserState = {
  loginFormData: {
    phoneNumberOrEmail: "",
    password: "",
  },
  signupFormData: {
    phoneNumberOrEmail: "",
    fullName: "",
    username: "",
    password: "",
  },
  response: {
    message: "",
    loading: false,
  },
  accessToken: "",
  route: "",
};

export type Action =
  | { type: typeof LOG_IN_REQUEST; loginFormData: LoginFormData }
  | { type: typeof LOG_IN_SUCCESS; accessToken: string }
  | { type: typeof LOG_IN_FAILURE; error: string }
  | { type: typeof LOG_IN_INPUT; loginFormData: LoginFormData }
  | { type: typeof SIGN_UP_REQUEST; signupFormData: SignupFormData }
  | { type: typeof SIGN_UP_SUCCESS; message: string }
  | { type: typeof SIGN_UP_FAILURE; error: string }
  | { type: typeof SIGN_UP_INPUT; signupFormData: SignupFormData };

const userReducer: Reducer<UserState, Action> = (
  state = initialState,
  action: Action
): UserState => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      return {
        ...state,
        response: { loading: true, message: "request" },
        accessToken: "",
        loginFormData: action.loginFormData,
        route: "",
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        response: { loading: false, message: "success" },
        accessToken: action.accessToken,
        loginFormData: {
          phoneNumberOrEmail: "",
          password: "",
        },
        route: "/todolist",
      };
    case LOG_IN_FAILURE:
      return {
        ...state,
        response: { loading: false, message: action.error },
        accessToken: "",
        route: "",
      };
    case LOG_IN_INPUT:
      return {
        ...state,
        loginFormData: {
          ...state.loginFormData,
          phoneNumberOrEmail: action.loginFormData.phoneNumberOrEmail,
          password: action.loginFormData.password,
        },
        route: "",
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        response: {
          loading: true,
          message: "sign up requested",
        },
        signupFormData: action.signupFormData,
        route: "",
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        response: {
          loading: false,
          message: "success",
        },
        signupFormData: {
          phoneNumberOrEmail: "",
          fullName: "",
          username: "",
          password: "",
        },
        route: "/login",
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        response: { loading: false, message: action.error },
        signupFormData: {
          phoneNumberOrEmail: "",
          fullName: "",
          username: "",
          password: "",
        },
        route: "",
      };
    case SIGN_UP_INPUT:
      return {
        ...state,
        signupFormData: {
          ...state.signupFormData,
          phoneNumberOrEmail: action.signupFormData.phoneNumberOrEmail,
          fullName: action.signupFormData.fullName,
          username: action.signupFormData.username,
          password: action.signupFormData.password,
        },
        route: "",
      };
    default:
      return state;
  }
};

export default userReducer;
