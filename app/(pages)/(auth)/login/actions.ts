"use server";
export async function login(prevState: any, formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    errors: ["wrong password", "password too short"],
  };
}
