"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typography from "@mui/material/Typography";
import {
  FaWhatsapp,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaQuora,
  FaArrowUp,
  FaLocationArrow,
} from "react-icons/fa";
import { FaXTwitter, FaMedium, FaReddit } from "react-icons/fa6";
import isoPortal1 from "@/public/isoPortal1.png";
import isoPortal2 from "@/public/isoPortal2.png";
import whatsapplogo from "@/public/whatsapplogo.png";
import { LocateIcon } from "lucide-react";
import { LocationPin } from "@mui/icons-material";
const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="bg-sky-50 text-gray-700 pt-12 relative">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Registered Office */}
        <div>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Registered Office
          </Typography>
          <Typography fontWeight={600}>
            Progressive Video Pvt. Ltd
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}><LocationPin className="inline mb-1 mr-1" />
            Nexus, No.13 (Old No.614),
            <br />
            45<sup>th</sup> Cross, Marenahalli Road,
            <br />
            19<sup>th</sup> Cross, Krishnaya Layout,
            <br />
            Banashankari 3rd Stage,
            <br />
            Bengaluru - 560070
          </Typography>
        </div>
        {/* About */}
        <div>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            About
          </Typography>
          {["About Curatal", "Our Journey", "Leadership", "Careers"].map(
            (item) => (
              <Typography
                key={item}
                variant="body2"
                className="hover:text-blue-600 cursor-pointer"
              >
                {item}
              </Typography>
            )
          )}
        </div>
        {/* Resources */}
        <div>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Resources
          </Typography>
          {["Downloads", "Blogs", "Media", "Events", "CTRN"].map((item) => (
            <Typography
              key={item}
              variant="body2"
              className="hover:text-blue-600 cursor-pointer"
            >
              {item}
            </Typography>
          ))}
        </div>
        {/* Solutions */}
        <div>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            Solutions
          </Typography>
          <Typography variant="body2">
            <Link href="/auth/recruiter/account" className="hover:text-blue-600">
              For Employers
            </Link>
          </Typography>
          <Typography variant="body2">
            <Link href="/auth/candidate/account" className="hover:text-blue-600">
              For Candidates
            </Link>
          </Typography>
        </div>
      </div>
      {/* OFFICES + CONTACT */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
        <div>
          <Typography variant="subtitle1" fontWeight={600}>
            Corporate Office – Bengaluru
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}><LocationPin className="inline mb-1 mr-1" />
            Nexus, No.13 (Old No.614),
            <br />
            45<sup>th</sup> Cross, Marenahalli Road,
            <br />
            8<sup>th</sup> Block, Jayanagar,
            <br />
            Bengaluru - 560070
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle1" fontWeight={600}>
            Branch Office – Pune
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}><LocationPin className="inline mb-1 mr-1" />
            91Springboard, Sky Loft,
            <br />
            Creaticity Mall,Opposite,
            <br />
            Golf Course Off Airport Road,
            <br />
            Shastrinagar, Pune,
            <br />
            Maharashtra - 411006
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle1" fontWeight={600}>
            Branch Office – Hyderabad
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.8 }}><LocationPin className="inline mb-1 mr-1" />
            2<sup>nd</sup> Floor, 91Springboard,
            <br />
            Laxmi Cyber City,Whitefields,
            <br />
            HITEC City, Kondapur,
            <br />
            Hyderabad,Telangana - 500081
          </Typography>
        </div>
        <div>
          <Typography variant="subtitle1" fontWeight={600}>
            Contact
          </Typography>
          <Typography variant="body2">📧 reach@curatal.com</Typography>
          <Typography variant="body2">📞 +91 63645 21909</Typography>
          <div className="flex gap-4 mt-4">
            <Image src={isoPortal1} alt="ISO 9001" height={48} />
            <Image src={isoPortal2} alt="ISO 27001" height={48} />
          </div>
        </div>
      </div>
      {/* SOCIAL ICONS */}
      <div className="max-w-7xl mx-auto px-1 flex justify-start gap-6 mt-10 text-xl text-#2088b9 fill=#236482">
        <FaWhatsapp />
        <FaLinkedin />
        <FaYoutube />
        <FaFacebook />
        <FaInstagram />
        <FaXTwitter />
        <FaQuora />
        <FaMedium />
        <FaReddit />
      </div>
      <div>
        <div className="text-center mt-6">
          <Typography variant="body2">
            © 2025 Curatal. All rights reserved.
          </Typography>
        </div>
      </div>
      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg"
      >
        <FaArrowUp />
      </button>
      {/* WHATSAPP FLOAT */}
      <a
        href="https://api.whatsapp.com/send?phone=916364521909"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50"
      >
        <Image src={whatsapplogo} alt="WhatsApp" width={50} height={50} />
      </a>
    </footer>
  );
};
export default Footer;
