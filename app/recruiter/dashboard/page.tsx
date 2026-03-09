"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Avatar,
  InputAdornment,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CampaignIcon from "@mui/icons-material/Campaign";
import SearchIcon from "@mui/icons-material/Search";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const pieData = [
  { name: "Interviewed", value: 141616 },
  { name: "Not Interviewed", value: 713985 },
];

const COLORS = ["#ff7f0e", "#1976d2"];

const DashboardPage: React.FC = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [company, setCompany] = useState<string>("");

  const handleResetFilters = () => {
    setStartDate("");
    setEndDate("");
    setCompany("");
  };

  const handleCompanyChange = (event: SelectChangeEvent) => {
    setCompany(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        background: "#f4f6f8",
        p: 4,
        overflowY: "auto",
      }}
    >
      {/* Topbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
          p: 2,
          background: "white",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Typography variant="h6">CURATAL</Typography>

        <TextField
          placeholder="Search Jobs"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ width: 350 }}
        />

        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <CampaignIcon />
          <NotificationsIcon />
          <Avatar>HT</Avatar>
        </Box>
      </Box>

      {/* Dashboard Header */}
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Dashboard
      </Typography>
      <div className="flex gap-18">
      <Typography sx={{ mb: 4 }}>Welcome Harinakshi Timmappa Naik!</Typography>

      {/* Filter Section */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          mb: 4,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ width: 180 }}
        />
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{ shrink: true }}
          sx={{ width: 180 }}
        />
        <Select
          value={company}
          onChange={handleCompanyChange}
          displayEmpty
          sx={{ width: 200 }}
        >
          <MenuItem value="">
            <em>Company</em>
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

      {/* Stats Cards */}
      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 4 }}>
        {[
          { title: "Paid Customers", value: "1353", desc: "Active:1156 Inactive:165 Cancelled:32" },
          { title: "Pilot Customers", value: "261", desc: "Active:205 Inactive:11 Cancelled:45" },
          { title: "Jobs", value: "23524", desc: "Open:23512 Closed:12" },
          { title: "Total Candidates", value: "855601", desc: "" },
         
        ].map((card, idx) => (
          <Card key={idx} sx={{ flex: "1 1 200px", p: 3 }}>
            <CardContent>
              <Typography>{card.title}</Typography>
              <Typography variant="h4" color="primary">
                {card.value}
              </Typography>
              {card.desc && <Typography color="text.secondary">{card.desc}</Typography>}
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Second Row: Tickets + Pie Chart */} 
      <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
        <Card sx={{ flex: "1 1 200px", p: 3 }}>
          <CardContent>
            <Typography>Recently Activated</Typography>
            <Typography variant="h4" color="primary">
              167
            </Typography>
            <Typography color="text.secondary">Open:37 Closed:130</Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: "1 1 200px", p: 3 }}>
          <CardContent>
            <Typography>Custom Sales Tickets</Typography>
            <Typography variant="h4" color="primary">
              167
            </Typography>
            <Typography color="text.secondary">Open:37 Closed:130</Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: "1 1 200px", p: 3 }}>
          <CardContent>
            <Typography>Open Support Tickets</Typography>
            <Typography variant="h4" color="primary">
              4268
            </Typography>
            <Typography color="text.secondary">Candidate:4262 Recruiter:6</Typography>
          </CardContent>
        </Card>

        <Card sx={{ flex: "2 1 400px", p: 3 }}>
          <CardContent>
            <PieChart width={350} height={300}>
              <Pie data={pieData} dataKey="value" outerRadius={120} label>
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default DashboardPage;