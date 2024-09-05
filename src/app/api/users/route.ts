import axios from "axios";

export async function POST(request: Request) {
  const url = `${process.env.API_URI}/users`;

  const body = await request.json();

  const res = await axios.post(url, body);

  return Response.json(res.data.data);
}
