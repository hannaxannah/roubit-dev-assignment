"use client";

import RoubitLogo from "../components/login/RoubitLogo";
import LoginSubmit from "../components/login/LoginSubmit";
import FindPassword from "../components/login/FindPassword";
import CreateNewAccount from "../components/login/CreateNewAccount";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export interface loginFormData {
  phoneNumberOrEmail: string;
  password: string;
}

const LogIn = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RoubitLogo />
        <LoginSubmit />
        <FindPassword />
        <CreateNewAccount />
      </QueryClientProvider>
    </>
  );
};

export default LogIn;
