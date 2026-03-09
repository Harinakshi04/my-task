import { Sequelize } from "sequelize-typescript";
import { Candidate } from "@/models/candidate";
import { Recruiter } from "@/models/recruiter";

export const sequelize = new Sequelize({
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "database",
  models: [Candidate, Recruiter], // register model classes only
  logging: true, // enable to debug DB queries
});

export const dbInit = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");

    await sequelize.sync({ alter: true }); // sync all models
    console.log("Models synced successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    throw error; // important so API routes know DB failed
  }
};