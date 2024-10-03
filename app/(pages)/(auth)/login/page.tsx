"use client";
import Button from "@/app/components/button";
import Input from "@/app/components/Input";
import React from "react";
import { useFormState } from "react-dom";
import { login } from "./actions";

export default function Page() {
  const [state, dispatch] = useFormState(login, null);
  return (
    <form action={dispatch} className="flex flex-col gap-3 h-64">
      <Input
        name="email"
        type="email"
        placeholder="Email"
        required
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        minLength={4}
        required
        autoComplete="new-password"
      />
      <div className="text-left text-red-500">{state?.error}</div>
      <Button text="Login" />
    </form>
  );
}
