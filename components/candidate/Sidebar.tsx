'use client';

import { useState } from "react";
import {
  FaHome,
  FaClipboardList,
  FaBriefcase,
  FaUserGraduate,
  FaFileAlt,
  FaComments,
} from "react-icons/fa";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function CandidateSidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const menu = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Jobs", icon: <FaBriefcase /> },
    { name: "My Interviews", icon: <FaClipboardList /> },
    { name: "Coaching", icon: <FaUserGraduate /> },
    { name: "Resume Builder", icon: <FaFileAlt /> },
    { name: "Refer Your Friends", icon: <FaComments /> },
    { name: "Mentoring", icon: <FaComments /> },
    { name: "Mock Interview", icon: <FaComments /> },
    { name: "Recruitment Events", icon: <FaComments /> },
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