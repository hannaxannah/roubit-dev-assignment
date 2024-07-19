"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { fetchSignUp } from "@/app/APIs/userAPI";

export const useSignupMutation = () => {
  const router = useRouter();

  return useMutation({
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
    onSuccess: (data) => {
      console.log("tanstack", data);
      router.push("/login");
    },
    onError: (error: any) => {
      console.error("signup failed:", error.message);
    },
  });
};
