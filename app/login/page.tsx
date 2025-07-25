import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] ">
      <h1 className="text-3xl font-bold text-center text-[#0E1A35] mb-6">
        Login for Admin
      </h1>

      <div className="w-full max-w-md bg-white p-6 rounded shadow-md">
        <form className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded text-sm"
          />
          <Input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded text-sm"
          />
          <button
            type="submit"
            className="bg-[#0E1A35] text-white px-4 py-2 w-full rounded hover:bg-[#1f2e50] text-sm"
          >
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
}
