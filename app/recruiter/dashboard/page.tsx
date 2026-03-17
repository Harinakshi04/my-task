"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Select,
  Stack,
  Skeleton,
  MenuItem,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  { name: "Interviewed", value: 141616 },
  { name: "Not Interviewed", value: 713985 },
];

const COLORS = ["#ff7f0e", "#1976d2"];
export default function DashboardPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [company, setCompany] = useState("");
  const [recruiterName, setRecruiterName] = useState<string | null>(null);

  const handleResetFilters = () => {
    setStartDate("");
    setEndDate("");
    setCompany("");
  };

  const handleCompanyChange = (event: SelectChangeEvent) => {
    setCompany(event.target.value);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const storedUser = localStorage.getItem("recruiterUser");
      if (!storedUser) {
        return;
      }

      const user = JSON.parse(storedUser) as {
        firstName?: string;
        lastName?: string;
        email?: string;
      };

      const fullName = [user.firstName, user.lastName]
        .filter((part) => !!part && part.trim().length > 0)
        .join(" ")
        .trim();

      if (fullName) {
        setRecruiterName(fullName);
      } else if (user.email) {
        setRecruiterName(user.email);
      }
    } catch (error) {
      console.error("Failed to load recruiter user from storage", error);
    }
  }, []);
  return (
    <Box sx={{ background: "#f4f6f8", minHeight: "100vh", p: 3 }}>

      {/* Header */}
      <Typography variant="h5" fontWeight="bold">
        Dashboard
      </Typography>
      <div className="flex gap-3 justify-between p-3 ">
        <Typography mb={3}>
          Welcome {recruiterName ?? "Recruiter"}!
        </Typography>

        {/* Filters */}
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
          <TextField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            label="End Date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />

          <Select
            value={company}
            onChange={handleCompanyChange}
            displayEmpty
            sx={{ minWidth: 200 }}
          >
            <MenuItem value="">
              <em>Select Company</em>
            </MenuItem>
            <MenuItem value="Curatal">Curatal</MenuItem>
            <MenuItem value="HCL">HCL</MenuItem>
            <MenuItem value="TCS">TCS</MenuItem>
            <MenuItem value="Movare">Movare</MenuItem>
            <MenuItem value="Coforge">Coforge</MenuItem>
            <MenuItem value="KPMG">KPMG</MenuItem>
          </Select>

          <Button variant="outlined" onClick={handleResetFilters}>
            Reset
          </Button>
        </Box>
      </div>
      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-5">

        {/* Left Cards */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

          {/* Paid Customers */}
          <div className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer">
            <div className="text-sm text-center py-3 hover:underline">
              Paid Customers
            </div>

            <div className="text-2xl text-center py-3">1354</div>

            <div className="border-b"></div>

            <div className="bg-blue-50 flex text-xs px-4 py-4 justify-between">
              <span>Active: 1156</span>
              <span>Inactive: 166</span>
              <span>Cancelled: 32</span>
            </div>
          </div>

          {/* Pilot Customers */}
          <div className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer">
            <div className="text-sm text-center py-3 hover:underline">
              Pilot Customers
            </div>

            <div className="text-2xl text-center py-3">261</div>

            <div className="border-b"></div>

            <div className="bg-blue-50 flex text-xs px-4 py-4 justify-between">
              <span>Active: 205</span>
              <span>Inactive: 11</span>
              <span>Cancelled: 45</span>
            </div>
          </div>

          {/* Jobs */}
          <div className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer">
            <div className="text-sm text-center py-3 hover:underline">Jobs</div>

            <div className="text-2xl text-center py-3">23582</div>

            <div className="border-b"></div>

            <div className="bg-blue-50 flex text-xs px-4 py-4 justify-between">
              <span>Open: 23563</span>
              <span>Closed: 19</span>
              <span>Unpublished: 679</span>
            </div>
          </div>

          {/* Recently Active */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="text-sm text-center py-3">Recently Active</div>

            <div className="text-2xl text-center py-3">109206</div>

            <div className="border-b"></div>

            <div className="bg-blue-50 flex text-xs px-4 py-4 justify-between">
              <span>Last week: 1133</span>
              <span>Last 24h: 229</span>
            </div>
          </div>

          {/* Custom Tickets */}
          <div className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer">
            <div className="text-sm text-center py-3 hover:underline">
              Custom Sales Tickets
            </div>

            <div className="text-2xl text-center py-3">167</div>

            <div className="border-b"></div>

            <div className="bg-blue-50 flex text-xs px-4 py-4 justify-between">
              <span>Open: 37</span>
              <span>Closed: 130</span>
            </div>
          </div>

          {/* Support Tickets */}
          <div className="border border-gray-300 rounded-lg overflow-hidden cursor-pointer">
            <div className="text-sm text-center py-3 hover:underline">
              Open Support Tickets
            </div>

            <div className="text-2xl text-center py-3">4315</div>

            <div className="border-b"></div>

            <div className="bg-blue-50 flex text-xs px-4 py-4 justify-between">
              <span>Candidate: 4309</span>
              <span>Recruiter: 6</span>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col items-center">
          <div className="text-xl py-2">Total Candidates</div>

          <div className="text-xl text-blue-600 py-2">856719</div>

          <div className="border rounded-lg p-4 w-full flex justify-center">
            <canvas width="250" height="250">
            </canvas>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <Box className="w-full">
      </Box>


      {/* Filters */}
      <div >
        <div className="flex gap-6 justify-center p-6 ">
          <div>
            <Typography> PROFILE UPLOADED vs SCHEDULED vs COMPLETED vs PENDING-QC (IAAS & CAAS)</Typography>
          </div>
          <Box className="flex items-center justify-end gap-4 mb-4">

            {/* Company Select */}
            <TextField
              select
              label="Company"
              size="small"
              sx={{ width: 220 }}
            >
              <MenuItem value="curatal">Curatal</MenuItem>
              <MenuItem value="hcl">HCL</MenuItem>
              <MenuItem value="tcs">TCS</MenuItem>
            </TextField>

            {/* Month Picker */}
            <TextField
              type="month"
              size="small"
              defaultValue="2026-03"
            />

          </Box>
        </div>

        {/* Skeleton Loading Chart */}

        <Box>
          <Stack direction="row" spacing={1} alignItems="flex-end">
            {Array.from({ length: 15 }).map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                width={24}
                height={Math.random() * 200 + 40}
              />
            ))}
          </Stack>
        </Box>
      </div>
      {/*Filters Section  */}
      <div >
        <div className="flex gap-6 justify-center p-6 ">
          <Typography> PROFILE UPLOADED vs SCHEDULED vs COMPLETED vs PENDING-QC (Recruitment)</Typography>

          <Box className="flex items-center justify-end gap-4 mb-4">

            {/* Company Select */}
            <TextField
              select
              label="Company"
              size="small"
              sx={{ width: 220 }}
            >
              <MenuItem value="curatal">Curatal</MenuItem>
              <MenuItem value="hcl">HCL</MenuItem>
              <MenuItem value="tcs">TCS</MenuItem>
            </TextField>

            {/* Month Picker */}
            <TextField
              type="month"
              size="small"
              defaultValue="2026-03"
            />

          </Box>
        </div>

        {/* Skeleton Loading Chart */}

        <Box>
          <Stack direction="row" spacing={1} alignItems="flex-end">
            {Array.from({ length: 15 }).map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                width={24}
                height={Math.random() * 200 + 40}
              />
            ))}
          </Stack>
        </Box>
      </div>


      {/* Title */}
      <div className="flex gap-3 justify-center p-3 ">
        <div className="font-normal text-xl gap-6 py-1 my-2 ">
          Candidate Status
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mr-5">

          <form>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">

              {/* Start Date */}
              <input
                type="date"
                name="startDate"
                placeholder="Start Date"
                className="border border-gray-300 px-3 py-1 rounded-md text-sm"
              />

              <span>-</span>

              {/* End Date */}
              <input
                type="date"
                name="endDate"
                placeholder="End Date"
                className="border border-gray-300 px-3 py-1 rounded-md text-sm"
              />
            </div>
          </form>

          {/* Reset */}
          <span className="text-blue-600 font-medium text-xs cursor-pointer hover:underline">
            Reset
          </span>
        </div>
        {/* Candidate Sources Title */}
        <div className="font-normal text-xl py-1 my-2">
          Candidate Sources
        </div>
      </div>
      <div className="flex gap-6 p-4 justifuy-center">
        <div className="border border-gray-300 rounded-lg h-[352px] w-[700px] flex justify-center items-center p-4">
          <Image
            src="/candidate status.png"
            alt="Candidate Status"
            width={559}
            height={318}
          />
        </div>
        <div className="border border-gray-300 rounded-lg h-[352px] w-[450px] flex justify-center items-center p-4">
          <Image
            src="/candidate source.png"
            alt="Candidate Sources"
            width={559}
            height={318}
          />
        </div>
      </div>
      {/* Pushed to Interview Status */}
      <div className="flex justify-between items-center gap-3 p-4">
        <Typography>Pushed To Interview Stats</Typography>
        <Typography>Primary</Typography>
        <Typography>Top Companies</Typography>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-3 gap-6 p-6">

        {/* Card 1 */}
        <div className="flex flex-col gap-6">

          <div className="border border-gray-300 rounded-lg h-[180px] text-center p-4">
            <div>Total Companies</div>
            <div className="text-2xl text-blue-600">NaN</div>
            <div className="bg-blue-50 mt-3 p-2">Downloaded: NaN</div>
          </div>

          <div className="border border-gray-300 rounded-lg h-[180px] text-center p-4">
            <div>Total Jobs</div>
            <div className="text-2xl text-blue-600">NaN</div>
            <div className="bg-blue-50 mt-3 p-2">Downloaded: NaN</div>
          </div>

        </div>

        {/* Card 3 */}
        <div className="border border-gray-300 rounded-lg h-[382px] flex justify-center items-center">
          No data available
        </div>

        {/* Card 4 */}
        <div className="border border-gray-300 rounded-lg h-[382px] flex justify-center items-center">
          <Image
            src="/topcompanies.png"
            alt="Top Companies"
            width={400}
            height={300}
          />
        </div>
      </div>
      {/*Interview Status  */}

      <div className="flex justify-between items-center gap-6 p-4">
        <Typography>Interview Status</Typography>
        <Typography>Candidate Pushed to Interview</Typography>
        <TextField
          type="month"
          size="small"
          defaultValue="2026-03"
        />

      </div>
      <div className="flex justify-center gap-6">
        <div className="border border-gray-300 rounded-lg h-[382px] w-[450px] flex justify-center items-center">
          <Image
            src="/interview.png"
            alt="interview status"
            width={400}
            height={300}
          />
        </div>
        <div className="border border-gray-300 rounded-lg h-[382px] w-[850px] flex justify-center items-center">
          <Image
            src="/blank.png"
            alt="interview status"
            width={400}
            height={300}
          />
        </div>
      </div>
      {/* Downloads */}
      <div className="flex justify-between items-center gap-6 p-4">
        <Typography>Downloaded Profile Count</Typography>

        <TextField
          type="month"
          size="small"
          defaultValue="2026-03"
        />
      </div>
      <div className="border border-gray-300 rounded-lg h-[75px] flex p-3  items-center">
        Loading...
      </div>
    </Box>

  );
};