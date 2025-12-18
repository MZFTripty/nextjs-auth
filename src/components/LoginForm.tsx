"use client";
import React, { useState } from "react";
import SocialLogin from "./SocialLogin";
import { doCredentialLogin } from "@/app/actions";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  
  async function handleFormData(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try{
      const formData = new FormData(event.currentTarget);
      const response = await doCredentialLogin(formData);
      if(!!response?.error){
        setError(response.error.message)
      }else{
        router.push("/home");
      }
    }
    catch(err){
      console.error("Error handling form data:", err);
      setError("check your credentials");
    }
  }
  return (
    <>
      <form onSubmit={handleFormData} className="border border-gray-300 p-3 my-3 flex flex-col items-center rounded-md">
        <div className="my-3">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required className="border mx-2 border-gray-500 rounded"/>
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required className="border mx-2 border-gray-500 rounded"/>
        </div>
        <button className="border-2 bg-amber-200 p-2 rounded-md my-3">
          Credential Login
        </button>
      </form>
      <div className="text-red-500 my-2">{error}</div>

      <SocialLogin />
    </>
  );
}
