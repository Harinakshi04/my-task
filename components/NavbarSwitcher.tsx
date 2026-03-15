"use client";
 
import { usePathname } from "next/navigation";

import Navbar from "./Navbar";

import TopNavbar from "./Navbar2";
 
export default function NavbarSwitcher() {

  const pathname = usePathname();
 
  const authRoutes = [

    "/auth/recruiter/account",

    "/auth/candidate/account",
    "/auth/recruiter/login",
    "/auth/recruiter/signup",
    "/auth/candidate/login",
    "/auth/candidate/signup",
    "/"

  ];
 
  const isAuthPage = authRoutes.includes(pathname);
 
  return isAuthPage ? <Navbar />: <TopNavbar />  ;

}
 