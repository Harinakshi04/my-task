"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FaPhone, FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";

export default function RecruiterSignup() {

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
  firstName: "",
  lastName: "",
  companyName: "",
  email: "",
  phone: "",
  password: "",
  agree: false
});
  const handleChange = (e: any) => {
  const { name, value, type, checked } = e.target;

  setForm({
    ...form,
    [name]: type === "checkbox" ? checked : value
  });
};

  const handleSubmit = async () => {

    setLoading(true);

    const res = await fetch("/api/auth/recruiter/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await res.json();

    setLoading(false);

    if (res.ok) {
      alert("Signup Successful");
      router.push("/auth/recruiter/login");
    } else {
      alert(data.message);
    }
  };


  const features: string[] = [
    "Database offers pre-interviewed and AI-assessed candidates",
    "Assessment includes video, coding, and AI-powered evaluations",
    "Events focus on diversity, women empowerment, and immediate joiners",
    "Engage delivers top-rated candidates through impactful hackathons",
  ];


  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-7xl bg-[#EBF7FF] rounded-2xl p-6 flex flex-col lg:flex-row gap-10">

        {/* LEFT PANEL */}
        <div className="flex flex-1 flex-col justify-center gap-4 p-10 justify-items-center ">
         <div className="h-[520px] w-[520px] rounded-xl p-9 text-black flex flex-col justify-center">
            
          <Typography align="center" sx={{ fontSize: 28, fontWeight: 700 }}>
            Welcome to Curatal
          </Typography>

          <Typography align="center" sx={{ fontSize: 18, fontWeight: 700, fontStyle:"sora" }}>
            For Employer 
          </Typography>

          <Typography align="center" sx={{ fontSize: 12, fontWeight: 400 }}>
          Find top talent in just a few clicks!
          </Typography>
          <div className="gap-2 mt-4">
          <Typography align="left" sx={{ fontSize: 12, color: "red" }}>
            * All fields are mandatory
            </Typography>
            </div>
          {/* FIRST + LAST NAME */}
          <div className="flex gap-4 p-2">
            <TextField
              fullWidth
              placeholder="First Name"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            <TextField
              fullWidth
              placeholder="Last Name"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          {/* COMPANY */}
          <div className="flex gap-4 p-2">
          <TextField
           fullWidth
            placeholder="Company Name"
           name="companyName"
            value={form.companyName}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              ),
            }}
            />
                
              
              
          </div>

          {/* EMAIL */}
           <div className="flex gap-4 p-2">
          <TextField
            fullWidth
            placeholder="Email ID"
            name="email"
            value={form.email}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              ),
            }}
          />
         </div>
          {/* PHONE */}
            <div className="flex gap-4 p-2">
          <TextField
            fullWidth
            placeholder="Mobile Number"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaPhone />
                </InputAdornment>
              ),
            }}
          />
          </div>

          {/* PASSWORD */}
            <div className="flex gap-4 p-2">
          <TextField
            fullWidth
            placeholder="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={form.password}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <div
                    className="cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </InputAdornment>
              ),
            }}
          />
          </div>
          {/* TERMS */}
          <FormControlLabel
            control={
              <Checkbox
                name="agree"
                checked={form.agree}
                onChange={handleChange}
              />
            }
            label="I agree to Privacy Policy & Terms"
          />

           <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white p-3 rounded"
      >
        {loading ? "Creating Account..." : "Sign Up"}
      </button>

                <div className="gap-2 mt-4">
          <Typography align="center" sx={{ fontSize: 14, fontWeight: 500 }}>
            f You Have An Existing Account,
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => router.push("/auth/recruiter/login")}
            >
              Sign In!
            </span> 
          </Typography>
        </div>
        </div>
        </div>
        {/* RIGHT PANEL */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="h-[520px] w-[520px] rounded-xl bg-gradient-to-t from-[#0071B6] to-[#00B2E9] p-9 text-white flex flex-col justify-center">
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
              className="slide-up  mt-4"
              sx={{ fontSize: 18, fontWeight: 500 }}
            >
              CHAL Curatal and take the leap towards your dream career!
            </Typography>
            <div className="mt-6 space-y-3">
              {features.map((item, index) => (
                <div
                  key={item}                  className="slide-up flex items-start gap-4"
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
              className="slide-up mt-6 text-center gap-4"
              style={{ animationDelay: "3s" }}
              sx={{ fontSize: 18, fontWeight: 500 }}
            >
             Start your journey today and watch your career thrive!
            </Typography>
          </div>
           </div>   
        </div>
        </main>
  );
};