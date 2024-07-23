"use client";

import { useMutation } from "@tanstack/react-query";
import { fetchSignUp } from "@/app/APIs/userAPI";

export const useSignupMutation = () => {
  const { mutateAsync, isSuccess, isError, isPending } = useMutation({
    mutationFn: ({
      phoneNumberOrEmail,
      password,
      fullName,
      username,
    }: {
      phoneNumberOrEmail: string;
      password: string;
      fullName: string;
      username: string;
    }) => fetchSignUp({ phoneNumberOrEmail, password, fullName, username }),
    onSuccess: (data) => {},
    onError: (error: any) => {
      console.error("signup failed:", error.message);
    },
  });
  return { mutateAsync, isSuccess, isError, isSignUpPending: isPending };
};
