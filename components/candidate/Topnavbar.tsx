"use client";

import React, { useState } from "react";
import {
  Typography,
  Box,
  Popper,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import { useRouter } from "next/navigation";
export default function TopNavbar() {
  const router = useRouter();

  // Wallet popup state
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  // Avatar menu state
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);

  const openWallet = Boolean(anchorEl);
  const openProfile = Boolean(profileAnchor);

  const handleWalletClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setProfileAnchor(event.currentTarget);
  };

  const handleProfileClose = () => {
    setProfileAnchor(null);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const handleSubmit = () => {
    console.log("Selected:", selected);
    setAnchorEl(null);
  };

  return (
    <header
      className="z-40 w-full py-4 bg-white lg:px-1 sm:h-20"
      style={{ boxShadow: "rgba(0,0,0,0.16) 0px 3px 6px" }}
    >
      <div className="w-full flex sm:gap-5 lg:gap-[132px] items-center justify-between px-1 sm:px-5 h-full">

        {/* Logo */}
        <img src="/curatalLogo.jpg" alt="logo" className="w-28 sm:w-[140px]" />

        {/* Search */}
        <div className="hidden sm:flex max-w-[520px] w-full">
          <div className="flex items-center border rounded-lg px-3 w-full">

            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                d="M21 21l-5.2-5.2M10 18a8 8 0 100-16 8 8 0 000 16z"
                stroke="black"
                strokeWidth="2"
                fill="none"
              />
            </svg>

            <input
              type="text"
              placeholder="Search Jobs"
              className="w-full outline-none py-2"
            />
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-6">

          {/* What's New */}
          <img src="/whats-new.png" className="w-8 h-8 cursor-pointer" />

          {/* Wallet */}
          <Box>
            <Box
              onClick={handleWalletClick}
              sx={{ width: 40, height: 40, cursor: "pointer" }}
            >
              <img src="/wallet.png" width="35" />
            </Box>

            <Popper open={openWallet} anchorEl={anchorEl} placement="bottom-end">
              <Paper
                sx={{
                  p: 3,
                  width: 320,
                  borderRadius: 2,
                  boxShadow: "0px 5px 20px rgba(0,0,0,0.2)",
                }}
              >
                <Typography fontWeight={600} mb={2}>
                  Your Curatal wallet has been credited with INR 5000
                </Typography>

                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox value="Mock Interview" onChange={handleChange} />}
                    label="Mock Interview"
                  />

                  <FormControlLabel
                    control={<Checkbox value="Mentoring Services" onChange={handleChange} />}
                    label="Mentoring Services"
                  />

                  <FormControlLabel
                    control={<Checkbox value="Upgrad Upskilling Programs" onChange={handleChange} />}
                    label="Upgrad Upskilling Programs"
                  />
                </FormGroup>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                  disabled={selected.length === 0}
                  onClick={handleSubmit}
                >
                  SUBMIT
                </Button>
              </Paper>
            </Popper>
          </Box>

          {/* Notification */}
          <img src="/notification.png" className="w-7 h-7 cursor-pointer" />

          {/* Avatar */}
          <div
            onClick={handleProfileClick}
            className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center font-semibold cursor-pointer"
          >
            HN
          </div>

          {/* Profile Menu */}
          <Menu
            anchorEl={profileAnchor}
            open={openProfile}
            onClose={handleProfileClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            transformOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <MenuItem onClick={handleProfileClose}>My Profile</MenuItem>


            <MenuItem onClick={handleProfileClose}>Support</MenuItem>
            <MenuItem onClick={handleProfileClose}>Terms & Conditions</MenuItem>
            <MenuItem onClick={handleProfileClose}>Privacy Policy</MenuItem>
            <MenuItem
             onClick={() => {
             setProfileAnchor(null);
             router.push("/auth/candidate/account");
             }}
             >
             Logout
           </MenuItem>
          </Menu>

        </div>
      </div>
    </header>
  );
}