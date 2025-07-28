import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner"

interface loginSchemaDTO {
  email: string;
  password: string;
}

export function useLogin() {
  const router = useRouter();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: loginSchemaDTO) => {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message || "Login gagal");
      }

      return json.token;
    },

    onSuccess: (token) => {
      localStorage.setItem("access-token", token);
      toast.success("Login berhasil!");
      router.push("/admin/dashboard");
    },

    onError: (error: any) => {
      toast.error(error.message || "Terjadi kesalahan saat login");
    },
  });

  return { mutate, isPending };
}
