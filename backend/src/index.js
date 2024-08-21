import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
}); // Load environment variables from .env file

connectDB(); // Connect to MongoDB