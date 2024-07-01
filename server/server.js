const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const user = require("./models/userSchema");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Replace with your actual MongoDB connection string
mongoose.connect("mongodb://127.0.0.1:27017/usersDb")
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Database connection error:", error));

app.post('/api/users', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Perform data validation checks here if necessary
    const newUser = new user({ username: username, email: email, Password: password });
    console.log(newUser)
    const savedUser = await newUser.save();
    } catch (error) {
      console.error('Error creating user:', error);
    }
});

app.post("/log-in", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await user.findOne({ userName: username, Password: password });

    if (!existingUser) {
      return res.status(401).send("Invalid username or password");
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: existingUser._id, username: existingUser.userName },
      secretKey,
      { expiresIn: '1h' }
    );

    res.status(200).json({ token }); // Send token to the client
  } catch (error) {
    console.log("Login error:", error);
    res.status(500).json({ message: "Login failed" });
  }
});

app.post("/log-out", (req, res) => {
  // Here you can handle any server-side logic for logging out, such as blacklisting the token
  res.status(200).json({ message: "Logout successful" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});