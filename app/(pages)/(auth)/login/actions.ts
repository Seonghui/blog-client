"use server";

import { instance } from "@/app/apis";
import getSession from "@/app/lib/session";
import axios from "axios";
import { redirect } from "next/navigation";

export async function login(prevState: any, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  let redirectPath: string | null = null
  let errorMessage = "알 수 없는 오류가 발생했습니다.";

  try {
    const response = await instance.post('/users/login', data);
    const session = await getSession();
    session.data = response.data;
    await session.save();
    redirectPath = '/dashboard'
  } catch (err) {
    console.error(err);
    if (axios.isAxiosError(err)) {
      errorMessage = err?.response?.data.message;
    } else if (err instanceof Error) {
      errorMessage = err.message;
    }
    return {
      error: errorMessage
    };
  } finally {
    if (redirectPath) {
      redirect("/dashboard");
    }
  }
}
