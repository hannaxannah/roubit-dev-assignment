import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface SignupFormData {
  phoneNumberOrEmail: string;
  fullName: string;
  username: string;
  password: string;
  [key: string]: string;
}

interface Response {
  loading: boolean;
  message: string;
}

type State = {
  signupFormData: SignupFormData;
  response: Response;
};

type Actions = {
  signupInput: (name: string, value: string) => void;
};

const useSignupStore = create<State & Actions>()(
  immer((set) => ({
    signupFormData: {
      phoneNumberOrEmail: "",
      fullName: "",
      username: "",
      password: "",
    },
    response: {
      loading: false,
      message: "",
    },
    signupInput: (name: string, value: string) =>
      set((state) => {
        state.signupFormData[name] = value;
      }),
  }))
);

export default useSignupStore;
