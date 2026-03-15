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
import Box from "@mui/material/Box";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { LuCalendarSearch } from "react-icons/lu";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { HiUsers } from "react-icons/hi";
import { FaTicketAlt } from "react-icons/fa";
import { GiDiscussion } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
export default function CandidateSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const menu = [
    { name: "Dashboard", icon: <MdDashboard/> },
    { name: "Jobs", icon:<FaBriefcase />  },
    { name: "My Interviews", icon: <LuCalendarSearch /> },
    { name: "Coaching", icon: <BsPersonWorkspace /> },
    { name: "Resume Builder", icon: <FaFileAlt /> },
    { name: "Refer Your Friends", icon: <MdGroups /> },
    { name: "Mentoring", icon: <HiUsers/> },
    { name: "Mock Interview", icon: <GiDiscussion /> },
    { name: "Recruitment Events", icon: <FaTicketAlt /> },
  ];
 

  return (
    <div
      className={`h-screen bg-[#156ea5] text-white transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      } relative`}
    >   
     <Box
  sx={{
    display: "flex",
    flexDirection: "column",
    height: "100%",
    overflowY: "auto",
  }}
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
            className="flex items-center gap-4 px-6 py-3 hover:bg-orange-400 cursor-pointer"
          >
            {item.icon}
            {!collapsed && <span>{item.name}</span>}
          </li>
        ))}
      </ul>
      </Box>
    </div>
  );
}