"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@/components/ui/button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import LinkedinIcon from "@/public/Linkedin.jpg";
import GoogleIcon from "@/public/google.png";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [gender, setGender] = useState("");
  const [form, setForm] = useState({ agree: false, password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked, value, type } = e.target;
    if (name === "password") {
      setForm((prev) => ({ ...prev, [name]: value }));
    } else {
      setForm((prev) => ({ ...prev, [name]: checked }));
    }
  };
   const handleSignup = async () => {
  try {
    if (!email || !mobile || !form.password || !gender) {
      alert("Please fill all fields");
      return;
    }

    if (!form.agree) {
      alert("Please accept terms & conditions");
      return;
    }

    const res = await fetch("/api/auth/candidate/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        mobile,
        password: form.password,
        gender,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      
      router.push("/auth/candidate/login");
    } else {
      alert(data.message);
    }
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};
  const features: string[] = [
    "Build a standout resume with customizable templates",
    "Get matched with jobs tailored to your skills",
    "Know your worth with the Salary Predictor",
    "Ace interviews with expert-led mock sessions",
    "Get assessed, receive personalized insights, and grow with Curatal",
  ];
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-7xl bg-[#EBF7FF] rounded-2xl p-6 flex flex-col lg:flex-row gap-10">

        {/* LEFT PANEL */}
        <div className="flex flex-1 flex-col justify-center gap-2 p-4">
         <div className="flex flex-col items-center gap-2">
          <Typography align="center" sx={{ fontSize: 28, fontWeight: 900 }}>
            Welcome to Curatal
          </Typography>
          <Typography align="center" sx={{ fontSize: 18, fontWeight: 700 }}>
            For Candidate
          </Typography>

          <Typography align="center" sx={{ fontSize: 12, fontWeight: 400 }}>
            Your dream job is just a few clicks away
          </Typography>
          </div>
          {/* EMAIL */}
          <div className="gap-1">
          <TextField
            fullWidth
            placeholder="name@xyz.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /> 
          <Typography sx={{ fontSize: 12 }}>Must be valid email</Typography>
           </div>
          {/* MOBILE */}
          <div className="gap-1 ">
          <TextField
           
            fullWidth
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          </div>

          {/* PASSWORD */}
            <div className="flex gap-1 ">
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
          {/* GENDER */}
            <div className="gap-1">
            <RadioGroup
              row
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
               <Typography sx={{ fontSize: 18, fontWeight: 500 }} className="mr-4 gap-6 p-4 flex items-center"> Select Gender </Typography>
              <FormControlLabel
                value="male"
                control={<Radio size="small" />}
                label="Male"
              />

              <FormControlLabel
                value="female"
                control={<Radio size="small" />}
                label="Female"
              />

              <FormControlLabel
                value="preferNotToSay"
                control={<Radio size="small" />}
                label="Prefer not to share"
              />
            </RadioGroup>
            </div>

          {/* TERMS */}
            <div className="gap-1 ">
          <FormControlLabel
            control={
              <Checkbox
                name="agree"
                checked={form.agree}
                onChange={handleChange}
              />
            } label="By Signing Up, I Agree To Curatal's Privacy Policy and Terms Of Service and agree to receive whatsapp notifications." />
            </div>

          {/* SUBMIT BUTTON */}
          <div className="gap-1   " >
           <Button
            onClick={handleSignup}
             className="w-full bg-blue-600 text-white hover:bg-blue-700">

                Sign Up
              </Button>
        <Divider sx={{ my: 2 }}>
          <Typography align="center" sx={{ fontSize: 14, fontWeight: 500 }}>
            Or Continue with
          </Typography>
          </Divider>
            <div className="flex justify-center items-center gap-6 mt-6">
           <div className="bg-white p-1 rounded-xl shadow-md">
           <Image src="/linkedin.jpg" alt="LinkedIn" width={24} height={24} />
           </div>

         <div className="bg-white p-1 rounded-xl shadow-md">
          <Image src="/google.png" alt="Google" width={24} height={24} />
          </div>
          </div>
          <div className="gap-1 mt-4">
          <Typography align="center" sx={{ fontSize: 14, fontWeight: 500 }}>
            If You Have An Existing Account, <span className="text-blue-600 cursor-pointer " onClick={() => router.push("/auth/candidate/login")}>Sign In</span>
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
              sx={{ fontSize: 20, fontWeight: 500 }}
            >
              CHAL Curatal and take the leap towards your dream career!
            </Typography>

            <div className="mt-6 space-y-3">
              {features.map((item, index) => (
                <div
                  key={item}
                  className="slide-up flex items-start gap-4"
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
             Start your journey today and watch your team thrive!
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
};