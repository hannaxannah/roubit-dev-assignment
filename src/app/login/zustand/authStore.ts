import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface LoginFormData {
  phoneNumberOrEmail: string;
  password: string;
  [key: string]: string;
}

interface Response {
  loading: boolean;
  message: string;
}

type State = {
  loginFormData: LoginFormData;
  response: Response;
  accessToken: string;
};

type Actions = {
  loginInput: (name: string, value: string) => void;
};

const useAuthStore = create<State & Actions>()(
  immer((set) => ({
    loginFormData: {
      phoneNumberOrEmail: "",
      password: "",
    },
    response: {
      loading: false,
      message: "",
    },
    accessToken: "",
    loginInput: (name: string, value: string) =>
      set((state) => {
        state.loginFormData[name] = value;
      }),
  }))
);

export default useAuthStore;
