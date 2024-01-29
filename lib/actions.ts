"use server"
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export const createPrompt = async (post: ICreatePrompt) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/prompt/new`, {
    method: "POST",
    body: JSON.stringify(post)
  })
  if (res.ok) {
    revalidateTag("promptCollection")
    redirect("/");
  }
  return res.ok;
}

export const updatePrompt = async (prompt: IPrompt) => {
  if (!prompt || !prompt._id) return false;
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/prompt/${prompt._id}`, {
    method: "PATCH",
    body: JSON.stringify({prompt:prompt.prompt, tag:prompt.tag})
  })
  if (res.ok) {
    revalidateTag("promptCollection")
    redirect("/")
  }
  return res.ok;
}

export const deletePrompt = async (values: IDeletePrompt) => {
  if (!values._id || !values.userId) return false;
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/prompt/${values._id}`, {
    method: "DELETE",
    body: JSON.stringify({ _id:values._id })
  })
  if (res.ok) {
    revalidateTag("promptCollection")
  } 
  return res.ok;
} 