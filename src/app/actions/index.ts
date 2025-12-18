"use server";

import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");
  await signIn(action as string, {
    redirectTo: "/home",
  });
}

export async function signout() {
  await signOut({
    redirectTo: "/",
  });
}

export async function doCredentialLogin(formData: FormData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
    return response;
  } catch (err) {
    throw new Error(err as string);
  }
}
