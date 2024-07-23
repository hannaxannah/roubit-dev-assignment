import axios from "axios";
import { GRAPHQL_ENDPOINT } from "./endPoint";
import { SIGN_UP_QUERY, SIGN_IN_QUERY } from "./userQuery";
import { signUpFormData } from "../signup/page";
import { loginFormData } from "../login/page";

export interface SignUpReturn {
  status: number;
  data: {
    id: string;
    email: string;
    fullName: string;
    username: string;
  };
  message: string;
}

export interface SignInReturn {
  status: number;
  data: {
    accessToken: string;
  };
  message: string;
}

export const fetchSignUp = async ({
  phoneNumberOrEmail: email,
  password,
  fullName,
  username,
}: signUpFormData): Promise<SignUpReturn> => {
  try {
    const response = await axios.post(GRAPHQL_ENDPOINT, {
      query: SIGN_UP_QUERY,
      variables: {
        createUserInput: {
          email,
          password,
          fullName,
          username,
        },
      },
    });
    const fetchedSignedUpUser = response.data.data.signUp;
    // console.log(fetchedSignedUpUser);
    return fetchedSignedUpUser;
  } catch (error) {
    console.error("graphql: ", error);
    return {
      status: 400,
      data: {
        id: "",
        email: "",
        fullName: "",
        username: "",
      },
      message: "",
    };
  }
};

export const fetchSignIn = async ({
  phoneNumberOrEmail: email,
  password,
}: loginFormData): Promise<SignInReturn> => {
  try {
    // console.log("fetchSignIn", phoneNumberOrEmail, password);
    const response = await axios.post(GRAPHQL_ENDPOINT, {
      query: SIGN_IN_QUERY,
      variables: {
        loginInput: {
          email,
          password,
        },
      },
    });
    const fetchedSignedInUser = response.data.data.signIn;
    // console.log("fetchedSignedInUser", fetchedSignedInUser);
    return fetchedSignedInUser;
  } catch (error) {
    console.error("graphql: ", error);
    return {
      status: 400,
      data: {
        accessToken: "",
      },
      message: "",
    };
  }
};
