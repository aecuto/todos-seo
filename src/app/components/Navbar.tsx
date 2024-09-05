"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { push } = useRouter();
  const logout = () => {
    axios.post("/api/logout").then(() => {
      push("/");
    });
  };
  return (
    <div className="flex mb-3">
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 p-2 rounded mr-3 "
        onClick={() => {
          logout();
        }}
      >
        Logout
      </button>
      <button
        type="button"
        className="bg-green-500 hover:bg-green-700 p-2 rounded mr-3 "
        onClick={() => {
          push("/todos/create");
        }}
      >
        Create
      </button>
    </div>
  );
}
