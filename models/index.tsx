import { Sequelize } from "sequelize-typescript";
import { Candidate } from "@/models/candidate";
import { Recruiter } from "@/models/recruiter";

export const sequelize = new Sequelize({
  database: process.env.DB_NAME || "database",
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres", // ⚠ must be string
  host: process.env.DB_HOST || "localhost",
  dialect: "postgres",
  models: [Candidate, Recruiter],
  logging: false,
});

export const dbInit = async () => {
  await sequelize.sync({ alter: true });
};