"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Typography from "@mui/material/Typography";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LoginPage() {
  const router = useRouter();

  const features: string[] = [
    "Build a standout resume with customizable templates",
    "Get matched with jobs tailored to your skills",
    "Know your worth with the Salary Predictor",
    "Ace interviews with expert-led mock sessions",
    "Get assessed, receive personalized insights, and grow with Curatal",
  ];

  return (
   
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-7xl bg-[#EBF7FF] rounded-2xl p-10 flex flex-col lg:flex-row gap-10">

        {/* LEFT PANEL */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="h-[520px] w-[520px] rounded-xl bg-gradient-to-t from-[#0071B6] to-[#00B2E9] p-10 text-white flex flex-col justify-center">

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
              Start your journey today and watch your career thrive!
            </Typography>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="flex flex-1 flex-col justify-center gap-6 p-6">
          <Typography align="center" sx={{ fontSize: 36, fontWeight: 700 }}>
            Welcome to Curatal!
          </Typography>

          <div className="cards flex flex-col gap-6 items-center">

            {/* SIGN IN CARD */}
            <div
              className="card1 w-full max-w-[500px] h-[130px] rounded-xl p-6 text-white shadow-md bg-cover bg-center flex items-center justify-between gap-6"
              style={{ backgroundImage: "url('/auth-bg.png')" }}
            >
              <div>
                <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                  Let’s Dive Back In!
                </Typography>
                <Typography sx={{ fontSize: 14 }}>
                  Sign in to access your candidate account<br></br> and continue your journey..
                </Typography>
              </div>

              <div className="flex items-center gap-4">
                <Image src="/login.svg" alt="login" width={44} height={44} />
                <button
                  onClick={() => router.push("/auth/candidate/login")}
                  className="bg-[#0071B6] text-white px-6 py-3 text-base rounded-md hover:opacity-90"
                >
                  Sign In
                </button>
              </div>
            </div>

            {/* SIGN UP CARD */}
            <div
              className="card2 w-full max-w-[500px] h-[130px] rounded-xl p-6 text-white shadow-md bg-cover bg-center flex items-center justify-between gap-6"
              style={{ backgroundImage: "url('/auth-bg.png')" }}
            >
              <div>
                <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
                  New Here?
                </Typography>
                <Typography sx={{ fontSize: 14, fontWeight: 400 }}>
                  Create an account to explore exclusive <br></br>candidate features and opportunities.
                </Typography>
              </div>

              <div className="flex items-center gap-4">
                <Image src="/signup.svg" alt="signup" width={44} height={44} />
                <button
                  onClick={() => router.push("/auth/candidate/signup")}
                  className="bg-[#0071B6] text-white px-6 py-3 text-base rounded-md hover:opacity-90 "
                >
                  Sign Up
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
    
  );
};
