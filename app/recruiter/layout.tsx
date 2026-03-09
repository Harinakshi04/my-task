"use client";
import React, { ReactNode } from "react";
import Sidebar from "@/components/recruiter/Sidebar";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: any) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}