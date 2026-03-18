"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Card, CardContent, Typography, Button, Menu, MenuItem, IconButton } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaUser, FaCircleArrowRight } from "react-icons/fa6";
import { IoCaretDownOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { ArrowRightAltRounded } from "@mui/icons-material";
import { ArrowRight } from "lucide-react";

type Slide = {
  title: string;
  text: string;
  sub: string;
  img: string;
  button: string;
  label?: string;
};

const DashboardPage: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [index, setIndex] = useState(0);
  const [candidateName, setCandidateName] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const storedUser = localStorage.getItem("candidateUser");
      if (!storedUser) {
        return;
      }

      const user = JSON.parse(storedUser) as {
        firstName?: string;
        lastName?: string;
        name?: string;
        email?: string;
      };

      const fullName = [user.firstName, user.lastName]
        .filter((part) => !!part && part.trim().length > 0)
        .join(" ")
        .trim();

      if (user.name && user.name.trim().length > 0) {
        setCandidateName(user.name.trim());
      } else if (fullName) {
        setCandidateName(fullName);
      } else if (user.email) {
        setCandidateName(user.email);
      }
    } catch (error) {
      console.error("Failed to load candidate user from storage", error);
    }
  }, []);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % slides.length);
  }, 3000); //

  return () => clearInterval(interval);
}, []);
  const handleClose = () => setAnchorEl(null);
  // SLIDER STATE 
  const slides: Slide[] = [
    {
      title: "Mentoring",
      text: "Level up your tech stack",
      sub: "Connect with a mentor now.",
      img: "/Mentoring.webp",
      button: "Find Mentor",
    },
    {
      title: "Coaching",
      text: "Feeling Stuck",
      sub: "A coach can guide your next move.",
      img: "/Coaching.webp",
      button: "Book Coach",
    },
    {
      title: "Mock Interview",
      text: "Practice Interview",
      sub: "Boost your confidence before interviews.",
      img: "/Mockinterview.webp",
      button: "Start Mock",
    },
  ];
    const next = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[index];

  return (

    <Box sx={{ p: 3, background: "#f5f5f5", minHeight: "100vh", mt: "80px" }}>

      {/* Welcome */}
      <Typography variant="h5" fontWeight="600" mb={3}>
        Welcome {candidateName ?? "Candidate"}!
      </Typography>
      {/* Profile Section */}
      <Box display="flex" alignItems="center" gap={2} mb={4}>
        <Typography color="black">
          <FaUser style={{ marginRight: 8 }} />
          Your Profile is 71% completed. To get accurate recommendations, update your profile
          <span
            style={{
              color: "#1976d2",
              cursor: "pointer",
              marginLeft: 5,
              textDecoration: "underline",
            }}
          >
           Here
          </span>
        </Typography>
        <span style={{ marginLeft: 250 }}> </span>
        {/* Mark Status Button */}
        <Box
          onClick={handleClick}
          sx={{
            width: 200,
            height: 45,
            borderRadius: "12px",
            background: "linear-gradient(to top, rgb(0, 113, 182),rgb(0,113,182))",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            gap: 1,
          }}
        >
          <Typography>Mark your status</Typography>
          <IoCaretDownOutline />
        </Box>
        {/* Dropdown Menu */}
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Looking For a Job </MenuItem>
          <MenuItem onClick={handleClose}>Casually Looking for Job</MenuItem>
          <MenuItem onClick={handleClose}>Not Looking for Job</MenuItem>
        </Menu>
      </Box>
      {/* Left Section */}
      <main className="min-h-20 bg-radius flex items-center justify-Left px-4 gap-10">
        <div className="h-[125px] w-[720px] rounded-xl bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-300 p-4 text-white flex items-center justify-between mb-6">
          <div>
            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
              Looking for your next opportunity?
            </Typography>
            <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
              Search and discover roles that fit your interests and continue your journey.
            </Typography>
          </div>
          <div className="text-4xl cursor-pointer -rotate-45 transition-transform hover:scale-110">
            <FaCircleArrowRight />
          </div>
        </div>
        {/* Right Section */}
        <div className="flex items-center gap-10">
          <div className="hidden lg:flex items-center justify-center border-radius">
            <Image src="/certificate.png" width={200} height={200} alt="certificate" />
          </div>
          <div >
            <Image src="/badge.png" width={20} height={20} alt="badge" />
            <Typography sx={{ fontSize: 12, fontWeight: 600, }}>  Get Certified by Curatal!</Typography>
            <Typography sx={{ fontSize: 12, fontWeight: 400 }}>Complete your interview to get certified</Typography>
            <Box
              sx={{
                width: 200,
                height: 45,
                borderRadius: "12px",
                background: "linear-gradient(to top, rgb(0, 113, 182),rgb(0,113,182))",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                gap: 1
              }}
            >
              <Typography color="White"> Get Certified </Typography> <FaArrowRight />
            </Box>
          </div>
        </div>
      </main>
      {/* Mentoring Slider */}
      <div className="flex items-center gap-10">
         <main style={{ padding: 40, maxWidth: 400 }}>

      <div
  style={{
    position: "relative",
    width: "360px",       
    height: "320px",
    minWidth: "360px",     
    borderRadius: "12px",
    overflow: "hidden",
    color: "white",
    backgroundImage: `url(${slide.img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    flexShrink: 0          
  }}
>

        {/* Dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "transperent",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            padding: "20px",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >

          {/* Content */}
  <div style={{ position: "relative", padding: "20px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
    {/* Header */}
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontWeight: 600, color: "#2286CA" }}>{slide.title}</span>
      {slide.label && (
        <span style={{ fontSize: 12, display: "flex", alignItems: "center", gap: 6, color: "#00B515" }}>
          <span style={{ width: 12, height: 12, background: "#B9FFB0", border: "2px solid #00B515", borderRadius: "50%" }} />
          {slide.label}
        </span>
      )}
    </div>

    {/* Body */}
    <div>
      <div style={{ fontWeight: 600, color: "#000000" }}>{slide.text}</div>
      <div style={{ fontSize: 14, color: "#000000" }}>{slide.sub}</div>
    </div>
  </div>

          {/* Button */}
          <button
            style={{
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              background: "#1c7ed6",
              color: "white",
              cursor: "pointer",
            }}
          >
            {slide.button} →
          </button>
        </div>

        {/* Arrows */}
        <button
    onClick={prev}
    style={{
      position: "absolute",
      top: "50%",
      left: 10,
      background: "rgba(0,255,255,255)",
      color: "white",
      borderRadius: "50%",
      padding: "8px",
      cursor: "pointer",
    }}
  >
    <FaChevronLeft />
  </button>

  {/* Right Arrow */}
  <button
    onClick={next}
    style={{
      position: "absolute",
      top: "50%",
      right: 10,

      background: "rgba(0,255,255,255)",
      color: "white",
      borderRadius: "50%",
      padding: "8px",
      cursor: "pointer",
    }}
  >
    <FaChevronRight />
  </button>

      </div>

    </main>
    {/*Skill Card*/}
       <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-5 MuiGrid-grid-lg-5 flex justify-center items-center">
  <div className="h-[300px] max-w-[500px] border border-card rounded-lg bg-white shadow-md overflow-hidden p-6 flex items-center justify-center">
    <Image
      src="/skillcard.png"
      alt="Skills"
      width={400}
      height={200}   
      className="object-contain rounded-lg"
    />
  </div>
</div>
        {/* Salary Predictor Card */}
      <Card
  sx={{
    maxWidth: 300,
    mx: "auto",
    borderRadius: 3,
    boxShadow: 3,
    p: 2,
    backgroundColor: "#fff",
  }}
>
  <CardContent>
    {/* Header */}
    <Typography variant="h6" fontWeight={600} color="primary">
      Salary Predictor
    </Typography>

    {/* Current Salary */}
    <Typography variant="body2" mt={1} color="text.primary">
      Current Salary: <b>₹15,000</b>
    </Typography>

    {/* Salary Meter */}
    <Box display="flex" justifyContent="center" mt={3} mb={1}>
      <Box
        sx={{
          width: 180,
          height: 90,
          borderTopLeftRadius: 180,
          borderTopRightRadius: 180,
          background: "linear-gradient(to right, #ff4d4f, #fa8c16, #fadb14, #52c41a)",
        }}
      />
    </Box>

    {/* Min / Max labels */}
    <Box display="flex" justifyContent="space-between" px={1}>
      <Typography variant="caption" color="text.secondary">
        Min
      </Typography>
      <Typography variant="caption" color="text.secondary">
        Max
      </Typography>
    </Box>

    {/* Action Button */}
    <Button
      variant="contained"
      fullWidth
      sx={{
        mt: 3,
        borderRadius: 2,
        background: "linear-gradient(to right, #0071B6, #00aaff)",
        "&:hover": {
          background: "linear-gradient(to right, #005f96, #0088cc)",
        },
      }}
    >
       Salary Predictor
    </Button>
  </CardContent>
</Card>
</div>
      {/* Left Section */}
      <main className="min-h-20 bg-radius flex items-center justify-Left px-4 gap-10">
        <div className="h-[200px] w-[880px] rounded-xl bg-white p-3 text-Black flex items-Top  justify-between mb-6 gap-6">
          <div>
            <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
              Recommended Jobs For You:
              <span
                style={{
                  color: "#1976d2",
                  cursor: "pointer",
                  marginLeft: 540,
                  textDecoration: "underline",
                  gap: 8
                }}
              >
               View ALL
              </span>
            </Typography>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col gap-4">
          <div
            style={{
              width: 200,
              height: 45,
              borderRadius: "12px",
              background: "linear-gradient(to top, rgb(0,113,182), rgb(0,113,182))",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              gap: "8px",
            }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              Interview Tips
              <Image src="/new.png" width={20} height={20} alt="new" />
            </span>
          </div>
          <div
            style={{
              width: 200,
              height: 45,
              borderRadius: "12px",
              background: "linear-gradient(to top, rgb(0,113,182), rgb(0,113,182))",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              gap: "8px",
            }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              Upskilling
              <Image src="/new.png" width={20} height={20} alt="new" />
            </span>
          </div>
          <div
            style={{
              width: 200,
              height: 45,
              borderRadius: "12px",
              background: "linear-gradient(to top, rgb(0,113,182), rgb(0,113,182))",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              gap: "8px",
            }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              Free Resources
              <Image src="/new.png" width={20} height={20} alt="new" />
            </span>
          </div>
        </div>
      </main>
    </Box>

  );
};
export default DashboardPage;

 