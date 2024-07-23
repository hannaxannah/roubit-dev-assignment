"use client";

import Header from "../components/Header";
import SignUpTitle from "../components/signup/SignUpTitle";
import SignUpSubmit from "../components/signup/SignUpSubmit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export type signUpFormData = {
  phoneNumberOrEmail: string;
  fullName: string;
  username: string;
  password: string;
};

const SignUp = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <SignUpTitle />
        <SignUpSubmit />
      </QueryClientProvider>
    </>
  );
};

export default SignUp;
