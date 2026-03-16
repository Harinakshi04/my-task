"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterSwitcher() {
  const pathname = usePathname();

  const authRoutes = [
    "/auth/recruiter/account",
    "/auth/candidate/account",
    "/auth/recruiter/login",
    "/auth/recruiter/signup",
    "/auth/candidate/login",
    "/auth/candidate/signup",
    "/",
  ];

  const isAuthPage = authRoutes.includes(pathname);

  return isAuthPage ? <Footer /> : null;
}