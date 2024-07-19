"use client";

import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { fetchSignIn } from "@/app/APIs/userAPI";

export const useLoginMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({
      phoneNumberOrEmail,
      password,
    }: {
      phoneNumberOrEmail: string;
      password: string;
    }) => fetchSignIn({ phoneNumberOrEmail, password }),
    onSuccess: (data) => {
      console.log("tanstack", data);
      router.push("/todolist");
    },
    onError: (error: any) => {
      console.error("Login failed:", error.message);
    },
  });
};
