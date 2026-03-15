"use client";

import { useState } from "react";
import {
  FaBriefcase,
  FaTicketAlt,
  FaUserTie,
  FaClipboardList,
  FaBell,
  FaToolbox
} from "react-icons/fa";
import { RiUserSearchFill } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { GrTree } from "react-icons/gr";
import { IoDocuments } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { LuFileBadge2 } from "react-icons/lu";
import Box from "@mui/material/Box";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
   const menu = [
    { name: "Create Job", icon: <FaClipboardList /> },
    { name: "Jobs", icon: <FaBriefcase /> },
    { name: "Candidate Search", icon: <RiUserSearchFill /> },
    { name: "Account Management", icon:<GrUserAdmin /> },
    { name: "Netting", icon: <GrTree /> },
    { name: "Reports", icon: <IoDocuments /> },
    { name: "Banner", icon:<FaBell/>  },
    { name: "Events", icon: <FaTicketAlt /> },
    { name: "Tools", icon: <FaToolbox /> },
    { name: "Coach Management", icon: <MdManageAccounts /> },
    { name: "News Latter", icon: <IoNewspaperOutline /> },
    { name: "News Latter", icon: <LuFileBadge2 /> },
    { name: "Interviewer Subscription", icon: <FaUserTie /> },
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