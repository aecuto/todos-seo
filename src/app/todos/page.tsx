import Navbar from "@/app/components/Navbar";
import { ITodo } from "@/app/services.type";
import { getTodos } from "@/services";
import Link from "next/link";

export default async function TodoTable() {
  const todos = await getTodos();

  return (
    <>
      <Navbar />
      <div className="p-5 rounded-[20px] bg-gray-700/50">
        <p className="text-3xl font-bold mb-3">Todos</p>
        <table className="table-fixed w-full">
          <thead>
            <tr>
              <th className="bg-gray-700 p-2">Title</th>
              <th className="bg-gray-700 p-2">Description</th>
              <th className="bg-gray-700 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo: ITodo) => (
              <tr key={todo.id}>
                <td className="bg-gray-700/50 p-2 text-center">{todo.title}</td>
                <td className="bg-gray-700/50 p-2 text-center">
                  {todo.description}
                </td>
                <td className="bg-gray-700/50 p-2 text-center text-blue-500 hover:text-blue-500/50">
                  <Link href={`/todos/${todo.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
