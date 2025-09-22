"use client";

import { usePathname } from "next/navigation";
import Navbar from "../navbar/page"
import Footer from "../footer/page";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Pages where Navbar & Footer should be hidden
  const hiddenRoutes = ["/login", "/register"];
  const hideLayout = hiddenRoutes.includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      {children}
      {!hideLayout && <Footer />}
    </>
  );
}
