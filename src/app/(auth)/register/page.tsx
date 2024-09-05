"use client";

import { required } from "@/formValidation";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Form, Field } from "react-final-form";

export default function Register() {
  const { push } = useRouter();
  const onSubmit = (values: { username: string; password: string }) => {
    axios.post("api/users", values).then(() => {
      push("/");
    });
  };

  return (
    <div className="p-5 rounded-[20px] bg-gray-700/50">
      <p className="text-3xl font-bold mb-3">Register</p>
      <Form
        onSubmit={onSubmit}
        initialValues={{}}
        render={({ handleSubmit, submitting, pristine, submitError }) => (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col ...">
              <div className="mb-3">
                <Field
                  name="username"
                  component="input"
                  type="text"
                  placeholder="username"
                  className="text-black p-1"
                  validate={required}
                />
              </div>
              <div className="mb-3">
                <Field
                  name="password"
                  component="input"
                  type="password"
                  placeholder="password"
                  className="text-black p-1"
                  validate={required}
                />
              </div>
              {submitError}
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
