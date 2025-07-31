"use client";

import { useState } from "react";
import { useLogin } from "../hook/useAuth";
import { Input } from "../../components/ui/input";

export default function LoginPage() {
  const { mutate, isPending } = useLogin();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate(form);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5]">
      <h1 className="text-3xl font-bold text-center text-[#0E1A35] mb-6">
        Login for Admin
      </h1>

      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            disabled={isPending}
            className="bg-[#0E1A35] text-white px-4 py-2 w-full rounded hover:bg-[#1f2e50] text-sm cursor-pointer"
          >
            {isPending ? "Loading..." : "Kirim"}
          </button>
        </form>
      </div>
    </div>
  );
}
