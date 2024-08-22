import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
}); // Load environment variables from .env file

connectDB() // Connect to MongoDB
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error("MongoDB connection failed: ", error);
});