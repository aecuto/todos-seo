"use client";

import { ITodo } from "@/services.type";
import {
  createTodo,
  deleteTodoById,
  getTodoById,
  updateTodoById,
} from "@/services";
import { useEffect, useState } from "react";
import { Form, Field } from "react-final-form";
import { required } from "@/formValidation";

export default function TodoForm({ params }: { params: { id: string } }) {
  const isCreate = params.id === "create";
  const [todo, setTodo] = useState<ITodo>();

  const onSubmit = async (values: { title: string; description: string }) => {
    if (isCreate) {
      createTodo(values);
    } else {
      updateTodoById(params.id, values);
    }
  };

  useEffect(() => {
    getTodoById(params.id).then((res) => setTodo(res));
  }, [params.id]);

  const onDelete = () => {
    deleteTodoById(params.id);
  };

  return (
    <div className="p-5 rounded-[20px] bg-gray-700/50">
      <p className="text-3xl font-bold mb-3">{isCreate ? "Create" : "Edit"}</p>
      <Form
        onSubmit={onSubmit}
        initialValues={{ ...todo }}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col ...">
              <div className="mb-3">
                <Field
                  name="title"
                  component="input"
                  type="text"
                  placeholder="title"
                  className="text-black p-1"
                  validate={required}
                />
              </div>
              <div className="mb-3">
                <Field
                  name="description"
                  component="input"
                  type="text"
                  placeholder="description"
                  className="text-black p-1"
                  validate={required}
                />
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  disabled={submitting || pristine}
                  className="bg-blue-500 hover:bg-blue-700 p-2 rounded"
                >
                  Submit
                </button>

                {!isCreate ? (
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 p-2 rounded ml-3"
                    onClick={() => onDelete()}
                  >
                    Delete
                  </button>
                ) : null}
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
}
