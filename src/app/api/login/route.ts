import axios from "axios";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const url = `${process.env.API_URI}/auth/login`;

  const body = await request.json();

  const res = await axios.post(url, body);

  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  cookies().set("username", res.data.username);
  cookies().set("access_token", res.data.access_token, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: "lax",
    path: "/",
  });

  return Response.json({ login: true });
}
