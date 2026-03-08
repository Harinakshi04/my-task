"use client";

import { useState } from "react";
import {
  FaBriefcase,
  FaUsers,
  FaUserTie,
  FaClipboardList,
  FaBell,
} from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    { name: "Dashboard", icon: <FaClipboardList /> },
    { name: "Create Job", icon: <FaBriefcase /> },
    { name: "Jobs", icon: <FaUsers /> },
    { name: "Candidate Search", icon: <FaUserTie /> },
    { name: "Notifications", icon: <FaBell /> },
  ];

  return (
    <div
      className={`h-screen bg-[#156ea5] text-white transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      } relative`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-4 top-20 bg-white text-black w-8 h-8 rounded-full flex items-center justify-center shadow"
      >
        {collapsed ? <HiChevronRight /> : <HiChevronLeft />}
      </button>

      {/* Logo */}
      <div className="p-6 text-lg font-bold">
        {!collapsed && "CURATAL"}
      </div>

      {/* Menu */}
      <ul className="mt-8 space-y-4">
        {menu.map((item, i) => (
          <li
            key={i}
            className="flex items-center gap-4 px-6 py-3 hover:bg-blue-600 cursor-pointer"
          >
            {item.icon}
            {!collapsed && <span>{item.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};