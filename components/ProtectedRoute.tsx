"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("access-token");

      if (!token) {
        router.push("/login");
        return;
      }

      // Optional: Verify token dengan backend
      // fetch("/api/verify-token", {
      //   headers: { Authorization: `Bearer ${token}` }
      // })
      // .then(res => {
      //   if (!res.ok) throw new Error("Invalid token");
      //   setIsAuthenticated(true);
      // })
      // .catch(() => {
      //   localStorage.removeItem("access-token");
      //   router.push("/login");
      // })
      // .finally(() => setIsLoading(false));

      // Untuk sementara, langsung set authenticated jika ada token
      setIsAuthenticated(true);
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Memverifikasi autentikasi...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // Router akan redirect ke login
  }

  return <>{children}</>;
}
