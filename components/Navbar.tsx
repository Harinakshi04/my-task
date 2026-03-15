"use client";
import React from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Typography } from "@mui/material";
import curatalLogo from "../public/curatalLogo.jpg";
import chalcuratal from "../public/chalcuratal.jpg";
const BaseNavbarMenu = [
  { id: 1, title: "Find Talent", path: "/" },
  {
    id: 2,
    title: "Solutions",
    dropdown: "mega",
    sections: [
      {
        heading: "Database",
        items: [
          " Pre-Interviewed Candidates",
          "AI-Interviewed Candidates",
          "Un-Interviewed Candidates",
        ],
      },
      {
        heading: "Assessment",
        items: ["Video Interviews", "Coding Assessment", "AI Assessment"],
      },
      {
        heading: "Events",
        items: [
          "Diversity Hiring",
          "Recruiting Events",
          "Early Joiner Events",
          "Women in Digital",
        ],
      },
      {
        heading: "Engage",
        items: ["Hackathon", "Talent Pipe", "Club 50"],
      },
    ],
  },
  {
    id: 3,
    title: "Affiliates",
    dropdown: "simple",
    items: [
      "Interviewers",
      "Mentors",
      "Resume Writers",
      "Coaching",
      "Upskilling",
      "Partners",
    ],
  },
  {
    id: 4,
    title: "Sign In",
    dropdown: "simple",
    items: [
      "Employer",
      "Candidate",
      "Interviewers",
      "Curatal Users",
      "Coach",
      "Mentor",
    ],
  },
];
const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  // Toggle CTA between candidates and employers based on current route
  const isCandidateRoute = pathname?.includes("/candidate");
  const NavbarMenu = [
    ...BaseNavbarMenu,
    {
      id: 5,
      title: isCandidateRoute ? "For Employers" : "For Candidates",
      path: isCandidateRoute
        ? "/auth/recruiter/account"
        : "/auth/candidate/account",
    },
  ];
  return (
    <nav className="w-full bg-white sticky top-0 z-50 drop-shadow-rgba(0, 0, 0, 0.15) width-1400px height-100px left-0px top-0px">
      <div className="max-w-7xl mx-auto px-6 py-4  flex items-center justify-between width-64px height-18px top-41px left-519px font-plus jakarta Sans weight-600 style-SemiBold size-14px lineheight-100% letterspacing-0% color-rgba(16, 91, 142, 1)">
        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <Image
            src={curatalLogo}
            alt="Curatal Logo"
            width={193}
            height={54}
            className="h-10 object-contain 
            top-23px left-100px"
          />
        </div>
        {/* Menu */}
        <ul className="hidden md:flex items-center p-4 justify-between gap-6 text-blue-900 font-medium relative">
          {NavbarMenu.map((menu) => (
            <li
              key={menu.id}
              className="relative group cursor-pointer"
              onClick={menu.path ? () => router.push(menu.path) : undefined}
            >
              <span className="hover:text-blue-600 transition">
                {menu.title}
              </span>
              {/* SIMPLE DROPDOWN */}
              {menu.dropdown === "simple" && menu.items && (
                <div className="absolute left-0 top-10 hidden group-hover:block bg-white shadow-lg rounded-lg py-3 w-56 z-50">
                  <ul className="text-sm text-gray-700">
                    {menu.items.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
                      >
                        <span className="text-black">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* MEGA DROPDOWN */}
              {menu.dropdown === "mega" && menu.sections && (
                <div className="absolute left-[-200px] top-10 hidden group-hover:block bg-white shadow-xl rounded-xl p-6 w-[700px] z-50">
                  <div className="grid grid-cols-4 gap-6">
                    {menu.sections.map((section, index) => (
                      <div key={index}>
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{
                            fontWeight: 'bold',
                            color: 'blue.900',
                            marginBottom: 3,
                          }}
                        >
                          {section.heading}
                        </Typography>
                        <ul className="text-sm text-gray-700 space-y-2">
                          {section.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="hover:text-blue-600 cursor-pointer"
                            >
                              <span className="text-black">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        {/* Right Section */}
        <div className="flex items-center gap-6 top-23 left-1156px width-143px height-54px">
          <Image
            src={chalcuratal}
            alt="Chal Curatal"
            className="h-10 object-contain"
          />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;