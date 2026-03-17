"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const features: string[] = [
    "Build a standout resume with customizable templates",
    "Get matched with jobs tailored to your skills",
    "Know your worth with the Salary Predictor",
    "Ace interviews with expert-led mock sessions",
    "Get assessed, receive personalized insights, and grow with Curatal",
  ];

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleLogin = async () => {
    if (!isFormValid) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/candidate/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      if (data?.token) {
        localStorage.setItem("token", data.token);
      }

      if (data?.user) {
        localStorage.setItem("candidateUser", JSON.stringify(data.user));
      }

      router.push("/candidate/dashboard");

    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Login failed. Please try again.";
      console.error("Login Error:", message);
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-7xl bg-[#EBF7FF] rounded-2xl p-4 flex flex-col lg:flex-row gap-10">

        {/* LEFT PANEL */}
        <div className="hidden lg:flex items-center justify-center p-6">
          <div className="h-[580px] w-[520px] rounded-xl bg-gradient-to-t from-[#0071B6] to-[#00B2E9] p-9 text-white flex flex-col justify-center">

            <Typography align="center" sx={{ fontSize: 27, fontWeight: 800 }}>
              Create. Harness.
            </Typography>

            <Typography align="center" sx={{ fontSize: 27, fontWeight: 800 }}>
              Achieve. Lead.
            </Typography>

            <Typography sx={{ fontSize: 20, fontWeight: 550 }} className="mt-4">
              CHAL Curatal and take the leap towards your dream career!
            </Typography>

            <div className="mt-4 space-y-3">
              {features.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <Image
                    src="/checkmark.png"
                    alt="check"
                    width={28}
                    height={28}
                  />
                  <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                    {item}
                  </Typography>
                </div>
              ))}
            </div>

            <Typography sx={{ fontSize: 18, fontWeight: 500 }} className="mt-6">
              Start your journey today and watch your team thrive!
            </Typography>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-1 flex-col justify-center gap-4 p-6">

          <Typography align="center" sx={{ fontSize: 28, fontWeight: 900 }}>
            Welcome Back!
          </Typography>

          <Typography align="center" sx={{ fontSize: 14 }}>
            Your next opportunity is just a login away!
          </Typography>

          {/* EMAIL */}
          <TextField
            fullWidth
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* PASSWORD */}
          <TextField
            fullWidth
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
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* FORGOT PASSWORD */}
          <Typography
            align="right"
            sx={{ fontSize: 14, color: "blue", cursor: "pointer" }}
            onClick={() =>
              router.push("/auth/candidate/forgotpassword")
            }
          >
            Forgot Password?
          </Typography>

          {/* LOGIN BUTTON */}
          <button
            onClick={handleLogin}
            disabled={!isFormValid || loading}
            className="bg-[#0071B6] text-white px-6 py-3 text-base rounded-md font-semibold 
                       hover:bg-[#005A8C] transition duration-300 w-full 
                       disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <Divider className="my-4">Or Continue with</Divider>

          {/* SOCIAL LOGIN (UI Only) */}
          <div className="flex justify-center items-center gap-6">
            <div className="bg-white p-2 rounded-xl shadow-md">
              <Image src="/linkedin.jpg" alt="LinkedIn" width={24} height={24} />
            </div>

            <div className="bg-white p-2 rounded-xl shadow-md">
              <Image src="/google.png" alt="Google" width={24} height={24} />
            </div>
          </div>

          <Typography align="center" sx={{ fontSize: 14 }}>
            Not On Curatal?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => router.push("/auth/candidate/signup")}
            >
              Sign Up!
            </span>
          </Typography>

        </div>
      </div>
    </main>
  );
};