"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";
import { Button } from "@/components/ui/button";
import { FaCheckCircle, FaUser, FaUserPlus } from "react-icons/fa";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { text } from "stream/consumers";
import LinkedinIcon from "@/public/Linkedin.jpg";
import GoogleIcon from "@/public/google.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import CuratalLogo from "@/public/curatalLogo.jpg";
import { useEffect } from "react";

  const features: string[] = [
    "Database offers pre-interviewed and AI-assessed candidates",
    "Assessment includes video, coding, and AI-powered evaluations",
    "Events focus on diversity, women empowerment, and immediate joiners",
    "Engage delivers top-rated candidates through impactful hackathons",
  ];

export default function RecruiterLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: any) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/auth/recruiter/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message);
    }

    localStorage.setItem("token", data.token);

    alert("Login successful");

    router.push("/recruiter/dashboard");

  } catch (error: any) {
    console.error("Login Error:", error.message);
    alert(error.message);
  }
};
  return (
    

      <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-7xl bg-[#EBF7FF] rounded-2xl p-6 flex flex-col lg:flex-row gap-10">

        {/* LEFT PANEL */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="h-[580px] w-[520px] rounded-xl bg-gradient-to-t  from-[#0071B6] to-[#00B2E9] p-4 text-white flex flex-col justify-center">

            <Typography
              component="div"
              className="typing typing-1 text-center"
              sx={{ fontSize: 27, fontWeight: 800 }}
            >
              Create. Harness.
            </Typography>

            <Typography
              component="div"
              className="typing typing-2 text-center"
              sx={{ fontSize: 27, fontWeight: 800 }}
            >
              Achieve. Lead.
            </Typography>

            <Typography
              className="slide-up  mt-4  gap-4 p-3 align-left-right"
              sx={{ fontSize: 20, fontWeight: 550 }}
            >
              CHAL Curatal to streamline your tech hiring and get top-tier talent fast.
            </Typography>

            <div className="mt-6 space-y-3">
              {features.map((item, index) => (
                <div
                  key={item}
                  className="slide-up flex items-start gap-3"
                  style={{ animationDelay: `${1.6 + index * 0.2}s` }}
                >
                  <Image
                    src="/checkmark.png"
                    alt="check"
                    width={32}
                    height={32}
                  />
                  <Typography sx={{ fontSize: 16 }}>
                    {item}
                  </Typography>
                </div>
              ))}
            </div>

            <Typography
              className="slide-up mt-6 text-center"
              style={{ animationDelay: "3s" }}
              sx={{ fontSize: 18, fontWeight: 500 }}
            >
              Start your journey today and watch your team thrive!
            </Typography>
          </div>
        </div>
          {/* Right panel*/}
        <div className="flex flex-1 flex-col justify-center gap-4 p-4"> 
          <Typography align="center" sx={{ fontSize: 28, fontWeight: 700 }}>
         Welcome Back!
          </Typography>
          <Typography align="center" sx={{ fontSize: 18, fontWeight: 500 }}>
            For Employer
          </Typography>
          <Typography align="center" sx={{ fontSize: 12, fontWeight: 500 }}>
            Your next great hire is just a login away!  
          </Typography>
          <TextField
            variant="outlined"
              placeholder="Email ID"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              ),
            }}
          />
              <TextField
             fullWidth
             variant="outlined"
             placeholder="Password"
             type={showPassword ? "text" : "password"}
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             autoComplete="new-password" 
             InputProps={{
             endAdornment: (
             <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword((prev) => !prev)}
              edge="end"
              aria-label="toggle password visibility"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
          <Typography  align="right"
            sx={{ fontSize: 14, fontWeight: 500, color: "blue", cursor: "pointer" }}
            onClick={() => router.push("/auth/recruiter/forgotpassword")}
          >
            Forgot Password?
          </Typography>
          <button
            onClick={handleLogin}
            disabled={loading}
            className="bg-[#0071B6] text-white px-6 py-3 text-base rounded-md hover:opacity-90 w-full disabled:bg-gray-400"
          >
            {loading ? "Signing In..." : "Sign In"}
          
    
          </button>

          <Typography align="center" sx={{ fontSize: 14, fontWeight: 500 }}>
            Not On Curatal? <span className="text-blue-600 cursor-pointer" onClick={() => router.push("/auth/recruiter/signup")}> Sign Up!</span>
          </Typography>
        </div>
      </div>
      </main> 
  );
};
