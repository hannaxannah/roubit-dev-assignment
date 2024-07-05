import {
  LOG_IN,
  SIGN_UP,
  loginFormData,
  signupFormData,
} from "../actions/userAction";

interface userState {
  login: loginFormData;
  signup: signupFormData;
}

const initialState: userState = {
  login: {
    phoneNumberOrEmail: "",
    password: "",
  },
  signup: {
    phoneNumberOrEmail: "",
    fullName: "",
    username: "",
    password: "",
  },
};

type Action =
  | { type: typeof LOG_IN; loginFormData: loginFormData }
  | { type: typeof SIGN_UP; signupFormData: signupFormData };

const userReducer = (state = initialState, action: Action): userState => {
  switch (action.type) {
    case LOG_IN:
      console.log("LOG_IN action received:", action.loginFormData);
      return {
        ...state,
        login: action.loginFormData,
      };
    case SIGN_UP:
      console.log("SIGN_UP action received:", action.signupFormData);
      return {
        ...state,
        signup: action.signupFormData,
      };
    default:
      return state;
  }
};

export default userReducer;
