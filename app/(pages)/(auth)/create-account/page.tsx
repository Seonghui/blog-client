"use client";

import Button from "@/app/components/button";
import Input from "@/app/components/Input";
import React from "react";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function Page() {
  const [state, dispatch] = useFormState(createAccount, null);
  return (
    <form action={dispatch} className="flex flex-col gap-3 h-64">
      <Input
        name="username"
        type="text"
        placeholder="Username"
        required
        errors={state?.errors ?? []}
        minLength={3}
        maxLength={10}
      />
      <Input
        name="email"
        type="email"
        placeholder="Email"
        required
        errors={state?.errors ?? []}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        minLength={4}
        required
        autoComplete="new-password"
        errors={state?.errors ?? []}
      />
      <Input
        name="confirm_password"
        type="password"
        placeholder="Confirm Password"
        required
        autoComplete="new-password"
        minLength={4}
        errors={state?.errors ?? []}
      />
      <Button text="Create Account" />
    </form>
  );
}
