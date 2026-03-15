"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Box, Card, CardContent, Typography, Button, Menu, MenuItem, IconButton } from "@mui/material";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaUser, FaCircleArrowRight } from "react-icons/fa6";
import { IoCaretDownOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";


const DashboardPage: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);
  // SLIDER STATE 
 const [index, setIndex] = useState(0);
  const slides = [
    {
      image: "/Mentoring.webp",
      title: "Level up your tech stack",
      subtitle: "Connect with a mentor now.",
    },
    {
     image: "/Coaching.webp",
      title: "Get career guidance",
      subtitle: "Talk to industry experts.",
    },
    {
      image: "/Mock interiview.webp",
      title: "Mock Interviews",
      subtitle: "Practice with experienced mentors.",
    },
  ];
    const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };
  return (
    
    <Box sx={{ p: 3, background: "#f5f5f5", minHeight: "100vh" }}>
  
      {/* Welcome */}
      <Typography variant="h5" fontWeight="600" mb={3}>
        Welcome Harinakshi Naik!
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
        <div className="hidden lg:flex items-center justify-center">
          <Card sx={{ borderRadius: 3 }}>
            <CardContent>
              <Typography fontWeight={600} color="primary">
                Mentoring
              </Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt={2}
              >
                <IconButton onClick={prevSlide}>
                  <FaChevronLeft />
                </IconButton>
                <Box textAlign="center">
                  <Image
                    src={slides[index].image}
                    width={120}
                    height={120}
                    alt="mentor"
                  />
                  <Typography mt={1}>
                    {slides[index].title}
                  </Typography>
                  <Typography fontSize={14} color="text.secondary">
                    {slides[index].subtitle}
                  </Typography>
                </Box>
                <IconButton onClick={nextSlide}>
                  <FaChevronRight />
                </IconButton>
              </Box>
              <Button variant="contained" sx={{ mt: 2 }}>
                Find Mentor
              </Button>
            </CardContent>
          </Card>
        </div>
        {/* Skills Card */}
        <div className="hidden lg:flex p-10 h-500px w-900px items-center gap-4 justify-center p-8">
          <Card>
            <CardContent sx={{ borderRadius: 3 }}>
              <Typography variant="h6">
                Skills
              </Typography>
              <Box mt={2}>
                <Typography variant="body2">C Data Types</Typography>
                <Box sx={{ height: 8, background: "#e0e0e0", borderRadius: 5 }}>
                  <Box sx={{ width: "100%", height: 8, background: "#1976d2", borderRadius: 5 }} />
                </Box>
                <Typography variant="caption" color="primary">
                  Expert
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="body2">Apache</Typography>
                <Box sx={{ height: 8, background: "#e0e0e0", borderRadius: 5 }}>
                  <Box sx={{ width: "80%", height: 8, background: "#1976d2", borderRadius: 5 }} />
                </Box>
                <Typography variant="caption" color="primary">
                  Master
                </Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="body2">Adobe Photoshop</Typography>
                <Box sx={{ height: 8, background: "#e0e0e0", borderRadius: 5 }}>
                  <Box sx={{ width: "85%", height: 8, background: "#1976d2", boderRadius: 5 }} />
                </Box>
                <Typography variant="caption" color="primary">
                  Expert
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </div>
        {/* Salary Predictor Card */}
        <Card>
          <CardContent>
            <Typography variant="h6">
              Salary Predictor
            </Typography>
            <Typography variant="body2" mt={1}>
              Current Salary: <b>15000</b>
            </Typography>
            <Box display="flex" justifyContent="center" mt={3}>
              <Box
                sx={{
                  width: 160,
                  height: 80,
                  borderTopLeftRadius: 160,
                  borderTopRightRadius: 160,
                  background:
                    "linear-gradient(to right, red, orange, yellow, green)",
                }}
              />
            </Box>
            <Box display="flex" justifyContent="space-between" mt={1}>
              <Typography variant="caption">Min</Typography>
              <Typography variant="caption">Max</Typography>
            </Box>
            <Button variant="contained" sx={{ mt: 2 }}>
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

