import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoutes from "./route/book.route.js";
import cors from "cors";
import userRoute from "./route/user.route.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());
const port = process.env.PORT || 4000;
const URI = process.env.MONGO_URI;

if (!URI) {
  console.error("❌ MongoDB URI is not defined in .env");
  process.exit(1);
}

mongoose
  .connect(URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => console.error("❌ MongoDB Connection Error:", error));

//defining routes

app.use("/book", bookRoutes);

app.use("/user", userRoute);

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
