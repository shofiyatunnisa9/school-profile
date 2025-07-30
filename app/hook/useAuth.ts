import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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

      return json;
    },

    onSuccess: (data) => {
      localStorage.setItem("access-token", data.token);
      toast.success("Login berhasil!");
      router.push("/admin/dashboard");
    },

    onError: (error: unknown) => {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("Terjadi kesalahan saat login");
      }
    },
  });

  return { mutate, isPending };
}

export function useLogout() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("access-token");
    toast.success("Logout berhasil!");
    router.push("/login");
  };

  return { logout };
}
