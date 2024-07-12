import axios from "axios";
import { GRAPHQL_ENDPOINT } from "./endPoint";
import { SIGN_UP_QUERY, SIGN_IN_QUERY } from "./userQuery";
import { signUpFormData } from "../signup/page";
import { logInFormData } from "../login/page";

export interface signUpReturn {
  status: number;
  data: {
    id: string;
    email: string;
    fullName: string;
    username: string;
  };
  message: string;
}

export interface signInReturn {
  accessToken: string;
}

export const fetchSignUp = async ({
  phoneNumberOrEmail,
  password,
  fullName,
  username,
}: signUpFormData): Promise<signUpReturn> => {
  try {
    const response = await axios.post(GRAPHQL_ENDPOINT, {
      query: SIGN_UP_QUERY,
      variables: {
        createUserInput: {
          email: phoneNumberOrEmail,
          password: password,
          fullName: fullName,
          username: username,
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
  phoneNumberOrEmail,
  password,
}: logInFormData): Promise<signInReturn> => {
  try {
    const response = await axios.post(GRAPHQL_ENDPOINT, {
      query: SIGN_IN_QUERY,
      variables: {
        loginInput: {
          email: phoneNumberOrEmail,
          password: password,
        },
      },
    });
    const fetchedSignedInUser = response.data.data.signIn.data;
    // console.log(fetchedSignedInUser);
    return fetchedSignedInUser;
  } catch (error) {
    console.error("graphql: ", error);
    return {
      accessToken: "",
    };
  }
};
