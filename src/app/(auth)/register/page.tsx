"use client";

import axios from "axios";
import { Form, Field } from "react-final-form";

export default function Register() {
  const onSubmit = (values: { username: string; password: string }) => {
    axios.post("api/users", values);
  };

  return (
    <div className="p-5 rounded-[20px] bg-gray-700/50">
      <p className="text-3xl font-bold mb-3">Register</p>
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        render={({ handleSubmit, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col ...">
              <div className="mb-3">
                <Field
                  name="username"
                  component="input"
                  type="text"
                  placeholder="username"
                  className="text-black p-1"
                />
              </div>
              <div className="mb-3">
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder="password"
                  className="text-black p-1"
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
              </div>
            </div>
          </form>
        )}
      />
    </div>
  );
}
