import { Sequelize } from "sequelize-typescript";
import { Candidate } from "@/models/candidate";

export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  dialect: "postgres",
  models: [Candidate],
});

// ✅ initialize DB
export const dbInit = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });

    console.log("Database connected ✅");
  } catch (error) {
    console.error("Database connection error ❌", error);
  }
};