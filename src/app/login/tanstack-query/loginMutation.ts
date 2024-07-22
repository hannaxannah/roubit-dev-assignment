"use client";

import { useMutation } from "@tanstack/react-query";
import { fetchSignIn } from "@/app/APIs/userAPI";

export const useLoginMutation = () => {
  const { mutateAsync, isSuccess, isError, isPending } = useMutation({
    mutationFn: ({
      phoneNumberOrEmail,
      password,
    }: {
      phoneNumberOrEmail: string;
      password: string;
    }) => fetchSignIn({ phoneNumberOrEmail, password }),
    onSuccess: (data) => {},
    onError: (error: any) => {
      console.error("Login failed:", error.message);
    },
  });
  return { mutateAsync, isSuccess, isError, isSignInPending: isPending };
};
