"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import TopHeader from "./topHeader";
import Navbar from "@/app/component/navbar";
import Footer from "./footer";
import { usePathname } from "next/navigation";
import { Toaster } from "sonner";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  return (
    <QueryClientProvider client={queryClient}>
      {!isAdmin && <TopHeader />}
      {!isAdmin && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!isAdmin && <Footer />}
      <Toaster />
    </QueryClientProvider>
  );
}
