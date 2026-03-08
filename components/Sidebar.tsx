'use client'
import { ChevronFirst } from "lucide-react";
import { Typography } from "@mui/material"
import { MdDashboard } from "react-icons/md";
import WorkIcon from "@mui/icons-material/Work";
import { MdEvent } from "react-icons/md";
import { MdPerson } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import React from "react";
import {
FaThLarge,
FaBriefcase,
FaUserTie,
FaChalkboardTeacher,
FaFileAlt,
FaUserFriends,
FaHandsHelping,
FaComments,
FaCalendarAlt
} from "react-icons/fa";
import Link from "next/link"
import { IoChevronBack, IoChevronForward } from "react-icons/io5";


export default function Sidebar() {

  return (


    <main className="min-h-20 bg-blue-700 flex items-center justify-Left px-4 gap-10">
    <div className="h-[900px] w-[250px]  bg-blue p-3 text-Black flex items-Top  justify-between mb-6 gap-6">
     
      
      <ul className="space-y-4">
        <div className="bg-radius p-2 rounded">
        
        <Typography variant="h6" className="text-white  mb-2 flex items-center gap-2">
          <MdDashboard />Dashboard 
         
        </Typography> 
        
        </div>
        <div className="bg-radius p-2 rounded">
          <Typography variant="h6" className="text-white  mb-2 flex items-center gap-2">
            <WorkIcon />Jobs
          </Typography>
        </div>
        <div className="bg-radius p-2 rounded">
          <Typography variant="h6" className="text-white  mb-2 flex items-center gap-2">
            <FaBriefcase />My Interviews
          </Typography>
        </div>
        <div className="bg-radius p-2 rounded">
          <Typography variant="h6" className="text-white  mb-2 flex items-center gap-2">
            <FaChalkboardTeacher />Coaching
          </Typography>
        </div>
        <div className="bg-radius p-2 rounded">
          <Typography variant="h6" className="text-white  mb-2 flex items-center gap-2">
            <FaFileAlt />Resume Builder
          </Typography>
        </div>
        <div className="bg-radius p-2 rounded">
          <Typography variant="h6" className="text-white  mb-2 flex items-center gap-2">
            <FaUserFriends />Refer Your Friends
          </Typography>
        </div>
         <div className="bg-radius p-2 rounded">
          <Typography variant="h6" className="text-white  mb-2 flex items-center gap-2">
            <FaComments />Mentoring
          </Typography>
        </div>

        <div className="bg-radius p-2 rounded">
          <Typography variant="h6" className="text-white  mb-2 flex items-center gap-2">
            <MdDescription />Mock Interview
          </Typography>
        </div>
        <div className="bg-radius p-2 rounded">
          <Typography variant="h6" className="text-white  mb-2 flex items-center gap-2">
            <MdEvent />Recruitment Events
          </Typography>
        </div>

      </ul>
     
    </div>
    </main>
  );
};