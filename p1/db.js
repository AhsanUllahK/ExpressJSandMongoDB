import mongoose from "mongoose";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB using the environment variable
mongoose
  .connect(process.env.Mongo_DB_URL)
  .then(() => console.log("Database connection is completed successfully"))
  .catch(() => console.log("Database connection fails!"));
