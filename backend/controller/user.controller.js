// controller/user.controller.js
import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"; // Use bcrypt (imported correctly)

export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    console.log("BODY RECEIVED:", req.body);

    // Validate fields
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Save new user with hashed password
    const user = new User({ fullname, email, password: hashedPassword });
    await user.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    if (error.response) {
      console.log(error);
      alert("Error: " + error.response.data.message);
    }
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate fields
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Compare passwords
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
