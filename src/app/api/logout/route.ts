import { cookies } from "next/headers";

export async function POST() {
  cookies().delete("username");
  cookies().delete("access_token");

  return Response.json({ logout: true });
}
