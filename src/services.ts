"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const instance = axios.create({
  headers: { Authorization: `Bearer ${cookies().get("access_token")?.value}` },
});

export async function createTodo(values: {
  title: string;
  description: string;
}) {
  const url = `${process.env.API_URI}/todo`;

  await instance.post(url, values);

  redirect("/todos");
}

export async function getTodos() {
  const url = `${process.env.API_URI}/todo`;

  const res = await instance.get(url);

  return res.data.data;
}

export async function getTodoById(id: string) {
  const url = `${process.env.API_URI}/todo/${id}`;

  const res = await instance.get(url);

  return res.data.data;
}

export async function updateTodoById(
  id: string,
  values: {
    title: string;
    description: string;
  }
) {
  const url = `${process.env.API_URI}/todo/${id}`;

  await instance.patch(url, values);

  redirect("/todos");
}

export async function deleteTodoById(id: string) {
  const url = `${process.env.API_URI}/todo/${id}`;

  await instance.delete(url);

  redirect("/todos");
}
